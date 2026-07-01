import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "focus-ring min-h-32 w-full resize-y rounded-2xl border border-navy/12 bg-white px-4 py-3 text-base text-ink shadow-sm transition placeholder:text-ink/42 hover:border-navy/24 focus-visible:border-orange",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
