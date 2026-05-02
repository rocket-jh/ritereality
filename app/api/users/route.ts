import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { handleApiError } from "@/lib/api-response";
import { requireRole } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { UserModel } from "@/lib/models/User";
import { createUserSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function GET() {
  try {
    await requireRole(["admin"]);
    await connectToDatabase();

    const users = await UserModel.find(
      {},
      { passwordHash: 0 },
      { sort: { createdAt: -1 } }
    ).lean();

    return NextResponse.json({ users });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: Request) {
  try {
    await requireRole(["admin"]);
    const body = createUserSchema.parse(await request.json());

    if (body.role !== "manager") {
      return NextResponse.json(
        { error: "Only manager accounts can be created from CMS." },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const managerCount = await UserModel.countDocuments({ role: "manager" });
    if (managerCount >= 2) {
      return NextResponse.json(
        { error: "Manager account limit reached (maximum 2)." },
        { status: 400 }
      );
    }

    const existing = await UserModel.findOne({ email: body.email.toLowerCase() });
    if (existing) {
      return NextResponse.json({ error: "Email is already in use." }, { status: 400 });
    }

    const user = await UserModel.create({
      name: body.name,
      email: body.email.toLowerCase(),
      passwordHash: await bcrypt.hash(body.password, 12),
      role: "manager",
    });

    return NextResponse.json(
      {
        user: {
          id: String(user._id),
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
