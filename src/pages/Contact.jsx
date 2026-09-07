import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // Later your backend/email API can be connected here.
  };

  return (
    <>
      {/* =========================================
          PAGE HERO
      ========================================== */}

      <section className="bg-[#202020]">
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-4
            sm:px-6
            lg:px-12
            py-20
            md:py-28
          "
        >
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <span
                className="
                  text-[#F6C62E]
                  text-[12px]
                  md:text-[13px]
                  uppercase
                  tracking-[0.16em]
                  font-bold
                "
              >
                Contact Us
              </span>
            </div>

            <h1
              className="
                text-white
                font-extrabold
                text-[40px]
                sm:text-[50px]
                md:text-[62px]
                leading-[1.02]
              "
            >
              Let's Build Something
              <br />
              <span className="text-[#F6C62E]">
                Exceptional.
              </span>
            </h1>

            <p
              className="
                text-[#CFCFCF]
                max-w-[650px]
                mt-6
                text-[14px]
                md:text-[16px]
                leading-[1.8]
              "
            >
              Have an upcoming project or engineering requirement?
              Connect with our team and let's discuss how Vardhusa
              can help bring it to life.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT SECTION
      ========================================== */}

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[0.85fr_1.4fr]
              gap-8
              lg:gap-12
              items-start
            "
          >
            {/* =========================================
                LEFT SIDE
            ========================================== */}

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[3px] bg-[#F6C62E]" />

                <span
                  className="
                    text-[12px]
                    uppercase
                    tracking-[0.16em]
                    font-bold
                    text-[#858585]
                  "
                >
                  Get in Touch
                </span>
              </div>

              <h2
                className="
                  font-extrabold
                  text-[#202020]
                  text-[30px]
                  md:text-[40px]
                  leading-[1.1]
                "
              >
                Start Your Next
                <br />
                <span className="text-[#D6A900]">
                  Project With Us
                </span>
              </h2>

              <p
                className="
                  text-[#666666]
                  text-[14px]
                  md:text-[15px]
                  leading-[1.8]
                  mt-5
                  max-w-[500px]
                "
              >
                Whether you need plumbing, firefighting, MEP or
                complete EPC support, our team is ready to understand
                your requirements.
              </p>

              {/* Contact Cards */}
              <div className="mt-9 flex flex-col gap-4">

                <ContactCard
                  icon={Phone}
                  title="Call Us"
                  value="+91 00000 00000"
                />

                <ContactCard
                  icon={Mail}
                  title="Email Us"
                  value="info@vardhusa.com"
                />

                <ContactCard
                  icon={MapPin}
                  title="Our Office"
                  value="India"
                />
              </div>

              {/* Extra Info */}
              <div
                className="
                  mt-6
                  bg-[#202020]
                  p-6
                  md:p-7
                  relative
                  overflow-hidden
                "
              >
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-[5px]
                    h-full
                    bg-[#F6C62E]
                  "
                />

                <div className="flex items-start gap-4">
                  <Building2
                    size={28}
                    className="text-[#F6C62E] shrink-0 mt-1"
                  />

                  <div>
                    <h3
                      className="
                        text-white
                        font-bold
                        text-[17px]
                      "
                    >
                      End-to-End EPC Support
                    </h3>

                    <p
                      className="
                        text-[#AAAAAA]
                        text-[13.5px]
                        leading-[1.7]
                        mt-2
                      "
                    >
                      From engineering and planning through execution
                      and final handover, we work as one integrated
                      project partner.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================
                CONTACT FORM
            ========================================== */}

            <div
              className="
                bg-white
                border
                border-[#E1E1E1]
                p-6
                sm:p-8
                md:p-10
                shadow-[0_18px_45px_rgba(0,0,0,0.06)]
              "
            >
              <div className="mb-8">
                <h3
                  className="
                    text-[#202020]
                    font-extrabold
                    text-[24px]
                    md:text-[28px]
                  "
                >
                  Tell Us About Your Project
                </h3>

                <p
                  className="
                    text-[#777777]
                    text-[14px]
                    mt-2
                  "
                >
                  Fill in the details below and our team will get
                  in touch with you.
                </p>
              </div>

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
                    placeholder="Enter your name"
                    required
                  />

                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
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
                  <label
                    className="
                      block
                      text-[#333333]
                      text-[13px]
                      font-bold
                      mb-2
                    "
                  >
                    Project Requirement
                  </label>

                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="
                      w-full
                      h-[52px]
                      px-4
                      bg-[#F7F7F7]
                      border
                      border-[#DDDDDD]
                      outline-none
                      text-[#555555]
                      text-[14px]
                      focus:border-[#F6C62E]
                      transition-colors
                    "
                  >
                    <option value="">
                      Select project type
                    </option>

                    <option value="Plumbing">
                      Plumbing
                    </option>

                    <option value="Firefighting">
                      Firefighting
                    </option>

                    <option value="MEP">
                      MEP Services
                    </option>

                    <option value="EPC">
                      Complete EPC Solution
                    </option>

                    <option value="Other">
                      Other Requirement
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label
                    className="
                      block
                      text-[#333333]
                      text-[13px]
                      font-bold
                      mb-2
                    "
                  >
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us briefly about your project..."
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
                      text-[14px]
                      focus:border-[#F6C62E]
                      transition-colors
                    "
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    mt-6
                    min-h-[52px]
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-[#F6C62E]
                    text-[#202020]
                    px-8
                    text-[14px]
                    font-extrabold
                    hover:bg-[#202020]
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  Send Enquiry

                  <Send
                    size={16}
                    strokeWidth={2.2}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================
   CONTACT CARD
========================================== */

function ContactCard({ icon: Icon, title, value }) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-4
        bg-white
        border
        border-[#E1E1E1]
        p-5
        hover:border-[#F6C62E]
        transition-all
        duration-300
      "
    >
      <div
        className="
          w-12
          h-12
          flex
          items-center
          justify-center
          bg-[#FFF8DA]
          text-[#D6A900]
          group-hover:bg-[#F6C62E]
          group-hover:text-[#202020]
          transition-all
          duration-300
          shrink-0
        "
      >
        <Icon size={20} />
      </div>

      <div>
        <p
          className="
            text-[#888888]
            text-[11px]
            uppercase
            tracking-[0.1em]
            font-bold
          "
        >
          {title}
        </p>

        <p
          className="
            text-[#202020]
            font-bold
            text-[14px]
            mt-1
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}

/* =========================================
   FORM INPUT
========================================== */

function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
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
          h-[52px]
          px-4
          bg-[#F7F7F7]
          border
          border-[#DDDDDD]
          outline-none
          text-[#444444]
          placeholder:text-[#AAAAAA]
          text-[14px]
          focus:border-[#F6C62E]
          focus:bg-white
          transition-all
          duration-300
        "
      />
    </div>
  );
}