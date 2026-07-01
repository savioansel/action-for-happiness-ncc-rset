import { ArrowRight, CalendarDays, MapPin, UsersRound } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/site-content";

export function UpcomingActivitiesSection() {
  return (
    <SectionShell id="activities" variant="white">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          align="left"
          eyebrow="Upcoming Activities"
          title="Join the Next Community Drives"
        />
        <Stagger className="grid gap-5">
          {siteContent.upcomingActivities.map((activity) => (
            <StaggerItem key={activity.title}>
              <article className="rounded-[1.5rem] border border-navy/8 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-navy">{activity.title}</h3>
                    <div className="mt-5 grid gap-3 text-base text-ink/70 sm:grid-cols-2">
                      <p className="flex items-center gap-2">
                        <CalendarDays className="size-5 text-orange" aria-hidden="true" />
                        {activity.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="size-5 text-orange" aria-hidden="true" />
                        {activity.location}
                      </p>
                      <p className="flex items-center gap-2 sm:col-span-2">
                        <UsersRound className="size-5 text-orange" aria-hidden="true" />
                        {activity.volunteers}
                      </p>
                    </div>
                  </div>
                  <Button asChild variant="secondary" size="sm" className="w-full sm:w-auto">
                    <a href="#volunteer">
                      Volunteer
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </SectionShell>
  );
}
