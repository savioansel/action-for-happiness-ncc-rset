import { Mail, MapPinned, MessageCircle, Phone } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { siteContent } from "@/data/site-content";

const contactItems = [
  {
    label: siteContent.contact.emailLabel,
    emails: siteContent.contact.emails,
    icon: Mail,
  },
  {
    label: siteContent.contact.phoneLabel,
    value: siteContent.contact.phone,
    href: `tel:${siteContent.contact.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: siteContent.contact.whatsappLabel,
    value: siteContent.contact.whatsapp,
    href: `https://wa.me/${siteContent.contact.whatsapp.replace(/\D/g, "")}`,
    icon: MessageCircle,
  },
];

export function ContactSection() {
  return (
    <SectionShell id="contact" variant="white">
      <SectionHeading eyebrow="Contact" title="Connect with the Initiative" />
      <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.15fr]">
        <Stagger className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.label}>
                <div className="group block h-full rounded-[1.5rem] bg-cream p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-white text-orange shadow-sm transition group-hover:bg-orange group-hover:text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink/52">
                    {item.label}
                  </p>
                  {item.emails ? (
                    <div className="mt-2 space-y-1">
                      {item.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="focus-ring block break-all text-sm sm:text-base font-bold text-navy hover:text-orange transition-colors"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="focus-ring mt-2 block break-words text-lg font-bold text-navy hover:text-orange transition-colors"
                    >
                      {item.value}
                    </a>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <StaggerItem>
          <div className="h-full rounded-[1.5rem] bg-navy p-8 text-white shadow-soft">
            <div className="mb-7 flex size-14 items-center justify-center rounded-full bg-white/10 text-orange">
              <MapPinned className="size-7" aria-hidden="true" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/58">
              Location
            </p>
            <address className="mt-4 space-y-2 text-2xl font-semibold leading-10 not-italic">
              {siteContent.organization.location.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </address>
          </div>
        </StaggerItem>
      </div>
    </SectionShell>
  );
}
