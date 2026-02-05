import HotelCard from "@/components/hotel/HotelCard";
import { Button } from "@/components/ui/button";
import { useAdminStore } from "@/store/adminStore";
import { ArrowRight } from "lucide-react";

function FeaturedHotels() {
 
  const { hotels } = useAdminStore();
  const visibleHotels = [...hotels, ...hotels, ...hotels].slice(0, 3);

  return (
    <div className="space-y-12 ">
      <div className="text-center flex flex-col items-center gap-4">
        <h1 className="font-semibold  md:text-4xl text-2xl">Featured Hotels</h1>
        <p className="text-gray max-w-2xl  ">
          Explore our most sought-after properties, chosen for their exceptional
          service, stunning locations, and unforgettable experiences.
        </p>
      </div>

      <section className="flex flex-col   items-center gap-8">
        <div className="flex flex-col sm:flex-row  w-full justify-center items-center  gap-6">
          {visibleHotels.map((hotel, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
              key={index}
              className={`transition-all duration-500  w-full sm:w-[45%] lg:w-[30%] ${
                index === 1 ? "sm:scale-110 " : "sm:scale-95 sm:opacity-80"
              }`}
            >
              <HotelCard hotel={hotel} menu={[]} />
            </div>
          ))}
        </div>
        <Button
          data-aos="fade"
          data-aos-delay="400"
          variant={"outline"}
          className="rounded-full w-fit pr-1"
        >
          See more hotels
          <span className="rounded-full bg-primary text-white flex items-center justify-center p-2 ">
            <ArrowRight />
          </span>
        </Button>
      </section>
    </div>
  );
}

export default FeaturedHotels;
