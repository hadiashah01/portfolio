import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/Button";
import {
  SectionHeading,
  ProjectCard,
  TimelineItem,
} from "@/components/sections";
import { Reveal } from "@/components/motion";
import { cn } from "@/utils/cn";
import { buildMetadata } from "@/config/metadata";
import { homePageContent, personal } from "@/config/personal";
import { featuredProjects } from "@/config/projects";
import { skillCategories } from "@/config/skills";
import { journeyMilestones } from "@/config/journey";

export const metadata = buildMetadata({
  title: "Home",
  path: "/",
});

const [firstName, ...nameRemainder] = personal.name.split(" ");
const lastName = nameRemainder.join(" ");

export default function HomePage() {
  return (
    <>
      <Section
        containerSize="lg"
        className="pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24"
        aria-labelledby="hero-heading"
      >
        <div className="grid gap-12 lg:min-h-[calc(100svh-14rem)] lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-primary flex items-center gap-3 text-base font-medium">
                <span
                  className="bg-primary h-px w-8 shrink-0"
                  aria-hidden="true"
                />
                {personal.availability}
              </p>

              <h1
                id="hero-heading"
                aria-label={personal.name}
                className="text-display text-foreground mt-8 font-black uppercase"
              >
                <span className="block">{firstName}</span>
                <span className="brand-text block">{lastName}</span>
              </h1>

              <p className="text-muted-foreground mt-8 max-w-2xl text-lg leading-8 sm:text-xl sm:leading-9">
                {personal.tagline}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/projects"
                  className={buttonVariants({
                    variant: "primary",
                    size: "lg",
                  })}
                >
                  {homePageContent.primaryCtaLabel}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="link-underline text-foreground inline-flex items-center gap-1.5 text-base font-medium"
                >
                  {homePageContent.secondaryCtaLabel}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <Reveal delay={140}>
              <div className="space-y-8 lg:pl-6">
                <div>
                  <p className="text-muted-foreground text-sm">Currently</p>
                  <p className="text-foreground mt-2 text-base leading-7">
                    Frontend developer based in {personal.location}.
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground text-sm">Focus</p>
                  <ul className="mt-3 space-y-3">
                    {personal.currentFocus.map((item) => (
                      <li
                        key={item}
                        className="text-foreground/80 text-base leading-7"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-foreground text-sm font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-foreground text-sm font-medium"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    className="link-underline text-foreground text-sm font-medium"
                  >
                    Email
                  </a>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>

        <div className="border-border text-muted-foreground mt-16 flex items-center justify-between border-t pt-4 text-sm sm:mt-24">
          <a
            href="#selected-work"
            className="link-underline group hover:text-foreground focus-visible:text-foreground inline-flex items-center gap-2 rounded-sm transition-colors"
            aria-label="Jump to selected work"
          >
            <ArrowDown
              className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
              aria-hidden="true"
            />
            Selected work
          </a>
          <span className="hidden sm:inline">
            {personal.technicalInterests.slice(0, 3).join(" / ")}
          </span>
        </div>
      </Section>

      <Section id="selected-work" className="border-border border-t">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={homePageContent.featuredProjectsEyebrow}
              title={homePageContent.featuredProjectsTitle}
              description={homePageContent.featuredProjectsDescription}
            />
            <Link
              href="/projects"
              className="link-underline text-foreground inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
            >
              All projects
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70} className="h-full">
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-border border-t">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow={homePageContent.skillsEyebrow}
                title={homePageContent.skillsTitle}
                description={homePageContent.skillsDescription}
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-10 space-y-6">
                {skillCategories.map((category) => (
                  <div
                    key={category.title}
                    className="border-border border-t pt-4"
                  >
                    <h3 className="text-foreground text-base font-semibold">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-6">
                      {category.skills.join(" / ")}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <SectionHeading
                eyebrow={homePageContent.journeyEyebrow}
                title={homePageContent.journeyTitle}
                description={homePageContent.journeyDescription}
              />
            </Reveal>

            <Reveal delay={80}>
              <ol className="mt-10">
                {journeyMilestones.map((milestone) => (
                  <TimelineItem
                    key={milestone.title}
                    year={milestone.year}
                    title={milestone.title}
                    description={milestone.description}
                  />
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="footer-canvas text-footer-foreground relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-10 sm:py-16 lg:px-14">
            <div className="max-w-4xl">
              <p className="text-footer-muted text-sm font-medium">
                {homePageContent.ctaEyebrow}
              </p>
              <h2 className="text-footer-foreground mt-4 text-4xl font-black tracking-[-0.055em] uppercase sm:text-5xl lg:text-6xl">
                {homePageContent.ctaTitle}
              </h2>
              <p className="text-footer-muted mt-5 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
                {homePageContent.ctaDescription}
              </p>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-footer-foreground text-footer hover:bg-footer-foreground/90 mt-8",
                )}
              >
                {homePageContent.ctaLinkLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
