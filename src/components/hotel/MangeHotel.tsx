import SidePanel from "@/components/layout/SidePanel";
import { HOTELS } from "@/constants/hotels";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ViewHotel from "./ViewHotel";
import EditHotel from "./EditHotel";

type Props = {
  open?: boolean;
  onClose: () => void;
};

export default function ManageHotel({ open, onClose }: Props) {
  const [searchParams] = useSearchParams();

  const hotelId = searchParams.get("hotel_id");
  const isEdit = searchParams.get("edit") == "true";

  //TODO: change this to use DetailsQuery
  const hotel = useMemo(() => {
    return HOTELS?.find((el) => el.id == hotelId);
  }, [hotelId]);

  return (
    <>
      {open && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-xs h-full bg-black/10 z-20"
            onClick={onClose}
          />
          <SidePanel
            close={onClose}
            title={isEdit ? "Edit Hotel" : " Hotel Details"}
            description={isEdit ? hotel?.name : " "}
          >
            <SidePanel.Content>
              {isEdit ? <EditHotel /> : <ViewHotel hotel={hotel} />}
            </SidePanel.Content>
          </SidePanel>
        </>
      )}
    </>
  );
}
