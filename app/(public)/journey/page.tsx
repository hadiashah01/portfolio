import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion";
import { TimelineItem, SectionHeading } from "@/components/sections";
import { buildMetadata } from "@/config/metadata";
import { journeyPageContent, personal } from "@/config/personal";
import { journeyMilestones } from "@/config/journey";

export const metadata = buildMetadata({
  title: "Learning Journey",
  description: "Milestones and continuous learning progress over time.",
  path: "/journey",
});

export default function JourneyPage() {
  return (
    <Section containerSize="lg" className="pt-16 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow={journeyPageContent.eyebrow}
              title={journeyPageContent.title}
              description={journeyPageContent.description}
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 rounded-xl border border-border bg-surface p-6 shadow-sm">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {journeyPageContent.currentDirectionTitle}
              </p>
              <p className="mt-3 text-sm leading-6 text-foreground">
                {journeyPageContent.currentDirectionDescription}
              </p>
              <p className="mt-4 border-t border-border pt-4 text-sm leading-7 text-muted-foreground">
                {personal.learningPhilosophy}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <ol>
              {journeyMilestones.map((milestone) => (
                <TimelineItem
                  key={milestone.title}
                  year={milestone.year}
                  title={milestone.title}
                  headingLevel="h2"
                  description={milestone.description}
                />
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
