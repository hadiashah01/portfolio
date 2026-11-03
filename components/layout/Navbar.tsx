"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { publicNav } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/utils/cn";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "bg-background/85 sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300",
        scrolled ? "border-border" : "border-transparent",
      )}
    >
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5"
          aria-label={`${siteConfig.name} home`}
        >
          <span
            aria-hidden="true"
            className="border-brand/30 bg-brand/10 text-primary group-hover:border-brand/60 group-hover:bg-brand/15 relative grid h-8 w-8 shrink-0 place-items-center rounded-lg border font-mono text-[10px] font-semibold tracking-[-0.04em] shadow-[0_0_24px_-10px_var(--brand)] transition-colors"
          >
            HS
            <span className="ring-foreground/5 absolute inset-0 rounded-lg ring-1 ring-inset" />
          </span>
          <span className="text-foreground truncate text-sm font-semibold tracking-[-0.015em]">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {publicNav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "after:bg-brand hover:text-foreground relative py-1 text-sm transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100",
                  isActive
                    ? "text-foreground font-medium after:scale-x-100"
                    : "text-muted-foreground",
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle variant="ghost" />
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
