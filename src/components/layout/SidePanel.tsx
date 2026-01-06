import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { type ReactNode } from "react";
import { Button } from "../ui/button";

interface Props {
  close: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

function Header({ children }: { children: ReactNode }) {
  return <div className="px-6 py-4 border-b">{children}</div>;
}

function Content({ children }: { children: ReactNode }) {
  return <div className="flex-1 overflow-y-auto h-full pb-40 px-6 py-4">{children}</div>;
}

function Footer({ children }: { children: ReactNode }) {
  return <div className="px-6 py-4 border-t bg-gray-50">{children}</div>;
}

function SidePanel({ close, title, description, children, className }: Props) {
  return (
    <div
      className={cn(
        "fixed right-0 md:top-0 top-14 z-30 h-screen w-full md:w-1/2 bg-white shadow-md flex flex-col",
        className
      )}
    >
      <Button
        variant={"ghost"}
        onClick={close}
        className="absolute  top-4 right-4 z-40 text-gray hover:text-black"
      >
        <X size={20} />
      </Button>

      {(title || description) && (
        <div className="px-6 py-4 border-b bg-gray-50">
          <p className="flex flex-col">
            {title && <span className="font-semibold">{title}</span>}
            {description && (
              <span className="text-xs text-gray">{description}</span>
            )}
          </p>
        </div>
      )}

      {children}
    </div>
  );
}

SidePanel.Header = Header;
SidePanel.Content = Content;
SidePanel.Footer = Footer;

export default SidePanel;
