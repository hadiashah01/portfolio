import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { footerLinks } from "@/config/navigation";
import { personal } from "@/config/personal";
import { TextHoverEffect } from "@/components/ui/HoverText";

const phoneHref = personal.phone.replace(/[^\d+]/g, "");

const elsewhereLinks = [
  {
    label: "GitHub",
    href: personal.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "Resume",
    href: personal.resumePath,
    icon: FileText,
    external: false,
    download: true,
  },
] as const;

const socialLinks = [
  {
    label: "GitHub",
    href: personal.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
] as const;

const contactItems = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${phoneHref}`,
    icon: Phone,
  },
  {
    label: "Location",
    value: personal.location,
    icon: MapPin,
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-canvas border-footer-border text-footer-foreground relative overflow-hidden rounded-t-[2rem] border-t">
      <div
        aria-hidden="true"
        className="footer-grid pointer-events-none absolute inset-0 z-0 opacity-50"
      />
      <div
        aria-hidden="true"
        className="bg-footer-accent/15 pointer-events-none absolute -top-36 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full blur-[130px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-16 pb-7 sm:px-8 sm:pt-20 lg:px-10">
        <div className="border-footer-border grid gap-10 border-b pb-12 md:grid-cols-2 lg:grid-cols-[1.45fr_0.75fr_0.85fr_1.15fr] lg:gap-10 xl:gap-14">
          <div className="flex flex-col items-start">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="border-footer-accent/30 bg-footer-accent/10 text-footer-accent group-hover:border-footer-accent/60 relative grid h-11 w-11 shrink-0 place-items-center rounded-xl border font-mono text-xs font-semibold tracking-[-0.04em] shadow-[0_0_34px_-10px_var(--footer-accent)] transition-colors">
                HS
                <span className="absolute inset-0 rounded-xl ring-1 ring-white/5 ring-inset" />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="text-footer-foreground truncate text-lg font-semibold tracking-[-0.025em]">
                  {siteConfig.name}
                </span>
                <span className="text-footer-muted font-mono text-[10px] tracking-[0.22em] uppercase">
                  {personal.professionalTitle}
                </span>
              </span>
            </Link>

            <p className="text-footer-muted mt-5 max-w-sm text-sm leading-6">
              {personal.tagline}
            </p>

            <span className="border-footer-border text-footer-muted mt-6 inline-flex items-center gap-2.5 rounded-full border bg-white/[0.03] px-3.5 py-1.5 text-[11px]">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="bg-footer-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-50" />
                <span className="bg-footer-accent relative inline-flex h-2 w-2 rounded-full" />
              </span>
              {personal.availability}
            </span>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-footer-muted font-mono text-[10px] tracking-[0.24em] uppercase">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group text-footer-muted hover:text-footer-foreground inline-flex items-center gap-2 text-sm transition-colors"
                  >
                    <span
                      aria-hidden="true"
                      className="bg-footer-accent h-px w-0 transition-[width] duration-300 group-hover:w-4"
                    />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Elsewhere">
            <h2 className="text-footer-muted font-mono text-[10px] tracking-[0.24em] uppercase">
              Elsewhere
            </h2>
            <ul className="mt-5 space-y-3">
              {elsewhereLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      download={"download" in item ? item.download : undefined}
                      className="group text-footer-muted hover:text-footer-foreground inline-flex w-full items-center gap-2.5 text-sm transition-colors"
                    >
                      <Icon
                        className="text-footer-accent/80 group-hover:text-footer-accent h-4 w-4 transition-colors"
                        aria-hidden="true"
                      />
                      {item.label}
                      <ArrowUpRight
                        className="text-footer-muted/50 group-hover:text-footer-accent ml-auto h-3.5 w-3.5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div>
            <h2 className="text-footer-muted font-mono text-[10px] tracking-[0.24em] uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-3.5">
              {contactItems.map((item) => {
                const Icon = item.icon;

                if (!("href" in item)) {
                  return (
                    <li
                      key={item.label}
                      className="text-footer-muted flex items-start gap-2.5 text-sm"
                    >
                      <Icon
                        className="text-footer-accent/80 mt-0.5 h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item.value}</span>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group text-footer-muted hover:text-footer-foreground flex items-start gap-2.5 text-sm transition-colors"
                    >
                      <Icon
                        className="text-footer-accent/80 group-hover:text-footer-accent mt-0.5 h-4 w-4 shrink-0 transition-colors"
                        aria-hidden="true"
                      />
                      <span className="break-all">{item.value}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex items-center gap-3" aria-label="Social links">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={item.label}
                    className="border-footer-border text-footer-muted hover:border-footer-accent/50 hover:bg-footer-accent/10 hover:text-footer-accent grid h-9 w-9 place-items-center rounded-full border bg-white/[0.03] transition-all hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="text-footer-muted flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:gap-5">
            <p>
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
            <a
              href="#main-content"
              className="hover:text-footer-foreground inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] uppercase transition-colors"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-36 -mb-24 hidden h-[24rem] lg:flex">
        <TextHoverEffect text="HADIA" duration={0.2} className="z-10" />
      </div>
    </footer>
  );
}
