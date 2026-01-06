import AddRoom from "./AddRoom";
import { Button } from "../ui/button";
import {
  CircleCheck,
  LockKeyhole,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type StatusItem = {
  label: string;
  icon: LucideIcon;
  clicked: boolean;
};

function EditRoom() {
  const status: StatusItem[] = [
    {
      label: "Available",
      icon: CircleCheck,
      clicked: true,
    },
    {
      label: "Booked",
      icon: LockKeyhole,
      clicked: false,
    },
    {
      label: "Maint.",
      icon: Wrench,
      clicked: false,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <label htmlFor="" className="text-gray-800 text-sm">
          ROOM GALLERY
        </label>
        <div className="p-3 h-50 overflow-x-auto bg-gray-50 w-full flex gap-2 rounded-md">
          <img
            src="/hotels/hotel1.webp"
            alt=""
            className="rounded-md w-fit h-full"
          />
          <img
            src="/hotels/hotel1.webp"
            alt=""
            className="rounded-md w-fit h-full"
          />
        </div>
        <Button variant={"outline"} className="w-full">
          Add New Photo{" "}
        </Button>
      </div>

      <div className="space-y-2">
        <label htmlFor="" className="text-gray-800 text-sm">
          AVAILABILITY STATUS
        </label>
        <div className="p-2    shadow-sm border-gray-100 w-full flex justify-between rounded-sm">
          {status.map(({ label, clicked, icon: Icon }) => (
            <div
              key={label}
              className={cn(
                clicked ? "text-green-700 rounded-sm bg-green-50" : "",
                "px-6 py-2 flex flex-col justify-center items-center text-xs"
              )}
            >
              <Icon size={15} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <AddRoom />

      <div>
        <label htmlFor="" className="text-gray-800 text-sm">
          AMENITIES
        </label>
      </div>

      <div className="justify-end flex space-x-3">
        <Button variant={"outline"}>Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}

export default EditRoom;
