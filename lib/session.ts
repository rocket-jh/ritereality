import { SignJWT, jwtVerify } from "jose";
import type { UserRole } from "@/lib/constants";

export const SESSION_COOKIE_NAME = "riterealty_session";

function getSessionSecret() {
  const sessionSecret = process.env.SESSION_SECRET ?? process.env.AUTH_SECRET;
  if (!sessionSecret) {
    throw new Error("Missing SESSION_SECRET (or AUTH_SECRET) in environment variables.");
  }
  return new TextEncoder().encode(sessionSecret);
}

export type SessionPayload = {
  sub: string;
  role: UserRole;
  email: string;
  name: string;
};

export async function signSessionToken(payload: SessionPayload) {
  const secret = getSessionSecret();
  return new SignJWT({
    role: payload.role,
    email: payload.email,
    name: payload.name,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifySessionToken(token: string) {
  const secret = getSessionSecret();
  const { payload } = await jwtVerify(token, secret);
  return payload as unknown as SessionPayload;
}
