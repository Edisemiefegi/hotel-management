import { useAdmin } from "@/hooks/useAdmin";
import { Button } from "../ui/button";
import HotelForm from "./HotelForm";
import { useState } from "react";
import type { Hotel, } from "@/types";
import Modal from "../base/Modal";

interface Props {
  onClose?: () => void;
}
function AddHotel({ onClose }: Props) {
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
    <Modal onClose={onClose}>
      <div className="space-y-4">
        <p className="font-semibold text-lg">Add New Hotel</p>
        <HotelForm data={form} onChange={setForm} />
        <div className="flex justify-end gap-4">
          <Button variant={"outline"} onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={loading} onClick={handleSubmit}>
            {loading ? "loading..." : "Add Hotel"}
          </Button>
        </div>{" "}
      </div>
    </Modal>
  );
}

export default AddHotel;
