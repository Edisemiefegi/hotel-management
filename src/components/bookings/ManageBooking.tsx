import { useSearchParams } from "react-router-dom";
import SidePanel from "../layout/SidePanel";
import EditBooking from "./EditBooking";
import ViewBooking from "./ViewBooking";
import { useMemo } from "react";
import { BOOKINGS } from "@/constants/hotels";

type Props = {
  open?: boolean;
  onClose: () => void;
};

function ManageBooking({ open, onClose }: Props) {
  const [searchParams] = useSearchParams();

  const bookingId = searchParams.get("booking_id");
  const isEdit = searchParams.get("edit") == "true";

  const booking = useMemo(() => {
    return BOOKINGS?.find((el) => el.bookingId == bookingId);
  }, [bookingId]);
  
  return (
    <div>
      {open && (
        <div>
          <div
            className="fixed inset-0 backdrop-blur-xs h-full bg-black/10 z-20"
            onClick={onClose}
          />
          <SidePanel
            close={onClose}
            title={isEdit ? "Edit Booking" : " Booking Details"}
          >
            <SidePanel.Content>
              {isEdit ? <EditBooking /> : <ViewBooking booking={booking} />}
            </SidePanel.Content>
          </SidePanel>
        </div>
      )}
    </div>
  );
}

export default ManageBooking;
