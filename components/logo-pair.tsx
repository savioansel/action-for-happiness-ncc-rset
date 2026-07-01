import Image from "next/image";

import { siteContent } from "@/data/site-content";
import { cn } from "@/lib/utils";

type LogoPairProps = {
  className?: string;
  logoClassName?: string;
  showText?: boolean;
  onDark?: boolean;
};

export function LogoPair({
  className,
  logoClassName,
  showText = false,
  onDark = false,
}: LogoPairProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex h-12 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-navy/10",
            logoClassName,
          )}
        >
          <Image
            src={siteContent.logos.ncc.src}
            alt={siteContent.logos.ncc.alt}
            width={siteContent.logos.ncc.width}
            height={siteContent.logos.ncc.height}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
        <div
          className={cn(
            "flex h-12 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-navy/10",
            logoClassName,
          )}
        >
          <Image
            src={siteContent.logos.rset.src}
            alt={siteContent.logos.rset.alt}
            width={siteContent.logos.rset.width}
            height={siteContent.logos.rset.height}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
      </div>
      {showText ? (
        <div className="min-w-0">
          <p
            className={cn(
              "truncate text-sm font-semibold",
              onDark ? "text-white" : "text-navy",
            )}
          >
            {siteContent.organization.name}
          </p>
          <p
            className={cn(
              "hidden max-w-[260px] truncate text-xs sm:block",
              onDark ? "text-white/68" : "text-ink/58",
            )}
          >
            {/* NCC Unit, RSET */}
            An Initiative of the NCC Unit, RSET
          </p>
        </div>
      ) : null}
    </div>
  );
}
