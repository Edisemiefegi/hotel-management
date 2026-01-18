import SummaryCard from "../base/SummaryCard";
import { ROOMS } from "@/constants/hotels";
import InputComponet from "../base/InputComponet";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

function AddonTab() {
  return (
    <div className="space-y-4">
      {ROOMS.map((item: any, index: number) => (
        <SummaryCard
          key={index}
          status={item.status}
          number={item.pricePerNight}
          title={item.name}
          text={item.bed + "." + item.size}
        />
      ))}

      <hr />

      <div className="space-y-3">
        <p>Add New Add-ons</p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 grid-cols-1">
          <InputComponet label="Room Type" />
          <InputComponet label="Price Per Night (NGN)" />

          <InputComponet label="Capacity" />
          <InputComponet label="Beds" />
          <InputComponet label="Size" />
        </div>
        <Button className="w-full">
          <Plus /> Add Add-ons
        </Button>
      </div>
    </div>
  );
}

export default AddonTab;
