import { CheckCircle2, HeartHandshake, Sparkles, UsersRound } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { siteContent } from "@/data/site-content";

const missionIcons = [HeartHandshake, CheckCircle2, UsersRound, Sparkles];

export function MissionSection() {
  return (
    <SectionShell id="mission" variant="cream">
      <SectionHeading eyebrow="Mission" title="What Guides Our Work" />
      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {siteContent.mission.map((mission, index) => {
          const Icon = missionIcons[index] ?? CheckCircle2;

          return (
            <StaggerItem key={mission}>
              <article className="group h-full rounded-[1.5rem] bg-white p-6 shadow-card ring-1 ring-navy/6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-8 flex size-13 items-center justify-center rounded-2xl bg-orange-soft text-orange transition duration-300 group-hover:scale-[1.02]">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold leading-tight text-navy">{mission}</h3>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </SectionShell>
  );
}
