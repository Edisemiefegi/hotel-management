import { Badge, Clock3, Shield } from "lucide-react";
import FeatureCard from "../FeatureCard";

function Support() {
  const options = [
    {
      aos: "flip-left",
      duration: "1000",
      icon: Shield,
      title: "Best Price Guarantee",
      text: "Find a lower price? We'll match it and give you an extra 10% off.",
    },
    {
      aos: "flip-right",
      duration: "2000",
      icon: Clock3,
      title: "24/7 Support",
      text: "Our dedicated team is here to help you anytime, anywhere.",
    },
    {
      aos: "flip-left",
      duration: "3000",
      icon: Badge,
      title: "Curated Selection",
      text: "Every hotel is handpicked and verified by our travel experts.",
    },
  ];

  return (
    <div className="bg-muted/40 py-15">
      <div className="mx-auto  px-8 container items-center text-center grid sm:grid-cols-3 justify-between gap-6">
        {options.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
            data-aos={item.aos}
            data-aos-duration={item.duration}
          />
        ))}
      </div>
    </div>
  );
}

export default Support;
