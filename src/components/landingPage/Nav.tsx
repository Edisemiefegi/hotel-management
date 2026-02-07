import { useState } from "react";
import { Building2, User, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { NavLink, Link } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/hotels" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-primary font-semibold text-lg"
        >
          <Building2 className="w-6 h-6" />
          Luxuria
        </Link>

        {/* Desktop  */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-gray-700 hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button>
            <Link to={"/authentication"} className="flex gap-2 items-center">
              {" "}
              <User className="w-4 h-4" />
              Login
            </Link>
          </Button>
        </div>

        <Button
          variant={"ghost"}
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-8 py-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? "text-primary" : "text-gray-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Button variant="outline" className="mt-2 flex gap-2">
              <Link to={"/authentication"} className="flex gap-2 items-center">
                {" "}
                <User className="w-4 h-4" />
                Login
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
