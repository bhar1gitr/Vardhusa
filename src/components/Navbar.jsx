import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PlayCircle, Menu, X } from "lucide-react";

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
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_rgba(11,14,26,0.08)]" : ""
      }`}
    >
      <div className="container-wrap flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27 3C21 5 15 9 12 14c3-1 6-1 9 1-4 0-7 1.5-9.5 4.5C9 22 7 25.5 6 27c-1-4 .5-8 3-11-3 .5-6 2-8 4 1-5 4.5-9 9-11.5C14 5.5 20 3 27 3Z"
              fill="#0B0E1A"
            />
          </svg>
          <div className="leading-tight">
            <p className="font-display font-extrabold text-[19px] tracking-tight text-ink">CHAZOWN</p>
            <p className="text-[9px] tracking-[0.25em] text-ink/50 -mt-0.5">AN EPC COMPANY</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-mist rounded-full p-1">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`px-5 py-2.5 rounded-full text-[14.5px] font-medium transition-colors ${
                isActive(link.to) ? "pill-nav-active" : "text-ink/70 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-2 border border-ink/15 rounded-full px-5 py-2.5 text-[14.5px] font-medium text-ink hover:border-ink/40 transition-colors">
            <PlayCircle size={17} strokeWidth={1.8} />
            Gallery
          </button>
          <button className="bg-navy-800 text-white rounded-full px-6 py-2.5 text-[14.5px] font-semibold hover:bg-navy-700 transition-colors">
            Contact
          </button>
        </div>

        <button className="lg:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/10 px-6 pb-6 pt-2 flex flex-col gap-1 bg-white">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-left px-4 py-3 rounded-xl text-[15px] font-medium ${
                isActive(link.to) ? "pill-nav-active" : "text-ink/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-3">
            <button className="flex-1 flex items-center justify-center gap-2 border border-ink/15 rounded-full px-5 py-2.5 text-[14.5px] font-medium">
              <PlayCircle size={17} /> Gallery
            </button>
            <button className="flex-1 bg-navy-800 text-white rounded-full px-6 py-2.5 text-[14.5px] font-semibold">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
