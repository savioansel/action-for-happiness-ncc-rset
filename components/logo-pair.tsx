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
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-0.5 shadow-sm ring-1 ring-navy/10",
          logoClassName,
        )}
      >
        <Image
          src={siteContent.logo.src}
          alt={siteContent.logo.alt}
          width={siteContent.logo.width}
          height={siteContent.logo.height}
          className="h-full w-auto object-contain"
          priority
        />
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
          {siteContent.organization.tagline ? (
            <p
              className={cn(
                "max-w-[260px] truncate text-xs font-medium",
                onDark ? "text-white/68" : "text-ink/68",
              )}
            >
              {siteContent.organization.tagline}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
