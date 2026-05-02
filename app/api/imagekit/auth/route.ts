import { NextResponse } from "next/server";
import { handleApiError } from "@/lib/api-response";
import { requireRole } from "@/lib/auth";
import { createImageKitAuthParams } from "@/lib/imagekit";

export const runtime = "nodejs";

export async function GET() {
  try {
    await requireRole(["admin", "manager"]);
    const authParams = createImageKitAuthParams();
    return NextResponse.json(authParams);
  } catch (error) {
    return handleApiError(error);
  }
}
