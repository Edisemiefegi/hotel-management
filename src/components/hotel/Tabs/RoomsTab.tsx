import { Button } from "@/components/ui/button";
import RoomForm from "@/components/rooms/RoomForm";
import { useFormContext } from "react-hook-form";
import SummaryCard from "@/components/base/SummaryCard";

function RoomsTab() {
  const { watch, setValue } = useFormContext();

  const rooms = watch("rooms");

  const handleAddRoom = async () => {
    setValue("rooms", [...rooms, rooms]);

    // console.log(rooms, "rooms");
  };

  return (
    <div className="space-y-3">
      <p className="font-medium">Add New Room</p>

      <RoomForm />

      <Button type="button" onClick={handleAddRoom}>
        Add Room
      </Button>

      {/*  Added Rooms */}

      {rooms && (
        <div className="space-y-2">
          {rooms?.map((room: any, index: number) => (
            <SummaryCard
              key={index}
              status={room.status}
              number={room.pricePerNight}
              title={room.type}
              text={
                room.bed + " " + "bed" + "." + room.capacity + " " + "guest"
              }
              image={room.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default RoomsTab;
