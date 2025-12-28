import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
function Card({ children, className }: Props) {
  return (
    <div className={cn("rounded-md shadow-md", className)}>{children}</div>
  );
}

export default Card;
