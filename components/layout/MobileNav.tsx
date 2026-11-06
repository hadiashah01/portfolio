"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Github, Linkedin, Plus, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { publicNav } from "@/config/navigation";
import { personal } from "@/config/personal";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/utils/cn";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [rendered, setRendered] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousPathnameRef = useRef(pathname);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = requestAnimationFrame(() => {
      panel?.querySelector<HTMLElement>("a[href]")?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
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
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpen(false);
    closeTimerRef.current = setTimeout(() => setRendered(false), 500);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const toggleMenu = () => {
    if (open) {
      closeMenu();
      return;
    }

    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setRendered(true);
    requestAnimationFrame(() => setOpen(true));
  };

  useEffect(() => {
    if (previousPathnameRef.current === pathname) return;
    previousPathnameRef.current = pathname;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpen(false);
    closeTimerRef.current = setTimeout(() => setRendered(false), 500);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="relative z-[80] inline-flex h-10 items-center gap-2 rounded-md px-2 text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      >
        <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
        {open ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Plus className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {mounted && rendered
        ? createPortal(
            <div
              className="pointer-events-none fixed inset-0 z-[60]"
              aria-hidden={!open}
            >
              <div
                ref={panelRef}
                id={panelId}
                role="dialog"
                aria-modal="true"
                aria-label="Site navigation"
                className={cn(
                  "pointer-events-auto fixed inset-0 overflow-y-auto bg-background pt-20 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
                  open ? "translate-x-0" : "translate-x-full",
                )}
              >
                <nav
                  aria-label="Primary navigation"
                  className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl flex-col justify-center px-5 py-10 sm:px-8 lg:px-12"
                >
                  <div className="border-border border-t">
                    {publicNav.map((item, index) => {
                      const isActive =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.href);

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "group border-border flex items-center justify-between border-b py-4 text-[clamp(2.75rem,8vw,6rem)] leading-[0.92] font-semibold tracking-[-0.06em] transition-[color,transform] duration-300 sm:py-5",
                            isActive ? "text-primary" : "text-foreground hover:text-primary",
                            open ? "menu-link-enter" : "opacity-0 translate-x-6",
                          )}
                          style={{ animationDelay: `${120 + index * 70}ms` }}
                        >
                          <span>{item.title}</span>
                          <ArrowUpRight
                            className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-10 sm:w-10"
                            aria-hidden="true"
                          />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-8 grid gap-6 text-sm sm:grid-cols-2 sm:items-end">
                    <div>
                      <p className="text-muted-foreground">{personal.availability}</p>
                      <a
                        href={`mailto:${personal.email}`}
                        className="link-underline mt-2 inline-flex items-center gap-2 font-medium text-foreground"
                      >
                        {personal.email}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="flex items-center justify-between gap-5 sm:justify-end">
                      <div className="flex gap-4">
                        <a
                          href={personal.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
                        >
                          <Github className="h-4 w-4" aria-hidden="true" />
                          GitHub
                        </a>
                        <a
                          href={personal.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" aria-hidden="true" />
                          LinkedIn
                        </a>
                      </div>
                      <ThemeToggle />
                    </div>
                  </div>
                </nav>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
