import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

function Journey() {
  return (
    <div className="bg-primary min-h-screen md:py-0 py-6 flex items-center">
      <div className="mx-auto container px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="fade-right" data-aos-duration="2000"  className="text-white space-y-4">
          <p className="text-2xl font-medium">Ready to Start Your Journey?</p>
          <p>
            Join thousands of satisfied travelers who have discovered their
            perfect stays through Luxuria. Sign up today and get exclusive
            access to members-only deals.
          </p>
          <Button className="bg-white text-primary">
            Sign Up{" "}
            <span>
              <ChevronRight />
            </span>
          </Button>
        </div>

        <div data-aos="fade-left" data-aos-duration="3000" className="relative w-full h-full">
          <img src="/hotels/hotel1.webp" alt="" className="rounded-xl" />
          <div className="bg-white p-2 rounded-md w-fit absolute -bottom-4 -left-4 flex items-center justify-center gap-3">
            <div className="flex">
              <span className="bg-secondary p-4 rounded-full"></span>
              <span className="bg-secondary p-4 rounded-full border border-white -ml-3"></span>
              <span className="bg-secondary p-4 border border-white rounded-full -ml-3"></span>
            </div>
            <h1 className="text-xs space-y-1 flex flex-col">
              <span className="font-medium">1000+</span>
              <span className="text-gray">Happy Guests</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
