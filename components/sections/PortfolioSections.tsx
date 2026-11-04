import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";

import { cn } from "@/utils/cn";
import { ScrollRevealText } from "@/components/motion";
import type { Project } from "@/config/projects";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  as?: "h1" | "h2";
  revealTitle?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  as: Heading = "h2",
  revealTitle = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="text-primary text-sm font-medium">{eyebrow}</p>
      <Heading className="text-foreground mt-3 text-3xl font-semibold tracking-[-0.045em] text-balance sm:text-4xl lg:text-[2.85rem] lg:leading-[1.05]">
        {revealTitle ? <ScrollRevealText>{title}</ScrollRevealText> : title}
      </Heading>
      <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  meta?: string;
  children?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  meta,
  children,
}: PageIntroProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-8">
        <p className="text-primary text-sm font-medium">{eyebrow}</p>
        <h1 className="text-display-sm text-foreground mt-4 font-black tracking-[-0.06em]">
          {title}
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8 sm:text-xl sm:leading-9">
          {description}
        </p>
        {children}
      </div>
      {meta ? (
        <div className="lg:col-span-4 lg:flex lg:justify-end">
          <p className="text-muted-foreground text-sm">{meta}</p>
        </div>
      ) : null}
    </div>
  );
}

type ProjectCardProps = {
  project: Project;
  index?: number;
  variant?: "featured" | "detailed";
  priority?: boolean;
  headingLevel?: "h2" | "h3";
};

