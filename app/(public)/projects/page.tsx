import { Section } from "@/components/ui/Section";
import { SectionHeading, ProjectCard } from "@/components/sections";
import { buildMetadata } from "@/config/metadata";
import { projects } from "@/config/projects";
import { projectsPageContent } from "@/config/personal";

export const metadata = buildMetadata({
  title: "Projects",
  description: "Selected work and project writeups.",
  path: "/projects",
});

export default function ProjectsPage() {
  const businessProjects = projects.filter((p) => p.type === "business");
  const technicalProjects = projects.filter((p) => p.type === "technical");
  const conceptProjects = projects.filter((p) => p.type === "concept");

  return (
    <>
      <Section containerSize="lg" className="pt-24 sm:pt-32 pb-20 sm:pb-28">
        <div className="space-y-8">
          <SectionHeading
            eyebrow={projectsPageContent.eyebrow}
            title={projectsPageContent.title}
            description={projectsPageContent.description}
          />

          {businessProjects.length > 0 && (
            <section className="space-y-6">
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                Business websites
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {businessProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          )}

          {technicalProjects.length > 0 && (
            <section className="space-y-6">
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                Technical frontend work
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {technicalProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          )}

          {conceptProjects.length > 0 && (
            <section className="space-y-6">
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                Concept explorations
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {conceptProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Concept projects are personal explorations and not commissioned
                work.
              </p>
            </section>
          )}
        </div>
      </Section>
    </>
  );
}