import { Section } from "@/components/ui/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { SectionHeading, ContactMethodList } from "@/components/sections";
import { Reveal } from "@/components/motion";
import { buildMetadata } from "@/config/metadata";
import { contactPageContent } from "@/config/personal";
import { contactMethods } from "@/config/social";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch through the contact form or professional links.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section containerSize="lg" className="pt-16 sm:pt-20">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-5">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow={contactPageContent.eyebrow}
              title={contactPageContent.title}
              description={contactPageContent.description}
            />
          </Reveal>

          <Reveal delay={80}>
            <Card className="mt-8">
              <CardHeader>
                <CardTitle as="h2">{contactPageContent.reachOutTitle}</CardTitle>
                <CardDescription>
                  {contactPageContent.reachOutDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactMethodList methods={contactMethods} />
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <Reveal delay={60}>
            <Card>
              <CardHeader>
                <CardTitle as="h2">{contactPageContent.formTitle}</CardTitle>
                <CardDescription>
                  {contactPageContent.formDescription}
                </CardDescription>
              </CardHeader>
              <ContactForm />
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
