import { Section } from "@/components/ui/Section";
import { Reveal, ScrollRevealText } from "@/components/motion";
import { TimelineItem, PageIntro } from "@/components/sections";
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
    <Section containerSize="lg" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
      <PageIntro
        eyebrow={journeyPageContent.eyebrow}
        title={journeyPageContent.title}
        description={journeyPageContent.description}
        meta={`${journeyMilestones.length} milestones`}
      />

      <div className="border-border mt-16 grid gap-12 border-t pt-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 className="text-foreground text-lg font-semibold">
            <ScrollRevealText>
              {journeyPageContent.currentDirectionTitle}
            </ScrollRevealText>
          </h2>
          <p className="text-muted-foreground mt-3 text-base leading-7">
            {journeyPageContent.currentDirectionDescription}
          </p>
          <p className="text-muted-foreground border-border mt-6 border-t pt-5 text-sm leading-7">
            {personal.learningPhilosophy}
          </p>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={80}>
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
