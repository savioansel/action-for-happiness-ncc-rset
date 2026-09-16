import Link from "next/link";
import { LogoPair } from "@/components/logo-pair";
import { siteContent } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="bg-navy py-12 text-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <Link href="/" className="inline-block focus-ring rounded-2xl">
              <LogoPair showText onDark logoClassName="h-14 w-14" />
            </Link>
            <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-white/70">
              {siteContent.organization.affiliation}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-[1.35fr_0.65fr] lg:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
                Contact
              </p>
              <div className="mt-3 space-y-2 text-sm sm:text-base font-medium">
                {siteContent.contact.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="focus-ring block whitespace-nowrap text-sm sm:text-base text-white/80 hover:text-orange transition-colors"
                  >
                    {email}
                  </a>
                ))}
                <a
                  href={`tel:${siteContent.contact.phone.replace(/\s/g, "")}`}
                  className="focus-ring block text-white/80 hover:text-orange transition-colors"
                >
                  {siteContent.contact.phone}
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
                Explore
              </p>
              <div className="mt-3 space-y-2 text-sm sm:text-base font-medium">
                {siteContent.navigation.map((item) => (
                  <Link
                    href={item.href}
                    key={item.href}
                    className="focus-ring block text-white/80 hover:text-orange transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteContent.organization.name}. All rights reserved.</p>
          <p>{siteContent.organization.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

