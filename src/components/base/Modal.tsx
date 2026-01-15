import type { ReactNode } from "react";
import Card from "./Card";
import { X } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  children: ReactNode;
  onClose?: () => void;
}

function Modal({ children, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 h-full  flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30  backdrop-blur-xs"></div>

      <div className=" z-10 w-full max-w-lg mx-4">
        <Card className="bg-white relative  h-[600px] overflow-y-auto ">
          <Button
            variant={"ghost"}
            onClick={onClose}
            className="absolute  right-2 top-2"
          >
            <X size={20} />
          </Button>
          {children}
        </Card>
      </div>
    </div>
  );
}

export default Modal;
