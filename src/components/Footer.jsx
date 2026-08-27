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
    <footer className="bg-[#F8F9FA] min-h-[80vh] flex flex-col justify-between pt-12 pb-6">
      <div className="container mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-between">
        
        {/* CTA Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-gray-200">
          <div className="max-w-xl">
            <h2 className="font-sans font-extrabold text-[32px] md:text-[40px] leading-[1.2] text-[#0B0E1A]">
              Ready To Work <span className="text-[#00AEEF]">With Us ?</span>
            </h2>
            <p className="text-gray-500 mt-1 text-[14px] md:text-[15px]">
              Experience top-notch customer service and let us guide you on your journey
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-[#0B0E1A] rounded-none p-2 pl-5 w-full lg:w-[440px] shrink-0"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Write your email here"
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-400 text-[14px] pr-4"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0098d1] text-white rounded-none px-6 py-3 text-[14px] font-semibold transition-colors shrink-0"
            >
              Submit
              <Send size={15} />
            </button>
          </form>
        </div>

        {/* Middle Section: Logo, Description & Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 py-8">
          <div>
            <img 
              src={logo} 
              alt="Vardhusa Logo" 
              className="h-[32px] w-auto object-contain mb-4" 
            />
            <p className="text-gray-500 text-[14px] leading-[1.7] max-w-[380px]">
              Vardhusa Pvt Ltd is dedicated to providing comprehensive Mechanical, Plumbing, and
              Firefighting services to residential, commercial, and infrastructure sectors.
            </p>
          </div>

          <div className="flex gap-16 md:gap-24 lg:pr-8">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h4 className="font-sans font-bold text-[16px] text-[#0B0E1A] mb-4">{col.title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-[#00AEEF] text-[14px] font-medium transition-colors"
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
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-gray-400 text-[13px] font-medium">
            Copyright © 2024 Vardhusa - An EPC Company
          </p>
        </div>

      </div>
    </footer>
  );
}