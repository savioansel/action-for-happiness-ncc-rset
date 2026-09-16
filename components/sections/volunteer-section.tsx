"use client";

import { CheckCircle2, Send } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteContent } from "@/data/site-content";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

export function VolunteerSection() {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Enter your phone number.";
    }

    if (!form.interest) {
      nextErrors.interest = "Choose a service area.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <SectionShell id="volunteer" variant="cream">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Volunteer Registration"
            title={siteContent.hero.buttons[0]}
            description={siteContent.hero.subtitle}
          />
          <div className="mt-8 rounded-[1.5rem] bg-white p-6 shadow-card ring-1 ring-navy/6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-green" aria-hidden="true" />
              <p className="text-lg font-semibold leading-8 text-navy">
                {siteContent.about.welcome}
              </p>
            </div>
            <p className="mt-4 text-base leading-7 text-ink/68">
              Updates are shared through email, phone and WhatsApp.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[1.5rem] bg-white p-5 shadow-soft ring-1 ring-navy/6 sm:p-8">
            {!mounted ? (
              <div className="grid gap-5 sm:grid-cols-2 opacity-60">
                <div className="space-y-2 sm:col-span-2">
                  <div className="h-4 w-16 rounded bg-navy/10" />
                  <div className="h-13 rounded-2xl border border-navy/10 bg-navy/5" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-16 rounded bg-navy/10" />
                  <div className="h-13 rounded-2xl border border-navy/10 bg-navy/5" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-16 rounded bg-navy/10" />
                  <div className="h-13 rounded-2xl border border-navy/10 bg-navy/5" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <div className="h-4 w-36 rounded bg-navy/10" />
                  <div className="h-13 rounded-2xl border border-navy/10 bg-navy/5" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <div className="h-4 w-20 rounded bg-navy/10" />
                  <div className="h-32 rounded-2xl border border-navy/10 bg-navy/5" />
                </div>
                <div className="h-12 w-48 rounded-xl bg-orange/30" />
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                data-lpignore="true"
                data-1p-ignore="true"
                data-form-type="other"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="Name"
                    error={errors.name}
                    className="sm:col-span-2"
                  >
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      autoComplete="off"
                      data-lpignore="true"
                      data-1p-ignore="true"
                    />
                  </Field>

                  <Field id="email" label="Email" error={errors.email}>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder={siteContent.contact.email}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      autoComplete="off"
                      data-lpignore="true"
                      data-1p-ignore="true"
                    />
                  </Field>

                  <Field id="phone" label="Phone" error={errors.phone}>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      placeholder={siteContent.contact.phone}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      autoComplete="off"
                      data-lpignore="true"
                      data-1p-ignore="true"
                    />
                  </Field>

                  <Field
                    id="interest"
                    label="Preferred service area"
                    error={errors.interest}
                    className="sm:col-span-2"
                  >
                    <select
                      id="interest"
                      value={form.interest}
                      onChange={(event) => updateField("interest", event.target.value)}
                      data-lpignore="true"
                      data-1p-ignore="true"
                      className={cn(
                        "focus-ring h-13 w-full rounded-2xl border border-navy/12 bg-white px-4 text-base text-ink shadow-sm transition hover:border-navy/24 focus-visible:border-orange",
                        !form.interest && "text-ink/48",
                      )}
                      aria-invalid={Boolean(errors.interest)}
                      aria-describedby={errors.interest ? "interest-error" : undefined}
                    >
                      <option value="">Choose one</option>
                      {siteContent.serviceAreas.map((service) => (
                        <option value={service} key={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field id="message" label="Message" className="sm:col-span-2">
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(event) => updateField("message", event.target.value)}
                      placeholder="Share your availability or area of interest"
                      autoComplete="off"
                      data-lpignore="true"
                      data-1p-ignore="true"
                    />
                  </Field>
                </div>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Registration
                    <Send className="size-4" aria-hidden="true" />
                  </Button>
                  {submitted ? (
                    <p className="rounded-full bg-green/10 px-4 py-2 text-sm font-semibold text-green">
                      Thank you. Updates are shared through email, phone and WhatsApp.
                    </p>
                  ) : null}
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: keyof FormState;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div suppressHydrationWarning data-lpignore="true" className={cn("space-y-2", className)}>
      <Label htmlFor={id} suppressHydrationWarning>
        {label}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm font-semibold text-orange">
          {error}
        </p>
      ) : null}
    </div>
  );
}
