import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PlayCircle, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/businesses" },
  { label: "Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
  { label: "CSR", to: "/csr" },
  { label: "Gallery", to: "/gallery", icon: true },
];

export default function Navbar() {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const isActive = (to) => {
    if (to === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(to);
  };

  return (
    <header
      className={`
        sticky
        top-0
        z-50
        bg-white
        transition-all
        duration-300

        ${
          scrolled
            ? "shadow-[0_4px_20px_rgba(0,0,0,0.07)]"
            : "border-b border-[#E9E9E9]"
        }
      `}
    >
      <div
        className="
          max-w-[1440px]
          mx-auto

          px-4
          sm:px-6
          lg:px-12

          h-[88px]

          flex
          items-center
          justify-between
        "
      >
        {/* =========================================
            LOGO
        ========================================== */}

        <Link
          to="/"
          className="
            flex
            items-center
            shrink-0
          "
        >
          <img
            src={logo}
            alt="Vardhusa Logo"
            className="
              h-[46px]
              sm:h-[50px]
              md:h-[54px]
              lg:h-[60px]

              w-auto
              object-contain
            "
          />
        </Link>

        {/* =========================================
            DESKTOP MIDDLE MENU
        ========================================== */}

        <nav
          className="
            hidden
            lg:flex
            items-center
            justify-center

            gap-0
            xl:gap-1

            mx-auto
          "
        >
          {LINKS.map((link) => {
            const active = isActive(link.to);

            return (
              <Link
                key={link.label}
                to={link.to}
                className={`
                  relative

                  flex
                  items-center
                  gap-1.5

                  px-3
                  xl:px-4

                  py-3

                  text-[13.5px]
                  xl:text-[14px]

                  font-semibold

                  transition-colors
                  duration-300

                  ${
                    active
                      ? "text-[#202020]"
                      : "text-[#626262] hover:text-[#202020]"
                  }
                `}
              >
                {/* Gallery icon */}
                {link.icon && (
                  <PlayCircle
                    size={17}
                    strokeWidth={2}
                    className="
                      text-[#D6A900]
                      shrink-0
                    "
                  />
                )}

                {link.label}

                {/* Active underline */}
                {active && (
                  <span
                    className="
                      absolute

                      bottom-[2px]
                      left-1/2
                      -translate-x-1/2

                      w-[26px]
                      h-[3px]

                      bg-[#F6C62E]
                    "
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* =========================================
            RIGHT CONTACT BUTTON
        ========================================== */}

        <div className="hidden lg:flex items-center shrink-0">
          <Link
            to="/contact"
            className={`
              border

              px-6
              xl:px-7

              py-2.5

              text-[14px]
              font-bold

              transition-all
              duration-300

              ${
                pathname.startsWith("/contact")
                  ? `
                      bg-[#202020]
                      border-[#202020]
                      text-white
                    `
                  : `
                      bg-[#F6C62E]
                      border-[#F6C62E]
                      text-[#202020]

                      hover:bg-[#202020]
                      hover:border-[#202020]
                      hover:text-white
                    `
              }
            `}
          >
            Contact
          </Link>
        </div>

        {/* =========================================
            MOBILE MENU BUTTON
        ========================================== */}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="
            lg:hidden

            flex
            items-center
            justify-center

            w-11
            h-11

            text-[#202020]

            hover:bg-[#FFF8D9]

            transition-colors
            duration-300
          "
        >
          {open ? (
            <X size={27} strokeWidth={2} />
          ) : (
            <Menu size={27} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* =========================================
          MOBILE MENU
      ========================================== */}

      {open && (
        <div
          className="
            lg:hidden

            absolute
            top-full
            left-0

            w-full

            bg-white

            border-t
            border-[#EAEAEA]

            shadow-[0_12px_30px_rgba(0,0,0,0.08)]

            px-4
            sm:px-6

            py-5
          "
        >
          {/* Mobile Links */}
          <div className="flex flex-col">
            {LINKS.map((link) => {
              const active = isActive(link.to);

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`
                    relative

                    flex
                    items-center
                    gap-2

                    px-4
                    py-3.5

                    text-[15px]
                    font-semibold

                    border-b
                    border-[#EEEEEE]

                    transition-colors
                    duration-300

                    ${
                      active
                        ? "text-[#202020] bg-[#FFFBEF]"
                        : "text-[#666666] hover:text-[#202020] hover:bg-[#FAFAFA]"
                    }
                  `}
                >
                  {/* Active left line */}
                  {active && (
                    <span
                      className="
                        absolute
                        left-0
                        top-1/2
                        -translate-y-1/2

                        w-[3px]
                        h-6

                        bg-[#F6C62E]
                      "
                    />
                  )}

                  {/* Gallery Icon */}
                  {link.icon && (
                    <PlayCircle
                      size={18}
                      strokeWidth={2}
                      className="text-[#D6A900]"
                    />
                  )}

                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Contact */}
          <div className="mt-5">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={`
                block

                w-full

                text-center

                px-6
                py-3.5

                text-[14px]
                font-bold

                transition-all
                duration-300

                ${
                  pathname.startsWith("/contact")
                    ? "bg-[#202020] text-white"
                    : "bg-[#F6C62E] text-[#202020]"
                }
              `}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}