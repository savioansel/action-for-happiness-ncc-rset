import { Quote } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { siteContent } from "@/data/site-content";

export function TestimonialsSection() {
  return (
    <SectionShell id="testimonials" variant="white">
      <SectionHeading eyebrow="Testimonials" title="Voices from Volunteers" />
      <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
        {siteContent.testimonials.map((testimonial) => (
          <StaggerItem key={testimonial}>
            <figure className="h-full rounded-[1.5rem] bg-cream p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <Quote className="size-8 text-orange" aria-hidden="true" />
              <blockquote className="mt-7 text-2xl font-semibold leading-10 text-navy">
                {testimonial}
              </blockquote>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}
