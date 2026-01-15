import InfoCard from "../base/InfoCard";
import AddRoom from "../rooms/AddRoom";
import type { Room } from "@/types";

interface Props {
  rooms: Room[];
  updateRooms: (rooms: Room[]) => void;
}

function RoomsTab({ rooms, updateRooms }: Props) {
  const addRoom = (room: Room) => {
    updateRooms([...rooms, room]);
  };

  return (
    <div className="space-y-4">
      {rooms.map((item: any, index: number) => (
        <InfoCard
          key={index}
          status={item.status}
          number={item.pricePerNight}
          title={item.name}
          text={item.bed + "." + item.size}
        />
      ))}
      <hr />
      <div className="space-y-3">
        <p>Add New Room</p>
        <AddRoom onAdd={addRoom} />
      </div>{" "}
    </div>
  );
}

export default RoomsTab;
