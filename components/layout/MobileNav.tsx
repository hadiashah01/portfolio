"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { publicNav } from "@/config/navigation";
import { personal } from "@/config/personal";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/utils/cn";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const trigger = triggerRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";

    const focusFirstLink = () => {
      panel?.querySelector<HTMLElement>("a[href]")?.focus();
    };
    const frame = requestAnimationFrame(focusFirstLink);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";

      if (trigger && document.contains(trigger)) {
        trigger.focus();
      } else {
        previouslyFocused?.focus();
      }
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <Button
        ref={triggerRef}
        type="button"
        variant="ghost"
        size="icon"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </Button>

      {mounted && open
        ? createPortal(
            <>
              <div
                className="bg-background/75 fixed inset-0 top-20 z-40 backdrop-blur-sm"
                aria-hidden="true"
                onClick={() => setOpen(false)}
              />
              <div
                ref={panelRef}
                id={panelId}
                role="dialog"
                aria-modal="true"
                aria-label="Site navigation"
                className="mobile-menu-in border-border bg-background fixed inset-x-0 top-20 bottom-0 z-50 overflow-y-auto border-t px-5 pt-6 pb-10 sm:px-8"
              >
                <nav aria-label="Mobile" className="flex flex-col">
                  {publicNav.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "border-border flex items-center justify-between border-b py-4 text-3xl font-semibold tracking-[-0.045em] transition-colors",
                          isActive
                            ? "text-primary"
                            : "text-foreground hover:text-primary",
                        )}
                      >
                        {item.title}
                        <ArrowUpRight
                          className={cn(
                            "h-5 w-5",
                            isActive ? "text-primary" : "text-muted-foreground",
                          )}
                          aria-hidden="true"
                        />
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-8">
                  <p className="text-muted-foreground text-sm leading-6">
                    {personal.availability}.
                  </p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="link-underline text-foreground mt-4 inline-flex items-center gap-2 text-base font-medium"
                  >
                    {personal.email}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <div className="mt-6 flex items-center gap-5">
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      GitHub
                    </a>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="border-border mt-8 flex items-center justify-between border-t pt-5">
                  <span className="text-muted-foreground text-sm">
                    Appearance
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </>,
            document.body,
          )
        : null}
    </div>
  );
}
