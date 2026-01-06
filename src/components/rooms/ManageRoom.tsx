import SidePanel from "@/components/layout/SidePanel";
import EditRoom from "@/components/rooms/EditRoom";
import ViewRoom from "@/components/rooms/ViewRoom";
import { ROOMS } from "@/constants/hotels";
import { useMemo,  } from "react";
import { useSearchParams} from "react-router-dom";

 type Props = {
    open?:boolean;
    onClose:() => void
}

export default function ManageRoom({open, onClose}:Props) {
    const [searchParams] = useSearchParams()
    
    const roomId = searchParams.get('room_id')
    const isEdit = searchParams.get('edit') == 'true'
  
  //TODO: change this to use DetailsQuery
  const room = useMemo(() => {
    return ROOMS?.find(el => el.id == roomId)
  },[roomId])


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
            title={isEdit ? "Edit Room" : " Room Details"}
            description={isEdit ? room?.name : " "}
          >
            <SidePanel.Content>
              {isEdit  ? (
                <EditRoom />
              ) : (
                <ViewRoom room={room} />
              )}
            </SidePanel.Content>
          </SidePanel>
        </>
      )}
      </>
  )
}
