import dns from "dns";
import type { Db } from "mongodb";
import mongoose from "mongoose";

function setMongoDnsServers() {
  const dnsToggle = process.env.MONGODB_ENABLE_CUSTOM_DNS;
  const servers = process.env.MONGODB_DNS_SERVERS;
  const hasDnsServers = Boolean(servers?.trim());
  const useCustomDns =
    dnsToggle === "true" || (dnsToggle === undefined && hasDnsServers);

  if (!useCustomDns || !servers) return;

  const list = servers
    .split(",")
    .map((server) => server.trim())
    .filter(Boolean);

  if (list.length > 0) {
    try {
      dns.setServers(list);
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("Failed to apply custom Mongo DNS servers:", error);
      }
    }
  }
}

function getMongoUris() {
  const primaryUri = process.env.MONGODB_URI;
  const fallbackUri = process.env.MONGODB_URI_FALLBACK;
  const activeUri = primaryUri || fallbackUri;
  const forceFallback = process.env.MONGODB_FORCE_FALLBACK === "true";

  if (!activeUri) {
    throw new Error(
      "Missing MongoDB URI. Set MONGODB_URI (or MONGODB_URI_FALLBACK).",
    );
  }

  return { activeUri, primaryUri, fallbackUri, forceFallback };
}

function isSrvDnsRefusedError(error: unknown) {
  if (!error) return false;

  const queue: unknown[] = [error];
  const visited = new Set<object>();

  while (queue.length > 0) {
    const current = queue.pop();
    if (!current || typeof current !== "object") continue;
    if (visited.has(current)) continue;
    visited.add(current);

    const maybeErr = current as {
      code?: string;
      syscall?: string;
      message?: string;
      cause?: unknown;
      reason?: unknown;
      error?: unknown;
      originalError?: unknown;
      errors?: unknown;
    };

    if (
      maybeErr.code === "ECONNREFUSED" &&
      (maybeErr.syscall === "querySrv" ||
        maybeErr.message?.includes("querySrv") ||
        maybeErr.message?.includes("_mongodb._tcp"))
    ) {
      return true;
    }

    if (
      maybeErr.message?.includes("querySrv") &&
      maybeErr.message.includes("ECONNREFUSED")
    ) {
      return true;
    }

    if (maybeErr.cause) queue.push(maybeErr.cause);
    if (maybeErr.reason) queue.push(maybeErr.reason);
    if (maybeErr.error) queue.push(maybeErr.error);
    if (maybeErr.originalError) queue.push(maybeErr.originalError);
    if (Array.isArray(maybeErr.errors)) queue.push(...maybeErr.errors);
  }

  return false;
}

async function connectWithUriFallback() {
  const { activeUri, primaryUri, fallbackUri, forceFallback } = getMongoUris();
  const canRetryWithFallback = Boolean(
    primaryUri && fallbackUri && primaryUri !== fallbackUri,
  );

  if (forceFallback) {
    if (!fallbackUri) {
      throw new Error(
        "MONGODB_FORCE_FALLBACK=true requires MONGODB_URI_FALLBACK to be set.",
      );
    }
    return mongoose.connect(fallbackUri);
  }

  try {
    return await mongoose.connect(activeUri);
  } catch (error) {
    if (!canRetryWithFallback || !isSrvDnsRefusedError(error)) {
      throw error;
    }

    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "MongoDB SRV DNS lookup was refused. Retrying with MONGODB_URI_FALLBACK.",
      );
    }

    return mongoose.connect(fallbackUri as string);
  }
}

setMongoDnsServers();

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache ?? {
  conn: null,
  promise: null,
};

global.mongooseCache = cached;

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = connectWithUriFallback().catch((error) => {
      cached.promise = null;
      throw error;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export async function getDb(): Promise<Db> {
  const conn = await connectToDatabase();
  const db = conn.connection.db;
  if (!db) {
    throw new Error("MongoDB connection is not ready.");
  }
  return db;
}
