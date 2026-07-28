"use client";

import { useEffect, useRef, useState } from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/benrich09",
    icon: <FaGithub className="w-5 h-5" />,
    color: "text-gray-200 hover:text-white", // GitHub is usually dark
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/benson-richard-9110ab307/",
    icon: <FaLinkedin className="w-5 h-5" />,
    color: "text-[#0A66C2] hover:text-[#0A66C2]/80",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/avionics_tz",
    icon: <FaInstagram className="w-5 h-5" />,
    color: "text-[#E1306C] hover:text-[#E1306C]/80", // Instagram pink-red-purple vibe
  },
];

const phoneNumber = "+255746795020";
const email = "benrich205@gmail.com";
const whatsappMessage = "Hey Benrich! 👋 Got a little something for you...";
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
const mailtoLink = `mailto:${email}?subject=Hello%20Benrich&body=Hi,%20I%20wanted%20to%20reach%20out%20about...`;

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    // TODO: connect real backend (Formspree, Resend, Web3Forms, etc.)
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 4500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-5 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-display font-extrabold text-5xl md:text-6xl text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-5 text-lg text-white/50 max-w-lg mx-auto">
            Have a project? Need a developer? Just want to chat? I'm usually quick to reply.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT – Info + Quick Actions */}
          <div
            className={`space-y-10 transition-all duration-800 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <p className="text-white/40 text-sm uppercase tracking-wider font-medium mb-3">
                Quickest ways to reach me
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl text-white font-semibold text-base hover:shadow-2xl hover:shadow-sky-700/30 hover:scale-[1.02] transition-all duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
                WhatsApp me now
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-white/5 border border-white/10 rounded-2xl text-white font-medium text-base hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <FaPhoneAlt className="w-6 h-6" />
                Call me: +255 746 795 020
              </a>

              {/* New: Mail me button */}
              <a
                href={mailtoLink}
                className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl text-white font-semibold text-base hover:shadow-2xl hover:shadow-pink-700/30 hover:scale-[1.02] transition-all duration-300"
              >
                <FaEnvelope className="w-6 h-6" />
                Mail me
              </a>
            </div>

            {/* Email & Location */}
            <div className="glass rounded-2xl p-6 space-y-5">
              <h3 className="font-semibold text-white text-lg">Other ways</h3>
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 flex-shrink-0">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-1">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-white hover:text-blue-300 transition-colors block"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-1">Based in</p>
                    <p className="text-white">Dar es Salaam, Tanzania</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links – now with brand colors */}
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-4">
                Find me elsewhere
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-xl px-4 py-3 flex items-center gap-3 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all group"
                  >
                    <span className={`transition-colors ${social.color}`}>
                      {social.icon}
                    </span>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT – Form (unchanged except minor cleanup) */}
          <div
            className={`transition-all duration-800 delay-150 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-7 space-y-5 border border-white/5"
            >
              {status === "success" && (
                <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-300 text-sm flex items-center gap-3">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Message sent successfully! I'll reply soon.
                </div>
              )}

              <div>
                <label className="text-xs text-white/40 uppercase tracking-wider block mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ben Rich"
                  className="w-full bg-white/[0.05] border border-white/[0.12] rounded-xl px-5 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.08] transition-all"
                />
              </div>

              <div>
                <label className="text-xs text-white/40 uppercase tracking-wider block mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  className="w-full bg-white/[0.05] border border-white/[0.12] rounded-xl px-5 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.08] transition-all"
                />
              </div>

              <div>
                <label className="text-xs text-white/40 uppercase tracking-wider block mb-2 font-medium">
                  Subject (optional)
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project / Question / Hello..."
                  className="w-full bg-white/[0.05] border border-white/[0.12] rounded-xl px-5 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.08] transition-all"
                />
              </div>

              <div>
                <label className="text-xs text-white/40 uppercase tracking-wider block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Hi Benrich, I have an idea..."
                  className="w-full bg-white/[0.05] border border-white/[0.12] rounded-xl px-5 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.08] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-semibold hover:shadow-2xl hover:shadow-sky-700/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-30"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-80"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}