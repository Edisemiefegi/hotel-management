// components/portals/HeaderPortal.tsx
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}

export default function HeaderPortal({ children }: Props) {
  const target = document.getElementById("admin-header");
  if (!target) return null;

  return createPortal(children, target);
}
