import type { ReactNode } from "react";
import Card from "./Card";
import { X } from "lucide-react";

interface Props {
  children: ReactNode;
  onClose?: () => void;
}

function Modal({ children, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 h-full  flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30  backdrop-blur-xs"></div>

      <div className="relative z-10 w-full max-w-lg mx-4">
        <Card className="bg-white relative h-[600px] overflow-y-auto ">
          <X
          size={20}
            onClick={onClose}
            className="fixed   cursor-pointer right-2 top-2"
          />
          {children}
        </Card>
      </div>
    </div>
  );
}

export default Modal;
