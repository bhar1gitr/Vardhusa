import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  Clock3,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send enquiry.");
      }

      setStatus("success");
      setStatusMessage("Your enquiry has been sent successfully.");

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("error");
      setStatusMessage("Unable to send enquiry. Please try again.");
    }
  };

  return (
    <>
      {/* ========================================
          PAGE HERO
      ======================================== */}

      <PageHero
        eyebrow="Contact Us"
        title="Let's Build Something"
        highlight="Exceptional"
        subtitle="Connect with our team to discuss your project requirements, engineering challenges and upcoming opportunities."
        img="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85"
      />

      {/* ========================================
          INTRO
      ======================================== */}

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal>
            <div className="max-w-[760px] text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[3px] bg-[#F6C62E]" />

                <span
                  className="
                    text-[12px]
                    md:text-[13px]
                    uppercase
                    tracking-[0.16em]
                    font-bold
                    text-[#858585]
                  "
                >
                  Start a Conversation
                </span>
              </div>

              <h2
                className="
                  font-sans
                  font-extrabold
                  text-[32px]
                  md:text-[42px]
                  leading-[1.1]
                  text-[#202020]
                "
              >
                Your Next Project Starts{" "}
                <span className="text-[#D6A900]">
                  Here
                </span>
              </h2>

              <p
                className="
                  text-[#666666]
                  text-[15px]
                  leading-[1.8]
                  max-w-[650px]
                  mt-4
                "
              >
                Tell us what you are planning. Our team will understand
                your requirements and help identify the right engineering
                and execution approach.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================
          CONTACT DETAILS + FORM
      ======================================== */}

      <section className="bg-[#F5F5F5] py-20 md:py-28">
        <div
          className="
            max-w-[1440px]
            mx-auto

            px-4
            sm:px-6
            lg:px-12

            grid
            grid-cols-1
            lg:grid-cols-[0.8fr_1.2fr]

            gap-8
            lg:gap-10

            items-start
          "
        >
          {/* LEFT SIDE */}

          <div>
            <Reveal>
              <div
                className="
                  bg-[#202020]

                  p-7
                  sm:p-9
                  lg:p-10
                "
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-[3px] bg-[#F6C62E]" />

                  <span
                    className="
                      text-[#F6C62E]
                      text-[12px]
                      uppercase
                      tracking-[0.16em]
                      font-bold
                    "
                  >
                    Reach Vardhusa
                  </span>
                </div>

                <h2
                  className="
                    text-white
                    font-extrabold

                    text-[30px]
                    md:text-[38px]

                    leading-[1.1]
                  "
                >
                  Let's Discuss Your{" "}
                  <span className="text-[#F6C62E]">
                    Requirements
                  </span>
                </h2>

                <p
                  className="
                    text-[#BEBEBE]
                    text-[14px]
                    leading-[1.8]
                    mt-5
                  "
                >
                  Whether it is a new project, expansion, MEP package or
                  integrated EPC requirement, our team is ready to connect.
                </p>

                <div className="mt-9 space-y-px bg-white/10">
                  <ContactRow
                    icon={Mail}
                    label="Email Us"
                    value="info@vardhusa.com"
                  />

                  <ContactRow
                    icon={Phone}
                    label="Call Us"
                    value="+91 00000 00000"
                  />

                  <ContactRow
                    icon={MapPin}
                    label="Office"
                    value="India"
                  />

                  <ContactRow
                    icon={Clock3}
                    label="Working Hours"
                    value="Monday - Saturday"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className="
                  bg-[#F6C62E]

                  p-7
                  md:p-8

                  flex
                  items-start
                  gap-4
                "
              >
                <Building2
                  size={31}
                  strokeWidth={1.8}
                  className="text-[#202020] shrink-0"
                />

                <div>
                  <span
                    className="
                      text-[#202020]/60
                      text-[11px]
                      uppercase
                      tracking-[0.15em]
                      font-bold
                    "
                  >
                    Integrated EPC Support
                  </span>

                  <h3
                    className="
                      text-[#202020]
                      font-extrabold
                      text-[19px]
                      mt-2
                    "
                  >
                    One team from planning to handover.
                  </h3>

                  <p
                    className="
                      text-[#333333]
                      text-[13.5px]
                      leading-[1.7]
                      mt-2
                    "
                  >
                    Coordinated engineering, execution and project support
                    through a single accountable partner.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ========================================
              FORM
          ======================================== */}

          <Reveal delay={0.08}>
            <div
              className="
                bg-white
                border
                border-[#E2E2E2]

                p-6
                sm:p-8
                md:p-10
              "
            >
              <div className="mb-9">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-[3px] bg-[#F6C62E]" />

                  <span
                    className="
                      text-[#858585]
                      text-[11px]
                      md:text-[12px]
                      uppercase
                      tracking-[0.15em]
                      font-bold
                    "
                  >
                    Project Enquiry
                  </span>
                </div>

                <h3
                  className="
                    text-[#202020]
                    font-extrabold

                    text-[26px]
                    md:text-[32px]

                    leading-[1.15]
                  "
                >
                  Tell Us About Your{" "}
                  <span className="text-[#D6A900]">
                    Project
                  </span>
                </h3>
              </div>

              {/* Status Message */}

              {status === "success" && (
                <div
                  className="
                    mb-6
                    p-4
                    bg-[#F3FFF5]
                    border
                    border-[#B9E9C0]
                    flex
                    items-start
                    gap-3
                  "
                >
                  <CheckCircle2
                    size={20}
                    className="text-green-600 shrink-0 mt-0.5"
                  />

                  <p className="text-[#355D3A] text-[14px] font-medium">
                    {statusMessage}
                  </p>
                </div>
              )}

              {status === "error" && (
                <div
                  className="
                    mb-6
                    p-4
                    bg-[#FFF5F5]
                    border
                    border-[#F0C4C4]
                    flex
                    items-start
                    gap-3
                  "
                >
                  <AlertCircle
                    size={20}
                    className="text-red-600 shrink-0 mt-0.5"
                  />

                  <p className="text-[#7B3636] text-[14px] font-medium">
                    {statusMessage}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-5
                  "
                >
                  <FormInput
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />

                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />

                  <FormInput
                    label="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91"
                  />

                  <FormInput
                    label="Company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                </div>

                {/* Project Type */}

                <div className="mt-5">
                  <label className="block text-[#333333] text-[13px] font-bold mb-2">
                    Project Requirement
                  </label>

                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="
                      w-full
                      h-[54px]
                      px-4

                      bg-[#F7F7F7]

                      border
                      border-[#DDDDDD]

                      outline-none

                      text-[#555555]
                      text-[14px]

                      focus:bg-white
                      focus:border-[#F6C62E]

                      transition-all
                      duration-300
                    "
                  >
                    <option value="">
                      Select project requirement
                    </option>

                    <option value="Turnkey Solution">
                      Turnkey Solution
                    </option>

                    <option value="Fire Detection & Protection">
                      Fire Detection & Protection
                    </option>

                    <option value="Plumbing & Sanitation">
                      Plumbing & Sanitation
                    </option>

                    <option value="HVAC System">
                      HVAC System
                    </option>

                    <option value="Electrical System">
                      Electrical System
                    </option>

                    <option value="BMS">
                      BMS
                    </option>

                    <option value="Design & Engineering">
                      Design & Engineering
                    </option>

                    <option value="Facility Management">
                      Facility Management
                    </option>
                  </select>
                </div>

                {/* Message */}

                <div className="mt-5">
                  <label className="block text-[#333333] text-[13px] font-bold mb-2">
                    Project Details
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Briefly describe your project requirement..."
                    className="
                      w-full

                      px-4
                      py-4

                      bg-[#F7F7F7]

                      border
                      border-[#DDDDDD]

                      outline-none
                      resize-none

                      text-[#444444]
                      placeholder:text-[#AAAAAA]

                      text-[14px]

                      focus:bg-white
                      focus:border-[#F6C62E]

                      transition-all
                      duration-300
                    "
                  />
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="
                    group

                    mt-6

                    flex
                    items-center
                    gap-3

                    bg-[#F6C62E]
                    text-[#202020]

                    pl-7
                    pr-2
                    py-2

                    text-[14px]
                    font-extrabold

                    hover:bg-[#202020]
                    hover:text-white

                    disabled:opacity-60
                    disabled:cursor-not-allowed

                    transition-all
                    duration-300
                  "
                >
                  {status === "loading" ? (
                    <>
                      Sending...

                      <span
                        className="
                          w-10
                          h-10

                          flex
                          items-center
                          justify-center

                          bg-white/70
                          text-[#202020]
                        "
                      >
                        <Loader2
                          size={17}
                          className="animate-spin"
                        />
                      </span>
                    </>
                  ) : (
                    <>
                      Send Enquiry

                      <span
                        className="
                          w-10
                          h-10

                          flex
                          items-center
                          justify-center

                          bg-white/70
                          text-[#202020]

                          group-hover:bg-[#F6C62E]

                          transition-all
                          duration-300
                        "
                      >
                        <Send size={16} strokeWidth={2} />
                      </span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, label, value }) {
  return (
    <div
      className="
        flex
        items-center
        gap-4

        bg-[#292929]

        p-5

        hover:bg-[#303030]

        transition-colors
        duration-300
      "
    >
      <div
        className="
          w-11
          h-11

          flex
          items-center
          justify-center

          bg-[#F6C62E]
          text-[#202020]

          shrink-0
        "
      >
        <Icon size={19} strokeWidth={1.9} />
      </div>

      <div>
        <p
          className="
            text-[#999999]
            text-[10.5px]
            uppercase
            tracking-[0.13em]
            font-bold
          "
        >
          {label}
        </p>

        <p
          className="
            text-white
            text-[14px]
            font-semibold
            mt-1
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label
        className="
          block
          text-[#333333]
          text-[13px]
          font-bold
          mb-2
        "
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="
          w-full
          h-[54px]

          px-4

          bg-[#F7F7F7]

          border
          border-[#DDDDDD]

          outline-none

          text-[#444444]
          placeholder:text-[#AAAAAA]

          text-[14px]

          focus:bg-white
          focus:border-[#F6C62E]

          transition-all
          duration-300
        "
      />
    </div>
  );
}