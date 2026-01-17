import { Dot, MapPin, Phone, Star } from "lucide-react";
import InfoCard from "../base/InfoCard";
import { cn } from "@/lib/utils";
import type { Key } from "react";

interface Props {
  hotel?: any;
}


function ViewHotel({ hotel }: Props) {
  console.log(hotel, 'hoteeses');

  return (
    <div className="space-y-4  ">
      <section className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">{hotel.name}</p>
          <p className="text-xs text-gray flex items-center ">
            <MapPin size={12} /> <span>{hotel.location}</span>
          </p>
        </div>

        <span
          className={cn(
            hotel.status == "Operational" &&
              "bg-green-50 text-green-500 border-green-500",
            hotel.status == "Renovation" &&
              "bg-yellow-50 text-yellow-500 border-yellow-500",
            hotel.status == "Closed" && "bg-red-50 text-red-600 border-red-500",
            "p-0.5 w-fit rounded-full text-xs flex items-center  border"
          )}
        >
          <Dot /> {hotel.status}
        </span>
      </section>
      <p className="flex items-center gap-0.5">
        <Star fill="#FBBF23" width={15} stroke="0" />
        <span className="font-semibold">{hotel.rating}</span>{" "}
        <span className="text-xs">(24 verified reviews)</span>
      </p>
      <p className="flex text-sm">
        <Phone size={15} />
        <span>+234 {hotel.phoneNumber}</span>
      </p>
      <div className="p-3  bg-gray-50  gap-3 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full rounded-md">
        {hotel?.images.map((img: string, index: Key | null) => (
          <img
            key={index}
            src={img}
            alt={hotel.name}
            className="rounded-md sm:w-40 sm:h-40 w-32 h-32 object-cover"
          />
        ))}
      </div>

      <div className="space-y-1">
        <p className="font-medium">Description</p>
        <p className="text-gray text-sm">{hotel.description}</p>
      </div>

      <div className="space-y-1">
        <p className="font-medium">Amenities</p>
        <div className="space-x-2">
          {" "}
          {hotel?.amenities.map((item: string, index: number) => (
            <span
              className="text-xs bg-gray-100 p-1 px-2 rounded-full"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <p className="font-medium">Rooms (3)</p>
        <div className="space-y-2">
          {" "}
          {hotel?.rooms.map((item: any, index: number) => (
            <InfoCard
              key={index}
              status={item.status}
              number={item.pricePerNight}
              title={item.name}
              text={item.bed + "." + item.size}
            />
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <p className="font-medium">Add-ons (4)</p>
        <div className="space-y-2">
          {" "}
          {/* {hotel?.rooms.map((item: any, index: number) => (
            <InfoCard
              key={index}
              number={item.pricePerNight}
              title={item.name}
              text={item.bed + "." + item.size}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default ViewHotel;
