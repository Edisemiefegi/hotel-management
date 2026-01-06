import InfoCard from "../base/InfoCard";
import { ROOMS } from "@/constants/hotels";
import AddRoom from "../rooms/AddRoom";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

function RoomsTab() {
  return (
    <div className="space-y-4">
      {ROOMS.map((item: any, index: number) => (
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
        <AddRoom />
        <Button className="w-full">
          <Plus /> Add Room
        </Button>
      </div>{" "}
    </div>
  );
}

export default RoomsTab;
