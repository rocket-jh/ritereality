import type { NextRequest } from "next/server";
import { getSessionUser } from "@/lib/auth";

type Permission = "manage_blogs";

const BLOG_ALLOWED_ROLES = new Set(["admin", "manager"]);

function extractBearerToken(request: NextRequest) {
  const header = request.headers.get("authorization") || "";
  const [scheme, token] = header.split(" ");
  if (scheme?.toLowerCase() !== "bearer") {
    return null;
  }
  return token?.trim() || null;
}

export async function requirePermission(
  request: NextRequest,
  permission: Permission,
) {
  if (permission !== "manage_blogs") {
    throw new Error("Forbidden");
  }

  const bearer = extractBearerToken(request);
  const staticToken = process.env.BLOG_ADMIN_TOKEN?.trim();
  if (staticToken && bearer && bearer === staticToken) {
    return;
  }

  const sessionUser = await getSessionUser();
  if (!sessionUser) {
    throw new Error("Unauthorized");
  }

  if (!BLOG_ALLOWED_ROLES.has(sessionUser.role)) {
    throw new Error("Forbidden");
  }
}
