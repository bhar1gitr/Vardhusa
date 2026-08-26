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
    <footer className="bg-[#F8F9FA] pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* CTA Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-gray-200">
          <div className="max-w-xl">
            <h2 className="font-sans font-extrabold text-[36px] md:text-[46px] leading-[1.2] text-[#0B0E1A]">
              Ready To Work <span className="text-[#00AEEF]">With Us ?</span>
            </h2>
            <p className="text-gray-500 mt-2 text-[15px] md:text-[16px]">
              Experience top-notch customer service and let us guide you on your journey
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-[#0B0E1A] rounded-full p-2 pl-6 w-full lg:w-[480px] shrink-0"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Write your email here"
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-400 text-[15px] pr-4"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0098d1] text-white rounded-full px-7 py-3.5 text-[15px] font-semibold transition-colors shrink-0"
            >
              Submit
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 pt-16 pb-20">
          
          {/* Logo & Description */}
          <div>
            <img 
              src={logo} 
              alt="Vardhusa Logo" 
              className="h-[36px] w-auto object-contain mb-6" 
            />
            <p className="text-gray-500 text-[15px] leading-[1.8] max-w-[400px]">
              Vardhusa Pvt Ltd is dedicated to providing comprehensive Mechanical, Plumbing, and
              Firefighting services to residential, commercial, and infrastructure sectors.
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex gap-20 md:gap-32 lg:pr-8">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h4 className="font-sans font-bold text-[17px] text-[#0B0E1A] mb-6">{col.title}</h4>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-[#00AEEF] text-[15px] font-medium transition-colors"
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
        <p className="text-center text-gray-400 text-[14px] font-medium pt-8">
          Copyright © 2024 Vardhusa - An EPC Company
        </p>
      </div>
    </footer>
  );
}