import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Users,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  MapPin,
  Clock,
  X,
  Upload,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import BACKEND_URL from "../url";

import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const VALUES = [
  {
    icon: Users,
    title: "Ownership Culture",
    desc: "Every individual working here is treated as an owner of the company, with the responsibility and trust that comes with it.",
  },
  {
    icon: TrendingUp,
    title: "Room to Grow",
    desc: "We invest in people early, pairing new engineers with 15+ year veterans on live projects.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "100 million+ safe hours and counting — safety isn't a policy here, it's how we work.",
  },
  {
    icon: Sparkles,
    title: "Work-Life Balance",
    desc: "We prioritize the well-being of our people, both on site and off it.",
  },
];

const ROLES = [
  {
    title: "Site Engineer - Plumbing & Fire Protection",
    dept: "Engineering",
    location: "Gurugram, India",
    type: "Full-time",
  },
  {
    title: "Site Supervisor - Plumbing & Fire Protection",
    dept: "Site Operations",
    location: "Gurugram, India",
    type: "Full-time",
  },
  {
    title: "Mechanical Project Manager - Plumbing & Fire Protection",
    dept: "Projects",
    location: "Gurugram, India",
    type: "Full-time",
  },
  {
    title: "Billing Engineer",
    dept: "Billing",
    location: "Gurugram, India",
    type: "Full-time",
  },
  {
    title: "HR Manager",
    dept: "Human Resources",
    location: "Mumbai, India",
    type: "Full-time",
  },
];

