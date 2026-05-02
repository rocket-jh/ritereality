import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { UserModel } from "@/lib/models/User";
import { SESSION_COOKIE_NAME, signSessionToken } from "@/lib/session";
import { handleApiError } from "@/lib/api-response";
import { z } from "zod";

export const runtime = "nodejs";

const bootstrapSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: Request) {
  try {
    const body = bootstrapSchema.parse(await request.json());
    await connectToDatabase();

    const existingAdmin = await UserModel.countDocuments({ role: "admin" });
    if (existingAdmin > 0) {
      return NextResponse.json(
        { error: "Admin account already exists." },
        { status: 400 }
      );
    }

    const passwordHash = await bcrypt.hash(body.password, 12);
    const user = await UserModel.create({
      name: body.name,
      email: body.email.toLowerCase(),
      passwordHash,
      role: "admin",
    });

    const token = await signSessionToken({
      sub: String(user._id),
      role: "admin",
      email: user.email,
      name: user.name,
    });

    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({
      user: {
        id: String(user._id),
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return handleApiError(error);
  }
}
