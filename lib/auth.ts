import { cookies } from "next/headers";
import { Types } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import { type UserRole } from "@/lib/constants";
import { UserModel, type UserDocument } from "@/lib/models/User";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/session";

export class UnauthorizedError extends Error {
  status = 401;
}

export class ForbiddenError extends Error {
  status = 403;
}

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

function toSessionUser(user: UserDocument): SessionUser {
  return {
    id: String(user._id),
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export async function getSessionUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  try {
    const payload = await verifySessionToken(token);
    if (!payload.sub || !Types.ObjectId.isValid(payload.sub)) {
      return null;
    }

    await connectToDatabase();
    const user = await UserModel.findById(payload.sub).lean<UserDocument | null>();
    if (!user) {
      return null;
    }

    return toSessionUser(user);
  } catch {
    return null;
  }
}

export async function requireSessionUser() {
  const user = await getSessionUser();
  if (!user) {
    throw new UnauthorizedError("Please login to continue.");
  }
  return user;
}

export async function requireRole(roles: UserRole[]) {
  const user = await requireSessionUser();
  if (!roles.includes(user.role)) {
    throw new ForbiddenError("You do not have permission for this action.");
  }
  return user;
}
