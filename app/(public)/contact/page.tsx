import { Section } from "@/components/ui/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { SectionHeading, ContactMethodList } from "@/components/sections";
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
    <Section containerSize="lg" className="pt-24 sm:pt-32 pb-20 sm:pb-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-8">
          <SectionHeading
            eyebrow={contactPageContent.eyebrow}
            title={contactPageContent.title}
            description={contactPageContent.description}
          />
          <Card>
            <CardHeader>
              <CardTitle>{contactPageContent.reachOutTitle}</CardTitle>
              <CardDescription>
                {contactPageContent.reachOutDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactMethodList methods={contactMethods} />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{contactPageContent.formTitle}</CardTitle>
            <CardDescription>
              {contactPageContent.formDescription}
            </CardDescription>
          </CardHeader>
          <ContactForm />
        </Card>
      </div>
    </Section>
  );
}