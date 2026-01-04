import InfoCard from "../base/InfoCard";
import { ROOMS } from "@/constants/hotels";
import InputComponet from "../base/InputComponet";
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
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 grid-cols-1">
          <InputComponet label="Room Type" />
          <InputComponet label="Price Per Night (NGN)" />

          <InputComponet label="Capacity" />
          <InputComponet label="Beds" />
          <InputComponet label="Size" />
        </div>
        <Button className="w-full">
          <Plus /> Add Room
        </Button>
      </div>
    </div>
  );
}

export default RoomsTab;
