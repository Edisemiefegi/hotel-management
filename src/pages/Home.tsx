import Hero from "@/components/landingPage/home/Hero";

function Home() {
  return (
    <div className=" flex flex-col gap-4 ">
      <Hero/>
      
        <div  className="w-96 h-96 bg-primary"></div>
        <div className="w-96 h-96 bg-secondary"></div>
    </div>
  );
}

export default Home;
