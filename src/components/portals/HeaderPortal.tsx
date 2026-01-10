// components/portals/HeaderPortal.tsx
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function HeaderPortal({ children }: Props) {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById("admin-header");
    setTimeout(() => {
      setTarget(element);
    }, 0);
  }, []);

  if (!target) return null;

  return createPortal(children, target);
}
