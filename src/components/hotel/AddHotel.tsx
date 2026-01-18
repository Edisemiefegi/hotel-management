import HotelForm, { type HotelFormRef } from "./HotelForm";
import Modal from "../base/Modal";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Button } from "../ui/button";
import { useRef, useState } from "react";

interface Props {
  onClose?: () => void;
}
function AddHotel({ onClose }: Props) {
  const { isSmallerOrEqualTo } = useBreakpoint();
  const formRef = useRef<HotelFormRef>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await formRef.current?.submit();
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      fullScreen={isSmallerOrEqualTo("md")}
      onClose={onClose}
      title="Add New Hotel"
      footerContent={
        <div className="grid grid-cols-2 md:flex justify-end gap-4">
          <Button variant={"outline"} onClick={onClose}>
            Cancel
          </Button>
          <Button
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? "loading..." : "Add Hotel"}
          </Button>
        </div>
      }>

      <HotelForm
        ref={formRef}
        mode="add"
        onSuccess={onClose}
      />
    </Modal>
  );
}

export default AddHotel;
