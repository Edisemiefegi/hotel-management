import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="space-y-8  px-8 container mx-auto  ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <section className="space-y-2">
          <h1 className="font-medium text-lg flex gap-1 ">
            <span className="text-primary">
              {" "}
              <Building2 />
            </span>
            <span>Luxuria</span>
          </h1>
          <p className="text-xs text-gray">
            Experience world-class hospitality at handpicked luxury hotels. Your
            perfect stay awaits.
          </p>
        </section>

        {/* links */}
        <section className="space-y-2">
          <h1 className="font-medium text-lg  ">Quick Links</h1>
          <p className="text-xs flex flex-col gap-3 text-gray">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Hotels</Link>
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Contact</Link>
          </p>
        </section>

        {/* support */}
        <section className="space-y-2">
          <h1 className="font-medium text-lg  ">Support</h1>
          <p className="text-xs flex flex-col gap-3 text-gray">
            <Link to={"/"}>Help Center</Link>
            <Link to={"/"}>Terms of Service</Link>
            <Link to={"/"}>FAQ</Link>
            <Link to={"/"}>Privacy Policy</Link>
          </p>
        </section>

        {/* contact */}
        <section className="space-y-2">
          <h1 className="font-medium text-lg  ">Contact Us</h1>
          <div className="space-y-3">
            <p className="text-xs flex  gap-3 text-gray">
              <span>
                {" "}
                <MapPin size={15} />
              </span>
              <span>123 Luxury Avenue, Manhattan, NY 10001</span>
            </p>

            <p className="text-xs flex  gap-3 text-gray">
              <span>
                {" "}
                <Phone size={15} />
              </span>
              <span>+1 (555) 123-4567</span>
            </p>

            <p className="text-xs flex  gap-3 text-gray">
              <span>
                {" "}
                <Mail size={15} />
              </span>
              <span>hello@luxuria.com</span>
            </p>
          </div>
        </section>
      </div>{" "}
        <hr  />
        <div className=" text-gray text-xs flex justify-between">
          <p>© 2026 Luxuria Hotels. All rights reserved.</p>

            <p className=" flex  gap-3">
            <Link to={"/"}>Terms</Link>
            <Link to={"/"}>Privacy</Link>
            <Link to={"/"}>Cookies</Link>
          </p>
        </div>
    </footer>
  );
}

export default Footer;
