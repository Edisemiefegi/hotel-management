import { useState } from "react";
import InputComponet from "@/components/base/InputComponet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";

function Auth() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const isSignup = mode === "signup";

  return (
    <main className="grid relative md:grid-cols-2 h-screen">
      {/* Left side image */}
      <div className="relative w-full h-full">
        <img
          src="/hotels/room.jpeg"
          alt="Hotel Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 p-8 text-white space-y-2 z-20">
          <p className="flex items-center font-bold gap-2">
            <Building2 /> LuxStay Management
          </p>
          <p className="text-sm">
            Streamlining hospitality operations with elegance and efficiency
          </p>
        </div>
      </div>

      <div className="p-8 md:text-gray text-white md:relative absolute inset-0 flex flex-col justify-center items-center">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h1 className="text-2xl text-black font-bold">
              {isSignup ? "Create Account" : "Sign In"}
            </h1>
            <p className=" text-sm mt-1">
              {isSignup
                ? "Fill in your details to create an account."
                : "Please enter your credentials to access the dashboard."}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-3 w-full">
            {isSignup && <InputComponet className="!text-white md:!text-gray-700" label="Full Name" />}
            <InputComponet className="!text-white md:!text-gray-700" label="Email" />
            <InputComponet className="!text-white md:!text-gray-700" label="Password" />
          </form>

          {/* Action button & toggle */}
          <div className="space-y-2">
            <Button className="w-full flex justify-center items-center gap-2">
              {isSignup ? "Sign Up" : "Sign In"} <ArrowRight />
            </Button>
            <p className="text-sm  text-end">
              {isSignup
                ? "Already have an account?"
                : "Don't have an account yet?"}{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={() => setMode(isSignup ? "signin" : "signup")}
              >
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>

          {/* Separator */}
          <div className="flex items-center gap-3 ">
            <hr className="flex-1 border-gray-300" />
            <p className="text-xs">Need help?</p>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Footer */}
          <div className="text-center text-xs  space-y-1 font-light">
            <p>
              <span>Contact Support</span> <span className="mx-1">•</span>{" "}
              <span>Privacy Policy</span>
            </p>
            <p>@2026 Hotel Management Systems. All rights reserved.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Auth;
