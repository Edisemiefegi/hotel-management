import { useAdmin } from "@/hooks/useAdmin";
import HotelForm from "./HotelForm";
import Modal from "../base/Modal";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Button } from "../ui/button";

interface Props {
  onClose?: () => void;
}
function AddHotel({ onClose }: Props) {
  const { isSmallerOrEqualTo } = useBreakpoint()


  const { addHotel } = useAdmin();

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
          {/* <Button disabled={loading} onClick={handleSubmit}>
            {loading ? "loading..." : "Add Hotel"}
          </Button> */}
        </div>
      }>

      <HotelForm
        mode="add"
        onCancel={onClose}
        onSubmit={async (data) => {
          await addHotel(data);
          console.log(data, "test");
          onClose?.();
        }}
      />
    </Modal>
  );
}

export default AddHotel;
