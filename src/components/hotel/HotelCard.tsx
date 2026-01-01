import {  MapPin, Star } from "lucide-react";
import Card from "../base/Card";
import { Progress } from "../ui/progress";
import DropDown from "../base/DropDown";

interface Props {
  hotel?: Record<any, any>;
}

function HotelCard({ hotel }: Props) {
const menu = [
  {
    label: 'Edit',
  },
  {
    label: 'View'
  },
  {
    label: 'Delete'
  }
]

  return (
    <Card className="shadow-none border hover:shadow-lg transition-all duration-300 flex h-80 min-h-fit w-full flex-col overflow-hidden group">
      <div className="h-2/5 w-full ">
        <img
          src={hotel?.image}
          className="object-cover overflow-hidden w-full h-full shrink-0 group-hover:scale-105 transition-all duration-300"
          alt=""
        />
      </div>

      <section className="p-4 space-y-5 ">
        <div className=" flex justify-between ">
          <div>
            <h2 className="text-lg font-medium">{hotel?.name}</h2>
            <p className="text-gray text-xs  ">{hotel?.id}</p>
          </div>
        
          <DropDown menu={menu}/>
        </div>

        <div className="flex justify-between">
          <p className="flex text-gray text-xs items-center ">
            <MapPin stroke="#1132D5" size={13} /> {hotel?.location}
          </p>
          <span className="text-sm items-center flex">
            <Star fill="#FBBF23" width={15} stroke="0" />
            <span className="font-medium">
              {hotel?.rating}{" "}
              <span className="text-xs text-gray "> (12 reviews)</span>
            </span>
          </span>
        </div>
        <hr />

        <div className="space-y-1">
          <Progress value={33} />
          <span className="text-xs"> 33% full</span>
        </div>
      </section>
    </Card>
  );
}

export default HotelCard;
