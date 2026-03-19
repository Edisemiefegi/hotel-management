import { Dot, MapPin, Phone, Star } from "lucide-react";
import SummaryCard from "../base/SummaryCard";
import { cn } from "@/lib/utils";
import { hotelAmenities } from "./AmenitySelector";
import AddonInfo from "../addons/AddonInfo";

interface Props {
  hotel?: any;
}

function ViewHotel({ hotel }: Props) {
  console.log(hotel, "shjsj");

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
            "p-0.5 w-fit rounded-full text-xs flex items-center  border",
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
        <span>+234 {hotel.whatsapp}</span>
      </p>
      <div className="p-3  bg-gray-50  gap-3 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full overflow-x-auto rounded-md">
        {hotel?.images.map((img: string, index: number) => (
          <img
            loading="lazy"
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
        <div className="space-x-2 flex flex-wrap">
          {" "}
          {hotel?.amenities.map((value: string, index: any) => {
            const amenity = hotelAmenities.find((a) => a.value === value);

            if (!amenity) return null;

            const Icon = amenity.icon;

            return (
              <p
                key={index}
                className="bg-secondary px-3 py-2 w-fit flex items-center gap-2 rounded-md text-sm font-light"
              >
                <span className="text-primary">
                  <Icon size={15} />
                </span>
                {amenity.label}
              </p>
            );
          })}
        </div>
      </div>

      <div className="space-y-1">
        <p className="font-medium">Rooms ({hotel.rooms.length})</p>
        {hotel.rooms.length == 0 ? (
          <p className="text-gray">No room added yet</p>
        ) : (
          <div className="space-y-2">
            {" "}
            {hotel.rooms.map((item: any, index: number) => (
              <SummaryCard
                key={index}
                status={item.status}
                number={item.pricePerNight}
                title={item.type}
                text={
                  item.bed + " " + "bed" + "." + item.capacity + " " + "guest"
                }
                image={item.imageUrl}
              />
            ))}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <p className="font-medium">Add-ons ({hotel.addons.length})</p>
        <div className="space-y-2">
          {hotel.addons?.map((item: any, index: number) => (
            <AddonInfo
              key={index}
              price={item.price}
              addonName={item.addonName}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewHotel;
