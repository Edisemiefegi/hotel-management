import type { ReactNode } from "react";
import Card from "./Card";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useBreakpoint } from "@/hooks/useBreakpoint";

interface Props {
  children: ReactNode;
  noHeader?: boolean;
  noFooter?: boolean;
  className?: string;
  containerClassName?: string;
  contentClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
  onClose?: () => void;
}

function Modal({
  children,
  onClose,
  noHeader = true,
  noFooter = true,
  containerClassName,
  contentClassName,
  className,
  headerClassName,
  footerClassName,
  headerContent,
  footerContent,
}: Props) {
  const { isSmallerOrEqualTo } = useBreakpoint();
  const isMobile = isSmallerOrEqualTo("sm");

  return (
    <div className="fixed inset-0 z-50 h-full  flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30  backdrop-blur-xs"></div>

      <div
        className={cn(
          " z-10 w-full",
          isMobile ? "h-full max-w-none mx-0" : "max-w-lg mx-4",
          containerClassName
        )}
      >
        <Card
          className={cn(
            "bg-white relative  overflow-y-auto ",
            isMobile ? "h-full rounded-none" : "h-[600px] rounded-xl",
            className
          )}
        >
          {/* ///Header //// */}
          {!noHeader && (
            <div className={cn("sticky left-0 top-0", headerClassName)}>
              {headerContent ? (
                headerContent
              ) : (
                <>
                  <h2>Title</h2>
                  <p>Description</p>
                </>
              )}
            </div>
          )}
          <Button
            variant={"ghost"}
            onClick={onClose}
            className="absolute  right-2 top-2"
          >
            <X size={20} />
          </Button>
          <div className={cn("", contentClassName)}>{children}</div>
          {/* ///Footer //// */}
          {!noFooter && (
            <div className={cn("sticky left-0 bottom-0", footerClassName)}>
              {footerContent}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Modal;
