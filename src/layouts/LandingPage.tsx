import Footer from "@/components/landingPage/Footer";
import Nav from "@/components/landingPage/Nav";
import { Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col  ">
      <Nav />
      <div className="flex-1 overflow-y-auto ">
        <div className="">
          <Outlet />
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default LandingPage;
