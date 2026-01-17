import InputComponet from "@/components/base/InputComponet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Eye } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Auth() {
  const { mode, setMode } = useAuthStore();
  const { signup, signin } = useAuth();
  const isSignup = mode === "signup";
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    fullname: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fields = [
    {
      label: "Email",
      placeholder: "example@gmail.com",
      name: "email",
    },
    {
      label: "Full Name",
      placeholder: "e.g John doe",
      name: "fullname",
      show: isSignup,
    },
    {
      label: "Password",
      placeholder: "........",
      name: "password",
      append: <Eye />,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.email || !form.password || (isSignup && !form.fullname)) {
      setError("All fields are required");
      return;
    }

    try {
      setIsLoading(true);
      if (isSignup) {
        await signup(form);
        navigate("/");
      } else {
        const loggedInUser = await signin({
          email: form.email,
          password: form.password,
        });

        if (loggedInUser.status === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      }

      setForm({
        email: "",
        password: "",
        fullname: "",
      });
    } catch (error) {
      alert("Auth failed");

      console.error("Auth failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="grid relative md:grid-cols-2 h-screen">
      <div className="relative w-full h-full">
        <img
          src="/hotels/room.jpeg"
          alt="Hotel Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute md:block hidden bottom-0 p-8 text-white space-y-2 z-20">
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
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {fields.map((field) => {
              if (field.show === false) return null;

              return (
                <InputComponet
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  append={field.append}
                  disabled={isLoading}
                  error={error}
                  className=" md:placeholder:text-gray placeholder:text-white"
                />
              );
            })}
          {/* submit button */}
          <div className="space-y-2">
            <Button
            type="submit"
              disabled={isLoading}
             
              className="w-full flex justify-center items-center gap-2"
            >
              {isLoading ? (
                "Please wait..."
              ) : (
                <span className="flex items-center gap-2">
                  {isSignup ? "Sign Up" : "Sign In"} <ArrowRight />
                </span>
              )}
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

          </form>


          {/* need help */}
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
