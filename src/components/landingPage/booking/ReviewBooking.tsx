import Card from "@/components/base/Card";
import { Button } from "@/components/ui/button";
import { Clock3 } from "lucide-react";

interface Props {
  onBack?: () => void;
  onNext?: () => void;
}

function ReviewBooking({ onBack, onNext }: Props) {
  return (
    <Card className=" space-y-6">
      <h1 className="text-lg font-medium">Review Your Booking</h1>

      <section className="space-y-4">
        <p className="font-medium ">Guest Details</p>
        <div className="grid grid-cols-2 gap-3">
          <p className="text-sm ">
            <label className="text-gray">Name:</label> John Doe
          </p>
          <p className="text-xs">
            <label className="text-gray">Email:</label> john@gmail.com
          </p>
          <p className="text-xs">
            <label className="text-gray">Phone:</label> +234 132 122 122
          </p>
        </div>
      </section>
      <hr />

      <section className="space-y-4">
        <p className="font-medium ">Stay Details</p>
        <div className="grid grid-cols-2 gap-3">
          <p className="text-xs text-gray inline-grid  ">
            Check-in:{" "}
            <span className="text-black text-sm">12th april 2026 </span>{" "}
            <span>After 3:00Pm</span>
          </p>
          <p className="text-xs text-gray inline-grid  ">
            Check-out: <span className="text-black text-sm">John Doe</span>{" "}
            <span>After 3:00Pm</span>
          </p>
        </div>
      </section>
      <hr />

      <div className="bg-secondary/30 p-3 flex gap-3 rounded-lg ">
        <span className="text-primary">
          {" "}
          <Clock3 size={15} />
        </span>
        <p className="text-xs inline-grid">
          <label>Free Cancellation</label>
          <label className="text-gray">
            Cancel up to 24 hours before check-in for a full refund
          </label>
        </p>
      </div>

      <div className="flex justify-between">
        {" "}
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext}> Book Now . 20k</Button>
      </div>
    </Card>
  );
}

export default ReviewBooking;
