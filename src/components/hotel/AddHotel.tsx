import { useAdmin } from "@/hooks/useAdmin";
import HotelForm from "./HotelForm";
import Modal from "../base/Modal";

function AddHotel({ onClose }: { onClose?: () => void }) {
  const { addHotel } = useAdmin();

  return (
    <Modal onClose={onClose}>
      <div className="space-y-4">
        <p className="font-semibold text-lg">Add New Hotel</p>
        <HotelForm
          mode="add"
          onCancel={onClose}
          onSubmit={async (data) => {
            await addHotel(data);
            console.log(data, "test");
            onClose?.();
          }}
        />
      </div>
    </Modal>
  );
}

export default AddHotel;
