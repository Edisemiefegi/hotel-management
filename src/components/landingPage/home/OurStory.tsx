import TypewriterText from "@/components/base/TypewriterText";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function OurStory() {
  return (
    <div className="grid grid-cols-3 gap-12  ">
      <div className="sm:col-span-1 col-span-3 space-y-8" data-aos="fade-up" data-aos-duration="3000">
        <p className="font-semibold">Our Story</p>
        <img src="/illustrations/hotelBooking.svg" alt="" />
      </div>

      <div className=" sm:col-span-2 col-span-3 flex flex-col justify-between gap-2 h-full" data-aos="fade-up" data-aos-duration="2000">
      
        <TypewriterText text={"         At Luxuria, we believe that every journey deserves an extraordinary stay. Since 2009, we've been curating the world's finest hotels to   bring you unforgettable experiences."}/>
        <Button variant={"outline"} className="rounded-full w-fit pr-1">
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
