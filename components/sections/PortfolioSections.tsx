import Link from "next/link";
import { ExternalLink, Github, Mail, Linkedin, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/utils/cn";
import type { Project } from "@/config/projects";
import { ProjectPreview } from "@/components/ui/ProjectPreview";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-xl space-y-3">
      <p className="text-primary text-sm font-medium tracking-[0.24em] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasImage = project.image && !project.image.includes("placeholder");

  return (
    <Card className="h-full flex flex-col border-border bg-surface hover:shadow-md transition-shadow duration-300 group">
      {hasImage && (
        <ProjectPreview
          src={project.image}
          alt={`${project.title} screenshot`}
          className="aspect-video w-full object-cover"
        />
      )}

      <CardHeader className="flex flex-col gap-2 pt-5">
        <div className="flex flex-wrap items-center gap-2">
          {project.featured ? (
            <Badge variant="filled" className="text-xs px-2 py-1">
              Selected
            </Badge>
          ) : null}
          <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
            {project.type ? project.type.charAt(0).toUpperCase() + project.type.slice(1) : ""}
          </span>
        </div>
        <CardTitle className="text-display text-xl font-semibold leading-tight">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 pt-0 flex-1">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology} variant="outline" className="text-xs">
              {technology}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "no-underline text-xs px-3 py-2",
              )}
            >
              <Github className="h-3 w-3" aria-hidden="true" />
              <span className="ml-1">GitHub</span>
            </Link>
          ) : null}
          {project.demoUrl ? (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "primary", size: "sm" }),
                "no-underline text-xs px-3 py-2",
              )}
            >
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
              <span className="ml-1">Live Demo</span>
            </Link>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
};

export function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <li className="before:bg-primary after:bg-border relative pl-8 before:absolute before:top-2 before:left-0 before:h-3 before:w-3 before:rounded-full after:absolute after:top-6 after:left-[5px] after:h-full after:w-px">
      <div className="border-border bg-surface space-y-2 rounded-lg border p-5">
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
          {year}
        </p>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground text-sm leading-7">{description}</p>
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
        return <Github className="text-primary h-4 w-4" aria-hidden="true" />;
      case "linkedin":
        return <Linkedin className="text-primary h-4 w-4" aria-hidden="true" />;
      case "phone":
        return <Phone className="text-primary h-4 w-4" aria-hidden="true" />;
      default:
        return <Mail className="text-primary h-4 w-4" aria-hidden="true" />;
    }
  };

  return (
    <ul className="space-y-3">
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
              className="border-border bg-surface hover:bg-muted flex items-center justify-between rounded-lg border px-4 py-3 text-sm transition-colors"
            >
              <span className="text-foreground font-medium">
                {method.label}
              </span>
              <span className="text-muted-foreground">{method.value}</span>
              {getIcon(method.label)}
            </a>
          </li>
        );
      })}
    </ul>
  );
}