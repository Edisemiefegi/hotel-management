import { useAdmin } from "@/hooks/useAdmin";
import { Button } from "../ui/button";
import HotelForm from "./HotelForm";
import { useState } from "react";
import type { Hotel, } from "@/types";
import Modal from "../base/Modal";
import { useBreakpoint } from "@/hooks/useBreakpoint";

interface Props {
  onClose?: () => void;
}
function AddHotel({ onClose }: Props) {
  const { isSmallerOrEqualTo } = useBreakpoint()


  const { addHotel } = useAdmin();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<Hotel>();

  const handleSubmit = async () => {
    if (form) {
      try {
        setLoading(true);
        await addHotel(form);
        alert("successfull");
        onClose?.();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
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
          <Button disabled={loading} onClick={handleSubmit}>
            {loading ? "loading..." : "Add Hotel"}
          </Button>
        </div>
      }>

      <HotelForm data={form} onChange={setForm} />
    </Modal>
  );
}

export default AddHotel;
