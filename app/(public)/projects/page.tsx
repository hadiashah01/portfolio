import { Section } from "@/components/ui/Section";
import { SectionHeading, ProjectCard } from "@/components/sections";
import { Reveal } from "@/components/motion";
import { buildMetadata } from "@/config/metadata";
import { projects } from "@/config/projects";
import { projectsPageContent } from "@/config/personal";

export const metadata = buildMetadata({
  title: "Projects",
  description: "Featured projects and case-study style project writeups.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <Section containerSize="lg" className="pt-16 sm:pt-20">
      <div className="space-y-12">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              as="h1"
              eyebrow={projectsPageContent.eyebrow}
              title={projectsPageContent.title}
              description={projectsPageContent.description}
            />
            <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {String(projects.length).padStart(2, "0")} projects
            </p>
          </div>
        </Reveal>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              variant="detailed"
              headingLevel="h2"
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
