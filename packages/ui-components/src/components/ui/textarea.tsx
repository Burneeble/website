import * as React from "react";

import { cn } from "@/lib/utils";
import { useCustomPlaceholder } from "@/hooks/useCustomPlaceholderStyle";

const textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }) => {
  const inputRef = useCustomPlaceholder<HTMLTextAreaElement>();

  return (
    <textarea
      className={cn(
        `
          p-small input-placeholder tw-flex tw-min-h-[116px] tw-w-full
          tw-rounded-lg tw-border tw-border-tertiary tw-bg-gradient-to-r
          tw-text-body-active secondary-gradient tw-px-3 tw-py-2 tw-shadow-sm
          tw-outline-none tw-transition-colors

          disabled:tw-cursor-not-allowed disabled:tw-opacity-50

          file:tw-border-0 file:tw-bg-gradient-to-r file:tw-font-medium
          file:tw-text-foreground file:p-small file:secondary-gradient

          focus-visible:tw-border-active focus-visible:tw-outline-none
          focus-visible:tw-ring-1 focus-visible:tw-ring-ring

          placeholder:tw-italic placeholder:tw-text-muted-foreground
        `,
        className
      )}
      ref={inputRef}
      {...props}
    />
  );
});
textarea.displayName = "Textarea";

export { textarea as Textarea };
