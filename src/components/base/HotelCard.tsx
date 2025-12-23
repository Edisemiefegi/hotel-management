import { LocateIcon } from "lucide-react";
import Card from "./Card";



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
      <div className="p-2">
        <h2 className="text-lg font-medium">{hotel?.name}</h2>
        <p className="flex  text-xs ">
          <LocateIcon size={15} /> {hotel?.location}
        </p>
      </div>
      <div></div>
    </Card>
  );
}

export default HotelCard;
