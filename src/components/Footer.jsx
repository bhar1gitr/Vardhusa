import { useState } from "react";
import { Send } from "lucide-react";
import logo from "../assets/logo.png";

const FOOTER_COLS = [
  {
    title: "Home",
    links: ["About", "Business", "Projects", "Careers", "CSR", "Contact"],
  },
  {
    title: "Security",
    links: ["Disclaimer", "Quality Policy", "Privacy Policy", "HSE Policies"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#F5F5F5] pt-14 pb-6">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* CTA Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-[#DDDDDD]">
          
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                Let's Build Together
              </span>
            </div>

            <h2 className="font-sans font-extrabold text-[32px] md:text-[40px] leading-[1.15] text-[#202020]">
              Ready To Work{" "}
              <span className="text-[#D6A900]">
                With Us?
              </span>
            </h2>

            <p className="text-[#666666] mt-3 text-[14px] md:text-[15px] leading-relaxed">
              Experience top-notch customer service and let us guide you on
              your journey.
            </p>
          </div>

          {/* Email Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="
              flex
              items-center
              bg-[#202020]
              p-2
              pl-5
              w-full
              lg:w-[450px]
              shrink-0
            "
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Write your email here"
              className="
                bg-transparent
                flex-1
                outline-none
                text-white
                placeholder-[#9A9A9A]
                text-[14px]
                pr-4
                min-w-0
              "
            />

            <button
              type="submit"
              className="
                flex
                items-center
                gap-2
                bg-[#F6C62E]
                text-[#202020]
                px-6
                py-3
                text-[14px]
                font-bold
                hover:bg-white
                transition-all
                duration-300
                shrink-0
              "
            >
              Submit
              <Send size={15} strokeWidth={2.2} />
            </button>
          </form>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 py-12">
          
          {/* Company Info */}
          <div>
            <img
              src={logo}
              alt="Vardhusa Logo"
              className="h-[34px] w-auto object-contain mb-5"
            />

            <p className="text-[#666666] text-[14px] leading-[1.8] max-w-[400px]">
              Vardhusa Pvt Ltd is dedicated to providing comprehensive
              Mechanical, Plumbing, and Firefighting services to residential,
              commercial, and infrastructure sectors.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-16 md:gap-24 lg:pr-8">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                
                <h4 className="font-sans font-bold text-[16px] text-[#202020] mb-4 relative w-fit">
                  {col.title}

                  <span className="absolute -bottom-2 left-0 w-7 h-[2px] bg-[#F6C62E]" />
                </h4>

                <ul className="flex flex-col gap-2.5 mt-7">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="
                          text-[#666666]
                          hover:text-[#D6A900]
                          text-[14px]
                          font-medium
                          transition-colors
                          duration-300
                        "
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#DDDDDD] pt-6">
          <p className="text-center text-[#8A8A8A] text-[13px] font-medium">
            Copyright © 2024 Vardhusa - An EPC Company
          </p>
        </div>
      </div>
    </footer>
  );
}