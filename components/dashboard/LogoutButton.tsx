"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { cn } from "@/utils/cn";

export function LogoutButton({ className }: { className?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      router.push("/login");
      router.refresh();
    } catch (err) {
      console.error("Failed to sign out:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={cn(
        "w-full text-left rounded-md px-3 py-2 text-sm text-error transition-colors hover:bg-error/10 disabled:opacity-50 font-medium cursor-pointer",
        className,
      )}
    >
      {loading ? "Signing Out..." : "Sign Out"}
    </button>
  );
}
