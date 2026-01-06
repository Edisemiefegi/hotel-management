import Card from "../base/Card";
import DropDown from "../base/DropDown";
import type { MenuItem, Room } from "@/types";

interface Props {
  room?: Room;
  menu: MenuItem[];
}

function RoomCard({ room, menu }: Props) {
  return (
    <Card className="shadow-none !p-0 border hover:shadow-lg transition-all duration-300 flex h-80 min-h-fit w-full flex-col overflow-hidden group">
      <div className="h-2/5 w-full ">
        <img
          src="/hotels/hotel1.webp"
          className="object-cover overflow-hidden w-full h-full shrink-0 group-hover:scale-105 transition-all duration-300"
          alt=""
        />
      </div>

      <section className="p-4 space-y-5 ">
        <div className=" flex justify-between ">
          <div>
            <h2 className="text-lg font-medium">{room?.name}</h2>
            <p className="text-gray text-xs  ">{room?.id}</p>
          </div>

          <DropDown menu={menu} />
        </div>

        <div className="flex justify-between">
          <p className="flex flex-col text-sm font-medium ">
            NGN{room?.pricePerNight}
            <span className="text-gray text-xs font-normal">per night</span>
          </p>
          <span className="text-sm items-center flex">
            <span className="font-medium">
              {room?.guests}{" "}
              <span className="text-xs text-gray "> (guest)</span>
            </span>
          </span>
        </div>
        <hr />

        <div className="space-y-1">
          <span className="text-xs text-green-700"> {room?.status}</span>
        </div>
      </section>
    </Card>
  );
}

export default RoomCard;
