"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "React / Next.js Engineer",
  "Backend Architect",
  "UI/UX Craftsman",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timer = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!deleting && charIndex === current.length) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative pt-16 px-6"
    >
      {/* Decorative corner marks */}
      <div className="absolute top-24 left-6 text-white/10 text-xs font-mono hidden lg:block">
        &lt;section id="home"&gt;
      </div>
      <div className="absolute bottom-12 right-6 text-white/10 text-xs font-mono hidden lg:block">
        &lt;/section&gt;
      </div>

      <div
        className={`max-w-4xl w-full text-center transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance work
        </div>

        {/* Avatar initials */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-display font-bold text-2xl text-white shadow-2xl shadow-blue-500/30">
              BR
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-cyan-400 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Greeting */}
        <p className="section-label mb-4 opacity-70">Hello, world!</p>

        {/* Name */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-8xl leading-none tracking-tight mb-6">
          <span className="text-white">Benson</span>{" "}
          <span className="text-gradient">Richard</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-white/50 text-lg md:text-xl font-mono">
            {displayed}
            <span className="cursor-blink text-cyan-400 ml-0.5">_</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="text-white/40 max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-12">
          Crafting scalable, high-performance web applications from Dar es Salaam 🇹🇿
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/[0.04] font-semibold text-sm transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10 font-semibold text-sm transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-white/20 text-xs">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20 mx-auto" />
          <span>scroll</span>
        </div>
      </div>
    </section>
  );
}
