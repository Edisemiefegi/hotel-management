import FeatureCard from "@/components/landingPage/FeatureCard";
import { MapPin, Star, Users } from "lucide-react";

function About() {
  const options = [
    {
      icon: Star,
      title: "50K+",
      text: "Happy Guests",
    },
    {
      aos: "flip-right",
      duration: "2000",
      icon: MapPin,
      title: "100+",
      text: "Destinations",
    },
    {
      aos: "flip-left",
      duration: "3000",
      icon: Users,
      title: "2.5K+",
      text: "Hotels",
    },
  ];

  const team = [
    {
      img: "/people/photo2.jpeg",
      name: "Alexandra Chen",
      title: "CEO & Founder",
    },
    {
      img: "/people/photo1.jpeg",
      name: "Marcus Williams",
      title: "Head of Operations",
    },
    {
      img: "/people/photo3.jpeg",
      name: "Sofia Rodriguez",
      title: "Chief Experience Officer",
    },
  ];
  return (
    <main className=" ">
      {/* luxury travel */}
      <section className="bg-muted/40 h-screen flex flex-col justify-center items-center text-center ">
        <div className="mx-auto md:space-y-30 space-y-20 container px-8 flex flex-col items-center justify-center">
          <div className="space-y-2">
            <h1
              data-aos="zoom-in-down"
              data-aos-duration="500"
              className="font-bold md:text-4xl text-3xl"
            >
              Redefining Luxury Travel
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="800"
              className="text-gray max-w-2xl"
            >
              At Luxuria, we believe that every journey deserves an
              extraordinary stay. Since 2009, we've been curating the world's
              finest hotels to bring you unforgettable experiences.
            </p>
          </div>

          <div className="grid w-full grid-cols-3 items-center gap-8">
            {options.map((item, index) => (
              <div data-aos="zoom-in" data-aos-duration="1000">
                <FeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* our story */}
      <section className="bg-secondary min-h-screen">
        <div className="container mx-auto px-8 grid md:grid-cols-2 items-center py-20  grid-cols-1 gap-12">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="space-y-6"
          >
            <h1 className="font-bold text-3xl md:text-4xl">Our Story</h1>
            <p className="text-gray flex flex-col gap-4 text-justify ">
              <span>
                Luxuria was born from a simple idea: that finding the perfect
                hotel should be as delightful as the stay itself. Our founders,
                seasoned travelers and hospitality enthusiasts, noticed a gap in
                the market for a platform that truly understands luxury.
              </span>
              <span>
                Today, we partner with over 2,500 handpicked hotels across 100+
                destinations. Each property is personally vetted by our team of
                travel experts to ensure it meets our exacting standards of
                excellence.
              </span>
              From boutique hideaways to iconic landmarks, every hotel in our
              collection offers something unique—whether it's a Michelin-starred
              restaurant, a world-class spa, or simply the most breathtaking
              view you've ever seen.
            </p>
          </div>{" "}
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="animate-pulse"
          >
            <img src="/illustrations/story.svg" alt="" />
          </div>
        </div>
      </section>

      {/* the team */}
      <section className="mx-auto container text-center space-y-12 px-8 pt-20">
        <div>
          <h1 className="font-bold md:text-4xl text-3xl">Meet Our Team</h1>
          <p className="text-gray ">
            The passionate people behind Luxuria who make every booking
            special.{" "}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 items-center text-center">
          {team.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-center">
                <img
                  src={item.img}
                  alt=""
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <p className="md:text-xl text-lg font-medium">{item.name}</p>
              <p className="text-xs text-gray font-light">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
