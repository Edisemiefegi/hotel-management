import Card from "@/components/base/Card";
import { DatePicker } from "@/components/base/DatePicker";
import InputComponet from "@/components/base/InputComponet";
import { Button } from "@/components/ui/button";
import {  MapPin, Search, User } from "lucide-react";
import { useEffect, useState } from "react";

function Hero() {
  const texts = [
    "Luxury Escape",
    "Affordable Stays",
    "Luxury Hotels",
    "Dream Destinations",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen  min-h-screen shadow-2xl flex flex-col gap-6 py-20 sm:py-0 items-center justify-center">
      <img
        src="/hotel.jpeg"
        alt="Luxury hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      <div
        data-aos-duration="1000"
        data-aos="zoom-in"
        className="relative z-10 px-8 text-center  space-y-6"
      >
        <h1 className="text-white flex flex-col gap-2 text-3xl md:text-6xl font-bold leading-tight">
          <span> Find Your Perfect</span>
          <span
            key={index}
            className="text-primary inline-block transition-all duration-100"
          >
            {texts[index]}
          </span>
        </h1>

        <p className=" text-gray-300 md:text-lg max-w-xl mx-auto">
          Discover handpicked hotels that redefine comfort and elegance. Your
          extraordinary journey starts here.{" "}
        </p>
      </div>

    <div data-aos="fade-up"    data-aos-duration="1000"  className="px-8 z-10 " >
          <Card  className="  bg-white max-w-4xl space-y-4 w-full ">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3 w-full">
          <InputComponet
            placeholder="Where are you going?"
            prepend={<MapPin size={15} />}
            label="Location"
          />
          
           <DatePicker label="Check-in"/>
                      <DatePicker label="Check-out"/>

         
          <InputComponet
            placeholder="Guest"
            prepend={<User size={15} />}
            label="Guest"
          />
        </div>
        <Button className="w-full">
          <Search /> Search Hotels{" "}
        </Button>
      </Card>
    </div>
    </div>
  );
}

export default Hero;
