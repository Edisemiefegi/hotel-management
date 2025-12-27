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
import { Button } from "../ui/button";
import { Link, useLocation } from "react-router-dom";
import { Bell } from "lucide-react";
import { ROUTES } from "@/route";
import { cn } from "@/lib/utils";

const tabs = [
  { icon: LayoutDashboard, label: "Dashboard", path: ROUTES.Dashboard },
  { icon: Building2, label: "Hotels", path: ROUTES.Hotels },
  { icon: BedDouble, label: "Rooms", path: ROUTES.Rooms },
  { icon: CalendarCheck, label: "Bookings", path: ROUTES.Bookings },
  { icon: Users, label: "Clients", path: ROUTES.Clients },
  { icon: Settings, label: "Settings", path: ROUTES.Settings },
];

interface Props {
  rail?: Boolean;
  setRail?: (val: boolean) => void;
}

function NavigationDrawer({ rail, setRail }: Props) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const sidebarWidth = rail ? "md:w-18" : "md:w-60";

  const itemClasses =
    "flex md:flex-row flex-col gap-y-1 items-center md:gap-4 font-light text-sm p-2 rounded-md  cursor-pointer";

  return (
    <nav className="">
      {/* Mobile top bar */}
      <header className="fixed  bg-white/70 backdrop-blur-md top-0 z-50 flex w-full items-center justify-between border px-3 py-4 md:hidden">
        <span className="flex items-center gap-1.5">
          <Building2 color="#7A462E" />
          <span className="font-serif">Luxuria</span>
        </span>

        <div className="flex gap-4">
          <Moon size={18} strokeWidth={1.5} />
          <Bell fill="black" size={18} strokeWidth={1.5} />
        </div>
      </header>
      {/* Sidebar */}
      <aside
        className={cn(
          sidebarWidth,
          "fixed z-40 bottom-0 bg-white flex h-18 w-full flex-row justify-between border border-neutral-100 md:top-0 md:h-full md:flex-col"
        )}
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

              <Button variant={"ghost"} onClick={() => setRail?.(!rail)}>
                {rail ? <ChevronRight /> : <ChevronLeft />}
              </Button>
            </div>
            <hr />
          </div>

          {/* Navigation items */}
          <div className="flex group w-screen md:w-full justify-between p-3 md:flex-col md:gap-3">
            {tabs.map(({ icon: Icon, label, path }) => (
              <Link
                to={path}
                key={label}
                className={cn(
                  itemClasses,
                  "transition-all duration-200",
                  isActive(path)
                    ? "md:bg-primary text-primary md:text-white font-medium"
                    : "md:hover:bg-secondary "
                )}
              >
                <Icon size={20} strokeWidth={1.5} />
                {!rail && (
                  <span className="text-[0.7rem] md:text-base">{label}</span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom actions (desktop only) */}
        <div className="hidden md:block">
          <hr />
          <div className="p-3 space-y-1">
            <div className={cn(itemClasses, "justify-between")}>
              {!rail && <span>Theme</span>}
              <Moon size={20} strokeWidth={1.5} />
            </div>

            <div className={cn(itemClasses, "justify-between")}>
              {!rail && <span>Notifications</span>}
              <Bell size={20} strokeWidth={1.5} />
            </div>

            <div className={cn(itemClasses, "justify-between")}>
              {!rail && <span>Logout</span>}
              <LogOut size={20} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </aside>
    </nav>
  );
}

export default NavigationDrawer;
