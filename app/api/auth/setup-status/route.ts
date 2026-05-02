import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { UserModel } from "@/lib/models/User";

export const runtime = "nodejs";

export async function GET() {
  await connectToDatabase();
  const [adminCount, managerCount] = await Promise.all([
    UserModel.countDocuments({ role: "admin" }),
    UserModel.countDocuments({ role: "manager" }),
  ]);

  return NextResponse.json({
    adminExists: adminCount > 0,
    managerCount,
  });
}
