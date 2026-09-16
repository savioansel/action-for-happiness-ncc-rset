import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      data-lpignore="true"
      data-form-type="other"
      suppressHydrationWarning
      className={cn(
        "focus-ring h-13 w-full rounded-2xl border border-navy/12 bg-white px-4 text-base text-ink shadow-sm transition placeholder:text-ink/42 hover:border-navy/24 focus-visible:border-orange",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
