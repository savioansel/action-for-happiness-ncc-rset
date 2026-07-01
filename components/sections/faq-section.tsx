import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { siteContent } from "@/data/site-content";

export function FAQSection() {
  return (
    <SectionShell id="faq" variant="cream">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <SectionHeading align="left" eyebrow="FAQ" title="Questions Volunteers Ask" />
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion
            type="single"
            collapsible
            className="rounded-[1.5rem] bg-white px-6 shadow-card ring-1 ring-navy/6"
          >
            {siteContent.faq.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </SectionShell>
  );
}
