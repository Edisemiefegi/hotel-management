import FeaturedHotels from "@/components/landingPage/home/FeaturedHotels";
import Hero from "@/components/landingPage/home/Hero";
import OurStory from "@/components/landingPage/home/OurStory";

function Home() {
  return (
    <div className=" flex flex-col gap-12 ">
      <Hero/>
      <OurStory/>
      <FeaturedHotels/>
    </div>
  );
}

export default Home;
