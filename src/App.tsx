import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./layouts/Admin";
import Dashboard from "./pages/Admin/Dashboard";
import Hotels from "./pages/Admin/Hotels";
import Rooms from "./pages/Admin/Rooms";
import Bookings from "./pages/Admin/Bookings";
import Clients from "./pages/Admin/Clients";
import Settings from "./pages/Admin/Settings";
import Auth from "./pages/Auth";
import PrivateRoutes from "./utils/PrivateRoute";
import LandingPage from "./layouts/LandingPage";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import HotelList from "./pages/Hotels/HotelList";
import HotelDetail from "./pages/Hotels/HotelDetail";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Admin />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/hotels" element={<Hotels />} />
          <Route path="/admin/rooms" element={<Rooms />} />
          <Route path="/admin/bookings" element={<Bookings />} />
          <Route path="/admin/clients" element={<Clients />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Route>
      </Route>
      <Route element={<LandingPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route>
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/hotels/:id" element={<HotelDetail />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/authentication" element={<Auth />} />
    </Routes>
  );
}

export default App;
