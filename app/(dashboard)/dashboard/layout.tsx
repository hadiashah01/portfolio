import type { ReactNode } from "react";
import Link from "next/link";

import { dashboardNav } from "@/config/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { requireAdmin } from "@/lib/auth";
import { LogoutButton } from "@/components/dashboard/LogoutButton";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const { user } = await requireAdmin();

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden w-64 flex-col border-r border-border bg-surface p-6 md:flex justify-between">
        <div>
          <p className="mb-8 text-lg font-semibold">Admin Panel</p>
          <nav aria-label="Dashboard" className="space-y-2">
            {dashboardNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground font-medium"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-4 border-t border-border pt-4">
          <div className="px-3">
            <p className="text-xs text-muted-foreground">Signed in as</p>
            <p className="text-sm font-medium truncate text-foreground mt-0.5">{user.email}</p>
          </div>
          <LogoutButton />
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-border px-6 bg-surface">
          <p className="text-sm text-muted-foreground font-medium">
            Portfolio Admin Dashboard
          </p>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LogoutButton className="w-auto px-2 py-1 text-xs md:hidden" />
          </div>
        </header>
        <nav
          aria-label="Dashboard"
          className="flex gap-1 overflow-x-auto border-b border-border bg-surface px-4 py-2 md:hidden"
        >
          {dashboardNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <main id="main-content" className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
