import { Section } from "@/components/ui/Section";
import { SectionHeading, ProjectCard } from "@/components/sections";
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
    <Section containerSize="lg" className="pt-20 sm:pt-24">
      <div className="space-y-8">
        <SectionHeading
          eyebrow={projectsPageContent.eyebrow}
          title={projectsPageContent.title}
          description={projectsPageContent.description}
        />
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
