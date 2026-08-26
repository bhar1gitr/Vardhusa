import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PlayCircle, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Businesses", to: "/businesses" },
  { label: "Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
  { label: "CSR", to: "/csr" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const isActive = (to) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_rgba(11,14,26,0.08)]" : ""
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-5">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img 
            src={logo} 
            alt="Vardhusa Logo" 
            className="h-[28px] md:h-[32px] w-auto object-contain" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F5F6F8] rounded-full p-1.5">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`px-6 py-2.5 rounded-full text-[14.5px] font-semibold transition-colors ${
                isActive(link.to) 
                  ? "bg-[#00AEEF] text-white shadow-sm" /* Updated to Light Blue */
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2.5 text-[14.5px] font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
            <PlayCircle size={18} strokeWidth={2} className="text-gray-600" />
            Gallery
          </button>
          <button className="bg-[#00AEEF] text-white rounded-full px-7 py-2.5 text-[14.5px] font-semibold hover:bg-[#0098d1] transition-colors">
            {/* Updated to Light Blue */}
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-gray-800" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 px-6 pb-6 pt-2 flex flex-col gap-2 bg-white shadow-lg absolute w-full left-0">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-left px-4 py-3 rounded-xl text-[15px] font-semibold ${
                isActive(link.to) ? "bg-[#00AEEF] text-white" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-full px-5 py-3 text-[14.5px] font-semibold">
              <PlayCircle size={18} /> Gallery
            </button>
            <button className="w-full bg-[#00AEEF] text-white rounded-full px-6 py-3 text-[14.5px] font-semibold">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}