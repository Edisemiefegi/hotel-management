import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
      <Route path="/about" element={<About />} />
      <Route path="/authentication" element={<Auth />} />
    </Routes>
  );
}

export default App;
