import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import type { ReactNode } from "react";
import React from "react";

interface Props extends React.ComponentProps<typeof Input> {
  label?: string;
  className?: string;
  prepend?: ReactNode;
  append?: ReactNode;
  error?: string;
}
function InputComponet({
  label,
  className,
  prepend,
  append,
  error,
  ...props
}: Props) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm font-medium text-foreground">{label}</label>
      )}

      <div
        className={cn(
          "flex h-9 items-center rounded-md border border-input bg-transparent",
          "focus-within:ring-2 focus-within:ring-ring/50",
          error && "border-destructive"
        )}
      >
        {prepend && (
          <span className="flex items-center px-2 text-muted-foreground">
            {prepend}
          </span>
        )}

        <Input
          className={cn(
            "h-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0",
            className
          )}
          {...props}
        />

        {append && (
          <span className="flex items-center px-2 text-muted-foreground">
            {append}
          </span>
        )}
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

export default InputComponet;
