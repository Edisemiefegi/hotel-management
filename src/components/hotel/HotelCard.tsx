import { MapPin, Star } from "lucide-react";
import Card from "../base/Card";
import DropDown from "../base/DropDown";
import type {  MenuItem } from "@/types/index";
import type { Hotel } from "@/types/hotel";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  hotel?: Hotel;
  menu: MenuItem[];
  layout?: "column" | "row";
}

function HotelCard({ hotel, menu, className, layout = "column" }: Props) {
  const isRow = layout === "row";

  if (!hotel) return null;
  return (
    <Card
      className={cn(
        className,
        isRow ? "flex flex-row h-50 max-h-fit " : "flex flex-col h-80 ",
        "shadow-none p-0! border hover:shadow-lg transition-all duration-300    w-full overflow-hidden group",
      )}
    >
      <div
        className={cn(
          "overflow-hidden ",
          isRow ? "w-1/3 h-full" : "w-full h-2/3",
        )}
      >
        <img
          src={hotel?.images[0] ?? "/placeholder.jpg"}
          className="object-cover overflow-hidden w-full h-full shrink-0 group-hover:scale-105 transition-all duration-300"
          alt=""
        />
      </div>

      <section className="p-4 space-y-5 w-full flex-1  min-w-0">
        <div className=" flex justify-between ">
          <div>
            <h2 className="text-lg font-medium">{hotel?.name}</h2>
            <p className="text-gray text-xs  ">{hotel?.id}</p>
          </div>

          <DropDown menu={menu} />
        </div>

        <div className="flex justify-between">
          <p className="flex text-gray text-xs items-center ">
            <MapPin stroke="#1132D5" size={13} /> {hotel?.location}
          </p>
          <span className="text-sm items-center flex">
            <Star fill="#FBBF23" width={15} stroke="0" />
            <span className="font-medium">
              {hotel?.rating}{" "}
              <span className="text-xs text-gray ">
                {" "}
                ({hotel?.reviews?.length} reviews)
              </span>
            </span>
          </span>
        </div>

        
      </section>
    </Card>
  );
}

export default HotelCard;
