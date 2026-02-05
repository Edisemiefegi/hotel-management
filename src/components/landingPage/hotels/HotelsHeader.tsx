import { DatePicker } from "@/components/base/DatePicker";
import InputComponet from "@/components/base/InputComponet";
import { Button } from "@/components/ui/button";
import { MapPin, Search, User } from "lucide-react";

function HotelsHeader() {
  return (
    <header className="space-y-8">
      <h2 className="font-bold text-2xl">All Hotels</h2>

      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-3">
        <div className="lg:col-span-2">
          <InputComponet
            placeholder="Where are you going?"
            prepend={<MapPin size={15} />}
            label="Location"
          />
        </div>

        <DatePicker label="Check-in" />
        <DatePicker label="Check-out" />

        <InputComponet
          placeholder="Guest"
          prepend={<User size={15} />}
          label="Guest"
        />

        <Button className="md:mt-6 ">
          <Search /> Search Hotels
        </Button>
      </div>
    </header>
  );
}

export default HotelsHeader;
