import { LogoPair } from "@/components/logo-pair";
import { siteContent } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="bg-navy py-12 text-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <LogoPair showText onDark logoClassName="h-14 w-12" />
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
              {siteContent.organization.affiliation}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:text-right">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/48">
                Contact
              </p>
              <div className="mt-3 space-y-2 text-base font-semibold">
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="focus-ring block rounded-lg text-white/82 hover:text-white"
                >
                  {siteContent.contact.email}
                </a>
                <a
                  href={`tel:${siteContent.contact.phone.replace(/\s/g, "")}`}
                  className="focus-ring block rounded-lg text-white/82 hover:text-white"
                >
                  {siteContent.contact.phone}
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/48">
                Explore
              </p>
              <div className="mt-3 space-y-2 text-base font-semibold">
                {siteContent.navigation.slice(0, 4).map((item) => (
                  <a
                    href={item.href}
                    key={item.href}
                    className="focus-ring block rounded-lg text-white/82 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/52">
          <p>{siteContent.organization.name}</p>
        </div>
      </div>
    </footer>
  );
}
