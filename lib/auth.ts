import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";

type AdminSession =
  | { user: { id: string; email?: string }; profile: { id: string; email: string; role: string } }
  | { error: "unauthenticated" | "unauthorized" };

export async function getAdminSession(): Promise<AdminSession> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "unauthenticated" };
  }

  const profile = await prisma.profile.findUnique({
    where: { id: user.id },
  });

  if (!profile || profile.role !== "ADMIN") {
    // Log out user if authenticated but not admin
    await supabase.auth.signOut();
    return { error: "unauthorized" };
  }

  return { user, profile };
}

export async function requireAdmin() {
  const session = await getAdminSession();

  if ("error" in session) {
    redirect(
      session.error === "unauthenticated" ? "/login" : "/login?error=unauthorized",
    );
  }

  return session;
}

export async function requireAdminApi() {
  const session = await getAdminSession();
  return "error" in session ? null : session;
}
