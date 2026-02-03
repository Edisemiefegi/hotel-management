import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function OurStory() {
  return (
    <div className="grid grid-cols-3 gap-12 mx-auto container px-8">
      <div className="col-span-1 space-y-8" data-aos="fade-up" data-aos-duration="3000">
        <p>Our Story</p>
        <img src="/illustrations/hotelBooking.svg" alt="" />
      </div>

      <div className="space-y-8 col-span-2" data-aos="fade-up" data-aos-duration="2000">
        <p className="md:text-2xl text-xl">
          At Luxuria, we believe that every journey deserves an extraordinary
          stay. Since 2009, we've been curating the world's finest hotels to
          bring you unforgettable experiences.
        </p>
        <Button variant={"outline"} className="rounded-full pr-1">
          Learn More{" "}
          <span className="rounded-full bg-primary text-white flex items-center justify-center p-2 ">
            <ArrowRight />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default OurStory;
