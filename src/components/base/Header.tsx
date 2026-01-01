import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  heading?: string;
  subheading?: string;
  action?: boolean;
  children?: ReactNode;
  className?: string;
}
function Header({
  heading,
  subheading,
  action,
  children,
  className,

}: Props) {
  return (
    <header
      className={cn(
        "flex items-center justify-between bg-white py-4",
        className
      )}
    >
      <div className="space-y-0.5 md:space-y-1">
        <h1 className="text-xl sm:text-2xl font-semibold font-serif">
          {heading}
        </h1>
        <p className="text-sm sm:text-base font-light text-gray-600">
          {subheading}
        </p>
      </div>

      {action && <div>{children}</div>}
    </header>
  );
}

export default Header;
