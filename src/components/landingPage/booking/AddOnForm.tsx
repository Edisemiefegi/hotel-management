import { Car, ForkKnife, Sparkle, Timer } from "lucide-react";
import AddOnCard from "./AddOnCard";
import { Button } from "@/components/ui/button";

function Addons({ onNext }: { onNext: () => void }) {
  const addOns = [
    {
      id: "transfer",
      title: "Airport Transfer",
      description: "Private water taxi from airport",
      price: 95,
      icon: Car,
    },
    {
      id: "breakfast",
      title: "Breakfast Buffet",
      description: "Italian breakfast daily",
      price: 45,
      icon: ForkKnife,
    },
    {
      id: "spa",
      title: "Spa Package",
      description: "Venetian spa experience",
      price: 150,
      icon: Sparkle,
    },
    {
      id: "late-checkout",
      title: "Late Checkout",
      description: "Checkout extended to 3 PM",
      price: 60,
      icon: Timer,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Enhance Your Stay</h2>
        <p className="text-gray font-light mt-1">
          Add extras to make your trip even more special
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addOns.map((item) => (
          <AddOnCard key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-end">
        <Button onClick={onNext}>Continue to Guest Details</Button>
      </div>
    </div>
  );
}

export default Addons;
