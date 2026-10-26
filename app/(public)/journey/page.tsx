import { Section } from "@/components/ui/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { TimelineItem, SectionHeading } from "@/components/sections";
import { buildMetadata } from "@/config/metadata";
import { journeyPageContent, personal } from "@/config/personal";
import { journeyMilestones } from "@/config/journey";

export const metadata = buildMetadata({
  title: "Background",
  description: "How my work has evolved over time.",
  path: "/journey",
});

export default function JourneyPage() {
  return (
    <Section containerSize="lg" className="pt-24 sm:pt-32 pb-20 sm:pb-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="space-y-8">
          <SectionHeading
            eyebrow={journeyPageContent.eyebrow}
            title={journeyPageContent.title}
            description={journeyPageContent.description}
          />
          <Card>
            <CardHeader>
              <CardTitle>{journeyPageContent.currentDirectionTitle}</CardTitle>
              <CardDescription>
                {journeyPageContent.currentDirectionDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {personal.learningPhilosophy}
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <ul className="space-y-6">
            {journeyMilestones.map((milestone) => (
              <TimelineItem
                key={milestone.title}
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}