export default function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverNote: "",
  });
  const [resumeFile, setResumeFile] = useState(null);

  const handleOpenModal = (roleTitle = "General Application") => {
    setSelectedRole(roleTitle);
    setIsModalOpen(true);
    setSuccess(false);
    setErrorMessage("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRole("");
    setFormData({ fullName: "", email: "", phone: "", experience: "", coverNote: "" });
    setResumeFile(null);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      // Use FormData to support file upload along with text inputs
      const data = new FormData();
      data.append("role", selectedRole);
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("experience", formData.experience);
      data.append("coverNote", formData.coverNote);
      if (resumeFile) {
        data.append("resume", resumeFile);
      }

      // Local URL endpoint for backend development
      const response = await fetch(`${BACKEND_URL}/api/careers/apply`, {
        method: "POST",
        body: data, // Note: Do not set Content-Type header manually when using FormData
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);
      } else {
        setErrorMessage(result.message || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback message for local testing if backend endpoint is not yet active
      setErrorMessage("Could not connect to server. Make sure your local backend is running on port 5000.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career"
        highlight="With Us"
        subtitle="We're growing across Maharashtra and looking for engineers who want ownership over real work, from day one."
        img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Why People Stay */}
      <section className="bg-white py-20 md:py-18">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />
              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                Life at Vardhusa
              </span>
            </div>

            <h2 className="font-sans font-extrabold text-[30px] md:text-[42px] leading-[1.1] text-[#202020] max-w-xl mb-14">
              Why People <span className="text-[#D6A900]">Stay</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={index * 0.06}>
                  <div className="relative group overflow-hidden bg-[#F5F5F5] border border-[#E7E7E7] p-7 h-full min-h-[270px] flex flex-col hover:bg-white hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
                    <span className="w-12 h-12 flex items-center justify-center bg-[#FFF7D6] text-[#D6A900] mb-8 group-hover:bg-[#F6C62E] group-hover:text-[#202020] transition-all duration-300">
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <h3 className="font-sans font-bold text-[18px] text-[#202020] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[#666666] text-[14px] leading-relaxed">
                      {value.desc}
                    </p>
                    <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#F6C62E] group-hover:w-full transition-all duration-500" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-[#F5F5F5] py-10 md:py-18">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-[3px] bg-[#F6C62E]" />
                  <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                    Join Our Team
                  </span>
                </div>
                <h2 className="font-sans font-extrabold text-[30px] md:text-[42px] leading-[1.1] text-[#202020]">
                  Open <span className="text-[#D6A900]">Positions</span>
                </h2>
              </div>
              <p className="text-[#666666] text-[14px] md:text-[15px] font-semibold">
                {ROLES.length} roles open right now
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {ROLES.map((role, index) => (
              <Reveal key={role.title} delay={index * 0.05}>
                <div className="group relative overflow-hidden bg-white border border-[#E5E5E5] p-6 md:px-7 md:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-300">
                  <div>
                    <span className="text-[#C99D00] text-[12px] md:text-[13px] font-bold tracking-[0.08em] uppercase">
                      {role.dept}
                    </span>
                    <h3 className="font-sans font-bold text-[18px] md:text-[19px] text-[#202020] mt-1.5">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3 text-[#777777] text-[13px] md:text-[13.5px] font-medium">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-[#D6A900]" />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-[#D6A900]" />
                        {role.type}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenModal(role.title)}
                    className="group/button flex items-center justify-center gap-3 bg-[#F6C62E] text-[#202020] pl-6 pr-2 py-2 text-[14px] font-bold hover:bg-[#202020] hover:text-white transition-all duration-300 shrink-0 w-fit"
                  >
                    Apply Now
                    <span className="w-9 h-9 flex items-center justify-center bg-white/70 text-[#202020] group-hover/button:bg-[#F6C62E] transition-all duration-300">
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover/button:translate-x-1" />
                    </span>
                  </button>
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F6C62E] group-hover:w-full transition-all duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resume CTA */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden bg-[#202020] px-7 sm:px-10 lg:px-14 py-12 md:py-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-center lg:text-left"
          >
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[#F6C62E]" />

            <div>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <span className="w-8 h-[3px] bg-[#F6C62E]" />
                <span className="text-[#F6C62E] text-[12px] uppercase tracking-[0.16em] font-bold">
                  Future Opportunities
                </span>
              </div>
              <h2 className="font-sans font-extrabold text-white text-[27px] sm:text-[34px] leading-[1.15]">
                Don't see the <span className="text-[#F6C62E]">right role?</span>
              </h2>
              <p className="text-[#C8C8C8] text-[15px] mt-3 max-w-md leading-relaxed">
                Send us your resume anyway — we're always looking for good engineers.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOpenModal("General Application")}
              className="group mx-auto lg:mx-0 flex items-center gap-3 bg-[#F6C62E] text-[#202020] pl-6 pr-2 py-2 text-[14px] md:text-[14.5px] font-bold hover:bg-white transition-all duration-300 shrink-0"
            >
              Send Your Resume
              <span className="w-9 h-9 flex items-center justify-center bg-[#202020] text-white group-hover:bg-[#F6C62E] group-hover:text-[#202020] transition-all duration-300">
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Application Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <div className="bg-[#202020] px-6 py-5 flex items-center justify-between border-b-4 border-[#F6C62E]">
                <div>
                  <span className="text-[#F6C62E] text-xs font-bold uppercase tracking-wider">Job Application</span>
                  <h3 className="text-white text-xl font-extrabold">{selectedRole}</h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                {success ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 className="text-2xl font-bold text-[#202020]">Application Submitted!</h4>
                    <p className="text-[#666666] max-w-sm mx-auto text-sm">
                      Thank you for applying. Our engineering team will review your credentials and get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="mt-4 bg-[#202020] text-white px-6 py-2.5 font-bold text-sm hover:bg-[#F6C62E] hover:text-[#202020] transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-3 text-red-700 text-xs font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-[#202020] uppercase mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full bg-[#F5F5F5] border border-[#E5E5E5] px-4 py-3 text-sm outline-none focus:border-[#F6C62E] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#202020] uppercase mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full bg-[#F5F5F5] border border-[#E5E5E5] px-4 py-3 text-sm outline-none focus:border-[#F6C62E] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#202020] uppercase mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#F5F5F5] border border-[#E5E5E5] px-4 py-3 text-sm outline-none focus:border-[#F6C62E] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#202020] uppercase mb-1">Years of Experience</label>
                      <input
                        type="text"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        placeholder="e.g. 3 Years / Fresher"
                        className="w-full bg-[#F5F5F5] border border-[#E5E5E5] px-4 py-3 text-sm outline-none focus:border-[#F6C62E] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#202020] uppercase mb-1">Upload Resume (PDF / DOC)</label>
                      <div className="flex items-center justify-between bg-[#F5F5F5] border border-dashed border-[#D8D8D8] px-4 py-3">
                        <span className="text-xs text-[#777777] truncate max-w-[280px]">
                          {resumeFile ? resumeFile.name : "Choose file..."}
                        </span>
                        <label className="cursor-pointer bg-[#202020] text-white text-xs font-bold px-3 py-1.5 hover:bg-[#F6C62E] hover:text-[#202020] transition-colors flex items-center gap-1.5">
                          <Upload size={13} />
                          Browse
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) => setResumeFile(e.target.files[0])}
                          />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#202020] uppercase mb-1">Cover Note or Message</label>
                      <textarea
                        rows={3}
                        value={formData.coverNote}
                        onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                        placeholder="Briefly tell us about your expertise..."
                        className="w-full bg-[#F5F5F5] border border-[#E5E5E5] px-4 py-3 text-sm outline-none focus:border-[#F6C62E] transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full h-12 bg-[#F6C62E] text-[#202020] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#202020] hover:text-white transition-all duration-300 disabled:opacity-50"
                      >
                        {submitting && <Loader2 size={16} className="animate-spin" />}
                        {submitting ? "Submitting Application..." : "Submit Application"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}