import AddOnForm from "@/components/landingPage/booking/AddOnForm";
import BookingCreated from "@/components/landingPage/booking/BookingCreated";
import BookingLayout from "@/components/landingPage/booking/BookingLayout";
import GuestInfo from "@/components/landingPage/booking/GuestInfo";
import ReviewBooking from "@/components/landingPage/booking/ReviewBooking";
import Stepper from "@/components/landingPage/booking/Stepper";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Booking() {
  //   const hotelId = searchParams.get("hotelId");
  const STEP_KEY = "booking_step";
  const [step, setStep] = useState<number>(() => {
    const savedStep = localStorage.getItem(STEP_KEY);
    return savedStep ? Number(savedStep) : 1;
  });

  useEffect(() => {
    localStorage.setItem(STEP_KEY, step.toString());
  }, [step]);
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="container  mx-auto px-8 py-20 space-y-10 min-h-screen">
      <Link
        to={`/hotels`}
        className="text-xs text-gray flex gap-1 items-center"
      >
        <ChevronLeft size={15} /> Back to Hotels
      </Link>
      <Stepper currentStep={step} />

      {step !== 4 && (
        <BookingLayout>
          {step === 1 && <AddOnForm onNext={nextStep} />}
          {step === 2 && <GuestInfo onNext={nextStep} onBack={prevStep} />}
          {step === 3 && <ReviewBooking onBack={prevStep} onNext={nextStep} />}
        </BookingLayout>
      )}
    <div className="flex justify-center">
        {step === 4 && <BookingCreated />}
    </div>
    </div>
  );
}

export default Booking;
