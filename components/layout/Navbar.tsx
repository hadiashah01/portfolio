"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { publicNav } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { buttonVariants } from "@/components/ui/Button";
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
        "bg-background/80 sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300",
        scrolled ? "border-border" : "border-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex min-w-0 items-baseline gap-1.5"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="text-foreground text-xl font-black tracking-[-0.06em] uppercase">
            Hadia
          </span>
          <span className="text-muted-foreground group-hover:text-foreground hidden text-[15px] font-medium tracking-[-0.02em] transition-colors sm:inline">
            Shahjahan
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
                  "after:bg-primary hover:text-foreground relative py-1 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:transition-transform after:duration-200",
                  isActive
                    ? "text-foreground after:scale-x-100"
                    : "text-muted-foreground after:scale-x-0 hover:after:scale-x-100",
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden md:block">
            <ThemeToggle variant="ghost" />
          </div>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden md:inline-flex",
            )}
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
