import Footer from "@/components/landingPage/Footer";
import Nav from "@/components/landingPage/Nav";
import { Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col  ">
      <Nav />
      <div className="flex-1 overflow-y-auto py-20">
        <div className="px-8 container mx-auto">
          <Outlet />
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default LandingPage;
