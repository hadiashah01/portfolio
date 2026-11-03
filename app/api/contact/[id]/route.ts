import { NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/auth";

const updateStatusSchema = z.object({
  status: z.enum(["unread", "read", "responded", "archived"]),
});

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await requireAdminApi();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const { id } = await params;
    const result = updateStatusSchema.safeParse(await request.json());

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid status value." },
        { status: 400 },
      );
    }

    const updated = await prisma.contactMessage.update({
      where: { id },
      data: { status: result.data.status },
    });

    return NextResponse.json(updated);
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "Message not found." }, { status: 404 });
    }

    console.error("Failed to update message status:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
