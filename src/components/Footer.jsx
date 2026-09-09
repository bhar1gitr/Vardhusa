import { useState } from "react";
import { Link } from "react-router-dom"; // Use React Router for internal navigation
import { Send, Loader2 } from "lucide-react";
import logo from "../assets/logo.png";
import BACKEND_URL from "../url";

const FOOTER_COLS = [
  {
    title: "Company",
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Business", path: "/businesses" },
      { name: "Projects", path: "/projects" },
      { name: "Careers", path: "/careers" },
      { name: "CSR", path: "/csr" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Policies",
    links: [
      { name: "Disclaimer", path: "/disclaimer" },
      { name: "Quality Policy", path: "/quality-policy" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "HSE Policies", path: "/hse-policies" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch(`${BACKEND_URL}/api/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage({ type: "success", text: "Subscribed successfully!" });
        setEmail("");
      } else {
        setStatusMessage({ type: "error", text: data.message || "Subscription failed." });
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      setStatusMessage({ type: "error", text: "Server error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#F3F3F3]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* CTA SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 py-14 md:py-16 border-b border-[#D8D8D8]">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />
              <span className="text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#777777]">
                Let's Build Together
              </span>
            </div>

            <h2 className="font-sans font-extrabold text-[30px] sm:text-[34px] md:text-[40px] lg:text-[42px] leading-[1.12] text-[#202020]">
              Have a Project in <span className="text-[#D6A900]">Mind?</span>
              <br className="hidden sm:block" /> Let's Build It Together.
            </h2>

            <p className="text-[#666666] mt-4 text-[14px] md:text-[15px] leading-[1.75] max-w-[600px]">
              From design and engineering to execution and handover, we're with you every step.
            </p>
          </div>

          {/* Email Form */}
          <div className="w-full lg:w-[460px]">
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex items-center w-full min-h-[58px] bg-[#202020] p-1.5 pl-5 border border-[#303030]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Write your email here"
                required
                className="flex-1 min-w-0 bg-transparent text-white placeholder-[#909090] text-[13.5px] sm:text-[14px] outline-none pr-4"
              />

              <button
                type="submit"
                disabled={loading}
                className="h-[46px] flex items-center justify-center gap-2 bg-[#F6C62E] text-[#202020] px-5 sm:px-6 text-[13px] sm:text-[14px] font-extrabold hover:bg-white transition-all duration-300 shrink-0 disabled:opacity-50"
              >
                {loading ? <Loader2 size={15} className="animate-spin" /> : "Submit"}
                {!loading && <Send size={15} strokeWidth={2.2} />}
              </button>
            </form>

            {statusMessage && (
              <p className={`mt-2 text-xs font-medium ${statusMessage.type === "success" ? "text-green-600" : "text-red-600"}`}>
                {statusMessage.text}
              </p>
            )}
          </div>
        </div>

        {/* MIDDLE FOOTER */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 py-12 md:py-14">
          <div className="max-w-[520px]">
            <img
              src={logo}
              alt="Vardhusa Logo"
              className="h-[38px] sm:h-[42px] w-auto object-contain mb-6"
            />
            <p className="text-[#666666] text-[13.5px] sm:text-[14px] leading-[1.85] max-w-[500px]">
              Vardhusa Pvt. Ltd. delivers complete plumbing, firefighting, and MEP solutions for residential, commercial, and infrastructure projects. We help build safe, efficient, and reliable spaces—from planning to project completion.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-10 sm:gap-16 lg:gap-20 lg:justify-self-end lg:min-w-[380px]">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h4 className="relative w-fit font-sans font-extrabold text-[15px] md:text-[16px] text-[#202020] mb-7">
                  {col.title}
                  <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#F6C62E]" />
                </h4>

                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="inline-block text-[#666666] hover:text-[#D6A900] hover:translate-x-1 text-[13.5px] md:text-[14px] font-medium transition-all duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-[#D8D8D8] py-6">
          <p className="text-center text-[#777777] text-[12.5px] md:text-[13px] font-medium">
            Copyright © 2026 Vardhusa - An EPC Company
          </p>
        </div>
      </div>
    </footer>
  );
}