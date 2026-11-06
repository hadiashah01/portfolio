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
  const [firstName, ...nameRemainder] = personal.name.split(" ");
  const lastName = nameRemainder.join(" ");

  return (
    <footer className="footer-canvas border-footer-border text-footer-foreground relative overflow-hidden rounded-t-[2rem] border-t">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-16 pb-7 sm:px-8 sm:pt-20 lg:px-12">
        <div className="border-footer-border grid gap-12 border-b pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.8fr_1.1fr] lg:gap-10 xl:gap-14">
          <div>
            <Link
              href="/"
              className="group inline-flex items-baseline gap-1.5"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="text-footer-foreground text-2xl font-black tracking-[-0.06em] uppercase">
                {firstName}
              </span>
              <span className="text-footer-accent text-2xl font-medium tracking-[-0.04em]">
                {lastName}
              </span>
            </Link>

            <p className="text-footer-muted mt-5 max-w-xs text-sm leading-6">
              {personal.tagline}
            </p>

            <p className="text-footer-accent mt-6 text-sm font-medium">
              {personal.availability}.
            </p>
            <p className="text-footer-muted mt-1.5 text-sm">
              {personal.location}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-footer-foreground text-sm font-medium">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-footer-muted hover:text-footer-foreground inline-flex text-sm transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Elsewhere">
            <h2 className="text-footer-foreground text-sm font-medium">
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
                      className="group text-footer-muted hover:text-footer-foreground inline-flex items-center gap-2.5 text-sm transition-colors"
                    >
                      <Icon
                        className="text-footer-accent h-4 w-4"
                        aria-hidden="true"
                      />
                      {item.label}
                      <ArrowUpRight
                        className="ml-1 h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div>
            <h2 className="text-footer-foreground text-sm font-medium">
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
                        className="text-footer-accent mt-0.5 h-4 w-4 shrink-0"
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
                        className="text-footer-accent mt-0.5 h-4 w-4 shrink-0"
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

        <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-footer-muted text-xs">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-4" aria-label="Social links">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={item.label}
                      title={item.label}
                      className="text-footer-accent hover:text-footer-foreground focus-visible:text-footer-foreground hover:bg-footer-accent/10 focus-visible:bg-footer-accent/10 focus-visible:ring-footer-accent focus-visible:ring-offset-footer inline-grid h-9 w-9 place-items-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="#top"
              aria-label="Back to top"
              className="text-footer-muted hover:text-footer-foreground focus-visible:text-footer-foreground focus-visible:ring-footer-accent focus-visible:ring-offset-footer inline-flex items-center gap-1.5 rounded-sm text-xs transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-mark">
        <TextHoverEffect text="HADIA" duration={0.2} />
      </div>
    </footer>
  );
}
