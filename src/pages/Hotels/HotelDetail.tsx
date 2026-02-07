import { Button } from "@/components/ui/button";
import { useAdminStore } from "@/store/adminStore";
import {
  ChevronLeft,
  Heart,
  MapPin,
  Share,
  Star,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

function HotelDetail() {
  const { id } = useParams();

  const { hotels } = useAdminStore();

  const hotel = hotels.find((e) => e.id === id);

  const images = [
    "/hotels/hotel1.webp",
    "/hotels/hotel2.webp",
    "/hotels/hotel1.webp",
    "/hotels/hotel2.webp",
  ];

  if (!hotel) {
    return <p className="text-center py-20">Hotel not found</p>;
  }

  return (
    <main className="container mx-auto px-8 py-20 space-y-10 min-h-screen">
      <section className="space-y-6">
        <Link
          to={`/hotels`}
          className="text-xs text-gray flex gap-1 items-center"
        >
          <ChevronLeft size={15} /> Back to Hotels
        </Link>

        <div className="flex justify-between sm:flex-row flex-col gap-2">
          <div>
            <Star fill="#FBBF23" width={15} stroke="0" />
            <h1 className="font-semibold text-2xl">{hotel?.name}</h1>
            <p className="text-gray text-xs flex items-center">
              <MapPin size={10} />
              {hotel.location} .{" "}
              <span className="text-blue-400">Show on map</span>{" "}
            </p>
          </div>

          <div className="space-x-4">
            <Button variant={"outline"} className="">
              <Share /> Share
            </Button>
            <Button variant={"outline"} className=" text-red-500">
              <Heart /> Save
            </Button>
          </div>
        </div>
      </section>

      <section
        className="
    grid grid-flow-col auto-cols-[80%] gap-4 overflow-x-auto
    md:auto-cols-auto md:grid-cols-4 md:grid-rows-2
    md:overflow-x-visible
  "
      >
        {images.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className={`
        h-48 w-full object-cover rounded-lg
        md:${index === 0 ? "col-span-2 row-span-2 h-full" : ""}
      `}
          />
        ))}
      </section>
    </main>
  );
}

export default HotelDetail;
