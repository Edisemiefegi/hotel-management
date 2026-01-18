import type { ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props {
  fullScreen?: boolean;
  children: ReactNode;
  title?: string | ReactNode;
  description?: string | ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
  noHeader?: boolean;
  noFooter?: boolean;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
  onClose?: () => void;
}

function Modal({ children, onClose, noHeader = false, noFooter = false, contentClassName, title, description, titleClassName, descriptionClassName, fullScreen, className, headerClassName, footerClassName, headerContent, footerContent }: Props) {



  return (
    <div className="fixed inset-0 z-50 h-screen w-screen  flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30  backdrop-blur-xs"></div>

      <div className={cn("z-10 bg-white flex flex-col gap-4 p-4 md:px-5 relative ",
        fullScreen ? "h-screen w-screen" : " mx-4 w-full rounded-xl max-w-lg h-[600px]",
        className)}>

        {/* ///Header //// */}
        {!noHeader && <div className={cn('sticky left-0 top-0 bg-white ', headerClassName)}>
          {headerContent ? headerContent : <>
            {title && <h2 className={cn("text-lg font-semibold", titleClassName)}>{title}</h2>}
            {description && <p className={cn("text-sm text-gray-500", descriptionClassName)}>{description}</p>}

          </>}
        </div>}

        <Button
          variant={"ghost"}
          onClick={onClose}
          className="absolute right-2 top-2"
        >
          <X size={20} />
        </Button>

        <div className={cn(" flex-1 overflow-y-auto", contentClassName)}>
          {children}
        </div>
        {/* ///Footer //// */}
        {!noFooter && <div className={cn("sticky left-0 bottom-0 bg-white", footerClassName)}>
          {footerContent}
        </div>}

      </div>
    </div>
  );
}

export default Modal;
