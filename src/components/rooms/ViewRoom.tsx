import { Dot } from "lucide-react";

interface Props {
  room?: any;
}
function ViewRoom({ room }: Props) {
  return (
    <div className="space-y-4  ">
      <section className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">{room.name}</p>
          <p className="text-xs text-gray flex items-center ">{room.id}</p>
        </div>

        <span className="text-xs flex rounded-md p-1 items-center bg-green-50 text-green-700">
          <Dot /> {room.status}
        </span>
      </section>
      <p className="flex items-center text-xs gap-2">
        <span>{room.guests}</span> | <span>{room.bed}</span> |{" "}
        <span>{room.size}</span>
      </p>
      <p className="flex gap-1 ">
        <span>Price: </span>
        <span className="font-medium"> NGN{room.pricePerNight}</span>
      </p>
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
      </div>

      <div className="space-y-1">
        <p className="font-medium">Amenities</p>
        <div className="space-x-2">
          {" "}
          {room?.amenities.map((item: string, index: number) => (
            <span
              className="text-xs bg-gray-100 p-1 px-2 rounded-full"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewRoom;
