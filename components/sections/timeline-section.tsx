import { CalendarDays, ClipboardCheck, HeartHandshake, MessageCircle } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { siteContent } from "@/data/site-content";

const timelineIcons = [ClipboardCheck, MessageCircle, CalendarDays, HeartHandshake];

export function TimelineSection() {
  return (
    <SectionShell id="how-it-works" variant="cream">
      <SectionHeading eyebrow="How It Works" title="A Simple Path to Participation" />
      <Stagger className="relative mt-14 grid gap-5 lg:grid-cols-4">
        <div className="absolute left-0 right-0 top-12 hidden h-px bg-navy/10 lg:block" />
        {siteContent.timeline.map((step, index) => {
          const Icon = timelineIcons[index] ?? ClipboardCheck;

          return (
            <StaggerItem key={step.title} className="relative">
              <article className="h-full rounded-[1.5rem] bg-white p-6 shadow-card ring-1 ring-navy/6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div className="flex size-14 items-center justify-center rounded-full bg-navy text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-bold text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-2xl font-bold leading-tight text-navy">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-ink/68">{step.description}</p>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </SectionShell>
  );
}
