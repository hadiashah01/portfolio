import Link from "next/link";
import Image from "next/image";

import { cn } from "@/utils/cn";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/Button";
import { SectionHeading, ProjectCard } from "@/components/sections";
import { buildMetadata } from "@/config/metadata";
import { homePageContent, personal } from "@/config/personal";
import { featuredProjects } from "@/config/projects";

export const metadata = buildMetadata({
  title: "Home",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section containerSize="lg" className="pt-24 sm:pt-32 pb-20 sm:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary text-sm font-medium tracking-[0.24em] uppercase">
                {homePageContent.heroEyebrow}
              </p>
              <h1 className="text-display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl text-balance leading-tight">
                {homePageContent.heroTitle}
              </h1>
              <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                {homePageContent.heroDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                {homePageContent.primaryCtaLabel}
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                {homePageContent.secondaryCtaLabel}
              </Link>
            </div>
          </div>

          {/* Editorial hero card with personal touch */}
          <div className="relative">
            <div className="relative rounded-xl border border-border bg-surface overflow-hidden">
              {personal.profileImage && (
                <Image
                  src={personal.profileImage}
                  alt={`${personal.name}`}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
                  Available for website projects
                </p>
                <p className="mt-1 text-lg font-semibold">{personal.availability}</p>
              </div>
            </div>
            <div className="absolute -right-6 top-6 w-24 h-24 rounded-full bg-accent/20 border border-accent/30" />
          </div>
        </div>
      </Section>

      {/* Work Gallery */}
      <Section className="border-t border-border/60">
        <div className="space-y-8">
          <SectionHeading
            eyebrow={homePageContent.featuredProjectsEyebrow}
            title={homePageContent.featuredProjectsTitle}
            description={homePageContent.featuredProjectsDescription}
          />

          {/* Featured projects - staggered editorial grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug}
                className={cn(
                  "group",
                  index % 3 === 0 ? "lg:col-span-1" : "lg:col-span-1",
                )}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/projects"
              className={buttonVariants({ variant: "ghost", size: "md" })}
            >
              View all projects
            </Link>
          </div>
        </div>
      </Section>

      {/* Why Me */}
      <Section className="border-t border-border/60 bg-surface">
        <div className="max-w-4xl mx-auto space-y-10">
          <SectionHeading
            eyebrow="Why work together"
            title="Clear communication, frontend ownership, reliable delivery"
            description={
              "I focus on the work that matters: building websites that serve your business and communicate clearly to your visitors."
            }
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-8 rounded-xl border border-border bg-background">
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                01
              </p>
              <h3 className="text-display text-lg font-semibold mb-3">Frontend focus</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I specialize in frontend development — React, Next.js, and
                Tailwind CSS — so your site is fast, maintainable, and built to
                last.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-border bg-background">
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                02
              </p>
              <h3 className="text-display text-lg font-semibold mb-3">
                Business websites
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I build for businesses and digital products — not abstract
                concepts. Every layout decision serves your visitors and your
                goals.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-border bg-background">
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                03
              </p>
              <h3 className="text-display text-lg font-semibold mb-3">
                Honest collaboration
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No exaggerated claims. I&apos;ll tell you what I can do, show you
                what I&apos;ve built, and keep communication clear from start to
                finish.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* About snippet */}
      <Section className="border-t border-border/60">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-primary text-sm font-medium tracking-[0.24em] uppercase">
              About
            </p>
            <h2 className="text-display text-3xl font-semibold tracking-tight sm:text-4xl">
              I build websites for businesses and digital products.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Based in Sialkot, Punjab, Pakistan. I&apos;m currently completing my
              BSCS while building responsive, well-crafted frontend experiences.
              Open to website projects and frontend development opportunities.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/about"
              className={buttonVariants({ variant: "outline", size: "md" })}
            >
              Learn more about my work
            </Link>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="border-t border-border/60 py-24 sm:py-32">
        <div className="border-border bg-surface rounded-2xl border p-10 sm:px-12 lg:px-16 text-center">
          <p className="text-primary text-sm font-medium tracking-[0.24em] uppercase mb-4">
            Ready to connect?
          </p>
          <h2 className="text-display text-3xl font-semibold tracking-tight sm:text-4xl mb-6">
            {homePageContent.ctaTitle}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {homePageContent.ctaDescription}
          </p>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            {homePageContent.ctaLinkLabel}
          </Link>
        </div>
      </Section>
    </>
  );
}