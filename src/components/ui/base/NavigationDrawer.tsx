import {
  BedDouble,
  Building2,
  CalendarCheck,
  LayoutDashboard,
  LogOut,
  Moon,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "../button";
import { Link, useLocation} from "react-router-dom";

const tabs = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
  { icon: Building2, label: "Hotels", path: "/admin/hotels" },
  { icon: BedDouble, label: "Rooms", path: "/admin/rooms" },
  { icon: CalendarCheck, label: "Bookings", path: "/admin/bookings" },
  { icon: Users, label: "Clients", path: "/admin/clients" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

interface Props {
  children: ReactNode;
}

function NavigationDrawer({ children }: Props) {
  const [rail, setRail] = useState(false);

  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const sidebarWidth = rail ? "md:w-18" : "md:w-60";
  const contentOffset = rail ? "md:ml-18" : "md:ml-60";

  const itemClasses =
    "flex md:flex-row flex-col items-center md:gap-4 font-light text-sm p-2 rounded-md  cursor-pointer";

  return (
    <main className="relative max-h-screen bg-gray-50">
      {/* Mobile top bar */}
      <header className="fixed  bg-white top-0 z-50 flex w-full items-center justify-between border px-3 py-4 md:hidden">
        <span className="flex items-center gap-1.5">
          <Building2 color="#7A462E" />
          <span className="font-serif">Luxuria</span>
        </span>

        <div className="flex gap-4">
          <Moon size={18} strokeWidth={1.5} />
          <LogOut size={18} strokeWidth={1.5} />
        </div>
      </header>
      {/* Sidebar */}
      <aside
        className={`fixed z-40 bottom-0 bg-white flex h-18 w-full flex-row justify-between border border-neutral-100 md:top-0 md:h-full md:flex-col ${sidebarWidth}`}
      >
        {/* Top section */}
        <div>
          {/* Brand + toggle (desktop only) */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between p-3">
              {!rail && (
                <span className="flex items-center gap-1.5">
                  <Building2 color="#7A462E" />
                  <span>Luxuria</span>
                </span>
              )}

              <Button variant={"ghost"} onClick={() => setRail(!rail)}>
                {rail ? <ChevronRight /> : <ChevronLeft />}
              </Button>
            </div>
            <hr />
          </div>

          {/* Navigation items */}
          <div className="flex group w-screen md:w-full justify-between p-3 md:flex-col md:gap-3">
            {tabs.map(({ icon: Icon, label, path }) => (
              <Link to={path}
                key={label}
                className={`${itemClasses} ${
                  isActive(path)
                    ? "md:bg-primary text-primary  md:text-white md:font-medium"
                    : "md:hover:bg-secondary md:hover:font-medium"
                }`}
              >
                <Icon size={20} strokeWidth={1.5} />
                {!rail && <span>{label}</span>}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom actions (desktop only) */}
        <div className="hidden md:block">
          <hr />
          <div className="p-3 space-y-1">
            <div className={itemClasses}>
              {!rail && <span>Theme</span>}
              <Moon size={20} strokeWidth={1.5} />
            </div>

            <div className={itemClasses}>
              {!rail && <span>Logout</span>}
              <LogOut size={20} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </aside>

      {/* main content */}
      <section className={`pt-20 md:pt-6 px-6 transition-all ${contentOffset}`}>
        {children}
      </section>
    </main>
  );
}

export default NavigationDrawer;
