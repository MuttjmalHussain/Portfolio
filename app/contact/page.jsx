"use client"
import Hero from "@/components/layout/Hero";
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Something went wrong.");
      }

      setLoading(false);
    };

    return (
      <section id="contact" className="bg-[#1c1917] py-16 px-8 max-w-[1560px] mx-auto">
        <Hero tagline='Feel free to contact me anytime' title='Get in Touch' />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-white">Message Me</h2>
            <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <input
                name="name"
                value={form.name}
                onChange={handleChange}
                  placeholder="Full Name"
                  type="text"
                  className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                name="email"
                value={form.email}
                onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                  rows="4"
                  placeholder="Message"
                  className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className=" rounded-full text-white bg-green-700 py-3 px-6 hover:bg-green-800 cursor-pointer transition-colors font-medium"
              >
                Send Message
              </button>
            </form>

          </div>
          <div className="font-semibold text-xl text-white">
            <h2>Contact Info</h2>
            <p className="text-xs text-gray-400 my-2">Always available for learning and implementing skills, Feel free to contact me</p>
            <div className="text-white max-w-md py-2 flex gap-6">

              {/* Left Icon Column */}
              <div className="flex flex-col items-center gap-10 text-green-500">
                <FaUser size={22} className="mt-2" />
                <FaMapMarkerAlt size={22} />
                <FaPhoneAlt size={22} />
                <FaEnvelope size={22} />
              </div>

              {/* Vertical Divider */}
              <div className="w-px bg-gray-500 opacity-40" />

              {/* Right Content */}
              <div className="flex flex-col gap-2">

                {/* Name */}
                <div>
                  <h3 className="text-lg ">Name</h3>
                  <p className="text-gray-300 text-sm">
                    Muttjmal Hussain
                  </p>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-300 text-sm">
                    Lahore, Punjab, Pakistan
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-lg font-semibold">Call Me</h3>
                  <p className="text-gray-300 text-sm">
                    0314-7466939
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-300 text-sm">
                    muttjmalhussain1@gmail.com
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;