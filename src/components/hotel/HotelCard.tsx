import { Bed, BedDouble, MapPin, Sparkles, Star } from "lucide-react";
import Card from "../base/Card";

interface Props {
  hotel?: Record<any, any>;
}

function HotelCard({ hotel }: Props) {
  return (
    <Card className="flex h-70 w-full flex-col overflow-hidden gap-3">
      <div className="h-2/5 w-full ">
        <img
          src={hotel?.image}
          className="object-cover overflow-hidden w-full h-full"
          alt=""
        />
      </div>

      <section className="p-2 space-y-5">
        <div className=" flex justify-between ">
          <div>
            <h2 className="text-lg font-medium">{hotel?.name}</h2>
            <p className="flex text-gray text-xs items-center ">
              <MapPin size={13} /> {hotel?.location}
            </p>
          </div>
          <span className="text-sm font-medium flex">
            <Star fill="yellow" stroke="0" />
            <span>{hotel?.rating}</span>
          </span>
        </div>

        <hr />

           <div className=" flex justify-between ">
          <div>
            <h2 className=" font-semibold">N{hotel?.pricePerNight}</h2>
            <p className="flex font-light text-gray text-xs items-center ">
        per night
            </p>
          </div>
          <span className="text-sm text-gray gap-2 flex">
            <span className="flex gap-1"><BedDouble size={18}/> 3</span>
           <span className="flex gap-1"> <Sparkles  size={18}/> 5</span>
          </span>
        </div>
      </section>
    </Card>
  );
}

export default HotelCard;
