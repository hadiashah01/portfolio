import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

type ContactStatus = "unread" | "read" | "responded" | "archived";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Authorize user as Admin
    await requireAdmin();

    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    // Validate the status value
    const validStatuses: ContactStatus[] = ["unread", "read", "responded", "archived"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status value." },
        { status: 400 }
      );
    }

    const updated = await prisma.contactMessage.update({
      where: { id },
      data: { status: status as ContactStatus },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Failed to update message status:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
