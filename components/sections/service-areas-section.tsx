import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  LifeBuoy,
  Recycle,
  Shirt,
  Stethoscope,
  TreePine,
  Utensils,
  Waves,
} from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { siteContent } from "@/data/site-content";

const serviceIcons: LucideIcon[] = [
  Utensils,
  GraduationCap,
  Shirt,
  Droplets,
  Stethoscope,
  LifeBuoy,
  TreePine,
  Waves,
  Recycle,
  HeartHandshake,
  HandHeart,
];

export function ServiceAreasSection() {
  return (
    <SectionShell id="service-areas" variant="white">
      <SectionHeading eyebrow="Service Areas" title="Ways to Serve Communities" />
      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.serviceAreas.map((service, index) => {
          const Icon = serviceIcons[index] ?? HeartHandshake;

          return (
            <StaggerItem key={service}>
              <article className="group flex h-full items-center gap-4 rounded-[1.35rem] border border-navy/8 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-orange/20 hover:shadow-soft">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-cream text-navy transition duration-300 group-hover:bg-orange group-hover:text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold leading-tight text-navy">{service}</h3>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </SectionShell>
  );
}
