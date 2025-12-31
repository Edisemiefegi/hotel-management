import Table from "../base/Table";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import DropDown from "@/components/base/DropDown";
import type { MenuItem } from "@/types";
import { Dot, MapPin, Star } from "lucide-react";
import { HOTELS } from "@/constants/hotels";

interface Props {
  menu: MenuItem[];
}

function HotelTable({ menu }: Props) {
  const hotels = HOTELS;

  const headers = [
    {
      title: "Hotel",
      field: "hotel",
      render: (row: any) => (
        <div className="flex gap-3">
          <img
            src="/hotels/hotel1.webp"
            alt=""
            className="w-12 h-12 rounded-lg"
          />
          <p className="font-medium flex flex-col">
            {row.name}{" "}
            <span className="text-xs text-gray font-normal">{row.id}</span>
          </p>
        </div>
      ),
    },
    {
      title: "Location",
      field: "location",
      render: (row: any) => (
        <div className="flex gap-1 items-center text-gray-700">
          <MapPin size={15} />
          <span> {row.location}</span>
        </div>
      ),
    },

    {
      title: "Status",
      field: "status",
      render: (row: any) => (
        <span
          className={cn(
            row.status == "Operational" &&
              "bg-green-50 text-green-500 border-green-500",
            row.status == "Renovation" &&
              "bg-yellow-50 text-yellow-500 border-yellow-500",
            row.status == "Closed" && "bg-red-50 text-red-600 border-red-500",
            "py-1 px-1.5 w-fit rounded-full text-xs flex items-center  border"
          )}
        >
          <Dot size={15} /> {row.status}
        </span>
      ),
    },

    {
      title: "Rating",
      field: "rating",
      render: (row: any) => (
        <div className="flex items-center gap-1">
          <Star stroke="0" fill="#FBBF23" size={15} />
          <p>
            {" "}
            {row.rating} <span className="text-gray text-sm">(12)</span>
          </p>
        </div>
      ),
    },
    {
      title: "Occupancy",
      field: "occupancy",
      render: () => (
        <div className="space-y-1">
          <Progress value={33} />
          <span className="text-xs"> 33% full</span>
        </div>
      ),
    },
    {
      title: "Action",
      field: "action",
      render: () => <DropDown menu={menu} />,
    },
  ];

  return (
    <Table
      uniqueId="id"
      headers={headers}
      data={[...hotels]}
      emptySlot={<p className="p-4 text-center">No Hotel found</p>}
    ></Table>
  );
}

export default HotelTable;