function ProjectLinks({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  if (!project.githubUrl && !project.demoUrl) return null;

  return (
    <div
      className={cn("flex flex-wrap items-center gap-x-6 gap-y-3", className)}
    >
      {project.demoUrl ? (
        <Link
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live demo`}
          className="group/link text-foreground hover:text-primary inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
        >
          View live site
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>
      ) : null}
      {project.githubUrl ? (
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          Source
        </Link>
      ) : null}
    </div>
  );
}

function ProjectPreview({
  project,
  priority,
  sizes,
}: {
  project: Project;
  priority: boolean;
  sizes: string;
}) {
  const hasImage = Boolean(
    project.image && !project.image.includes("placeholder"),
  );

  return (
    <div className="bg-muted relative aspect-[16/10] overflow-hidden rounded-lg">
      {hasImage ? (
        <Image
          src={project.image as string}
          alt={`${project.title} website preview`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      ) : (
        <div className="grid h-full w-full place-items-center px-8 text-center">
          <span className="text-foreground/10 text-4xl leading-none font-black tracking-[-0.06em] uppercase sm:text-5xl">
            {project.title}
          </span>
        </div>
      )}
    </div>
  );
}

export function ProjectCard({
  project,
  index = 0,
  variant = "featured",
  priority = false,
  headingLevel = "h3",
}: ProjectCardProps) {
  const headingId = `project-title-${project.slug}`;
  const projectNumber = String(index + 1).padStart(2, "0");
  const ProjectHeading = headingLevel;

  if (variant === "detailed") {
    return (
      <article
        aria-labelledby={headingId}
        className="group grid gap-8 lg:grid-cols-12 lg:gap-12"
      >
        <div
          className={cn(
            "lg:col-span-7",
            index % 2 === 1 ? "lg:order-2" : "lg:order-1",
          )}
        >
          <ProjectPreview
            project={project}
            priority={priority}
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>

        <div
          className={cn(
            "flex flex-col lg:col-span-5",
            index % 2 === 1 ? "lg:order-1" : "lg:order-2",
          )}
        >
          <p className="text-primary text-sm font-medium">
            {project.featured ? "Featured project" : `Project ${projectNumber}`}
          </p>

          <ProjectHeading
            id={headingId}
            className="text-foreground mt-3 text-3xl font-semibold tracking-[-0.045em] text-balance sm:text-[2.1rem] sm:leading-[1.08]"
          >
            {project.title}
          </ProjectHeading>
          <p className="text-muted-foreground mt-4 text-base leading-8">
            {project.description}
          </p>

          {project.problem || project.solution ? (
            <dl className="mt-6 space-y-5">
              {project.problem ? (
                <div>
                  <dt className="text-foreground text-sm font-semibold">
                    Problem
                  </dt>
                  <dd className="text-muted-foreground mt-1.5 text-sm leading-7">
                    {project.problem}
                  </dd>
                </div>
              ) : null}
              {project.solution ? (
                <div>
                  <dt className="text-foreground text-sm font-semibold">
                    Solution
                  </dt>
                  <dd className="text-muted-foreground mt-1.5 text-sm leading-7">
                    {project.solution}
                  </dd>
                </div>
              ) : null}
            </dl>
          ) : null}

          <p className="text-muted-foreground mt-6 text-sm leading-6">
            {project.technologies.join(" / ")}
          </p>

          <ProjectLinks project={project} className="mt-7" />
        </div>
      </article>
    );
  }

  return (
    <article aria-labelledby={headingId} className="group flex h-full flex-col">
      <ProjectPreview
        project={project}
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />

      <div className="mt-5 flex items-start justify-between gap-5">
        <div>
          <p className="text-primary text-sm font-medium">
            {project.featured ? "Featured project" : "Project"}
          </p>
          <ProjectHeading
            id={headingId}
            className="text-foreground mt-2 text-2xl font-semibold tracking-[-0.04em]"
          >
            {project.title}
          </ProjectHeading>
        </div>
        <span className="text-muted-foreground shrink-0 pt-1 font-mono text-xs">
          {projectNumber}
        </span>
      </div>

      <p className="text-muted-foreground mt-3 max-w-xl text-base leading-7">
        {project.description}
      </p>

      <p className="text-muted-foreground mt-4 text-sm leading-6">
        {project.technologies.slice(0, 4).join(" / ")}
      </p>

      <ProjectLinks project={project} className="mt-auto pt-5" />
    </article>
  );
}

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  headingLevel?: "h2" | "h3";
};

export function TimelineItem({
  year,
  title,
  description,
  headingLevel = "h3",
}: TimelineItemProps) {
  const TimelineHeading = headingLevel;

  return (
    <li className="border-border grid gap-3 border-t py-7 sm:grid-cols-[7rem_1fr] sm:gap-8">
      <p className="text-primary font-mono text-sm font-medium">{year}</p>
      <div>
        <TimelineHeading className="text-foreground text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
          {title}
        </TimelineHeading>
        <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-7">
          {description}
        </p>
      </div>
    </li>
  );
}

type ContactMethodListProps = {
  methods: ReadonlyArray<{ label: string; value: string; href: string }>;
};

export function ContactMethodList({ methods }: ContactMethodListProps) {
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "github":
        return <Github className="h-5 w-5" aria-hidden="true" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" aria-hidden="true" />;
      case "phone":
        return <Phone className="h-5 w-5" aria-hidden="true" />;
      default:
        return <Mail className="h-5 w-5" aria-hidden="true" />;
    }
  };

  return (
    <ul className="border-border mt-6 border-t">
      {methods.map((method) => {
        const isEmail = method.label.toLowerCase() === "email";
        const isPhone = method.label.toLowerCase() === "phone";
        const isExternal = !isEmail && !isPhone;
        const finalHref =
          isEmail && !method.href.startsWith("mailto:")
            ? `mailto:${method.href}`
            : method.href;

        return (
          <li key={method.label}>
            <a
              href={finalHref}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group border-border flex min-w-0 items-center gap-4 border-b py-4"
            >
              <span className="text-primary shrink-0">
                {getIcon(method.label)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="text-muted-foreground block text-sm">
                  {method.label}
                </span>
                <span className="text-foreground group-hover:text-primary mt-0.5 block truncate text-base font-medium transition-colors">
                  {method.value}
                </span>
              </span>
              <ArrowUpRight
                className="text-muted-foreground group-hover:text-primary h-4 w-4 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
