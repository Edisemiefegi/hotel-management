import { Dot, MapPin, Phone, Star } from "lucide-react";
import InfoCard from "../base/InfoCard";

interface Props {
  hotel?: any;
}
function ViewHotel({ hotel }: Props) {
  return (
    <div className="space-y-4  ">
      <section className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">{hotel.name}</p>
          <p className="text-xs text-gray flex items-center ">
            <MapPin size={12} /> <span>{hotel.location}</span>
          </p>
        </div>

        <span className="text-xs flex rounded-md p-1 items-center bg-green-50 text-green-700">
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
      <div className="p-3 h-50 bg-gray-50 w-full rounded-md">
        <img src={hotel.image} alt="" className="rounded-md w-fit h-full" />
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
          {hotel?.rooms.map((item: any, index: number) => (
            <InfoCard
              key={index}
              number={item.pricePerNight}
              title={item.name}
              text={item.bed + "." + item.size}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewHotel;
