import Card from "@/components/base/Card";
import { DatePicker } from "@/components/base/DatePicker";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  hotel?: any;
}
function BookingLayout({ children, hotel }: Props) {
  const navigate = useNavigate();

  const handleBook = () => {
    const roomId = "r1";
    const checkIn = "2/4/2026";
    const checkOut = "4/4/2026";

    navigate(
      `/hotels/${hotel.id}/booking?roomId=${roomId}&checkIn=${checkIn}&checkOut=${checkOut}`,
    );
  };

  return (
    <section className="grid grid-cols-3 gap-6 relative">
      <div className="lg:col-span-2 col-span-3 flex flex-col gap-8">
        {children}
      </div>

      {/* book */}
      <Card className="space-y-4 sticky top-0 h-fit col-span-3 lg:col-span-1">
        <p className="text-sm text-gray">
          {" "}
          <span className="text-lg font-medium text-black">Price</span> / night
        </p>

        <div className="flex gap-2">
          <DatePicker label="Check-in" />
          <DatePicker label="Check-out" />
        </div>

        <div className="bg-secondary/40 p-3 rounded-lg ">
          <p className="text-gray text-sm">Selected room</p>
          <p>Honeymoon Suite</p>
        </div>

        <div className="space-y-2">
          <p className="flex justify-between text-sm  font-light">
            <span>N30,000 * 2 nights </span> N60,000
          </p>
          <p className="flex justify-between text-sm  font-light">
            <span>service charge </span> N2,000
          </p>
          <p className="flex justify-between mt-3   font-medium">
            <span>Total</span> N62,000
          </p>
        </div>

        <hr />
        <Button className="w-full" onClick={handleBook}>
          Book Now
        </Button>
      </Card>
    </section>
  );
}

export default BookingLayout;
