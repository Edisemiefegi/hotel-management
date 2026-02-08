import Card from "@/components/base/Card";
import { Button } from "@/components/ui/button";
import { CircleCheck, MessageCircle } from "lucide-react";

function BookingCreated() {
  return (
    <Card className="space-y-6 ">
      <span className="text-green-600 w-fit  mx-auto bg-green-100 flex justify-center items-center p-3 rounded-full">
        <CircleCheck />
      </span>
      <p className="space-y-2  text-center">
        <label className="space-y-1">
          <p className="text-xl font-medium">Booking Created!</p>
          <p className="text-sm text-gray">Your booking reference: B2995</p>
        </label>
        <p className="text-sm text-gray">
          Please confirm availability with the hotel via WhatsApp to complete
          your reservation.
        </p>
      </p>{" "}
      <div className="bg-secondary/40 rounded-md space-y-6 p-4">
        <span className="flex gap-3">
          <img
            src="/hotels/hotel1.webp"
            alt=""
            className="w-12 h-12 rounded-md"
          />
          <label className="text-xs text-gray">
            <h2 className="text-sm text-black">The Grand Palazzo</h2>
            <p>Venice, Italy</p>
            <p>Deluxe Room</p>
          </label>
        </span>

        <hr />

        <span className="flex justify-between">
          <label className="text-sm">
            <p className="text-gray text-xs">Check-in</p>
            <p>Mon, Feb 9, 2026</p>
          </label>
          <label className="text-sm">
            <p className="text-gray text-xs">Check-out</p>
            <p>Wed, Feb 11, 2026</p>
          </label>
        </span>
        <hr />

        <span className="flex justify-between font-medium">
          <p>Total</p>
          <p>N20,000</p>
        </span>

        <div className="flex flex-col items-center gap-3">
          <Button className="w-full">
            <MessageCircle /> Confirm Availability on WhatsApp
          </Button>
          <span className="space-x-3 flex">
            <Button variant={"outline"}>Return Home</Button>
            <Button variant={"outline"}>Browse More Hotels</Button>
          </span>
        </div>
      </div>
    </Card>
  );
}

export default BookingCreated;
