import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
function Card({ children, className }: Props) {
  return <div className={`${className} rounded-md shadow-md `}>{children}</div>;
}

export default Card;
