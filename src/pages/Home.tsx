import Faq from "@/components/landingPage/home/faq";
import FeaturedHotels from "@/components/landingPage/home/FeaturedHotels";
import Hero from "@/components/landingPage/home/Hero";
import Journey from "@/components/landingPage/home/Journey";
import OurStory from "@/components/landingPage/home/OurStory";
import Support from "@/components/landingPage/home/Support";

function Home() {
  return (
    <div className="space-y-20 ">
      <Hero />
      <div className=" mx-auto  px-8 container space-y-20 ">
        <OurStory />
        <FeaturedHotels />
      </div>
      <div>
        <Support />
        <Journey />
      </div>
      <div className="mx-auto  px-8 container ">
        <Faq />
      </div>
    </div>
  );
}

export default Home;
