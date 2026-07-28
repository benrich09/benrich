"use client";

import { useEffect, useState } from "react";

const roles = [
  "Software Developer",
  "Full-Stack Developer",
  "Backend Architect",
  
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

      <div
        className={`max-w-4xl w-full text-center transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        

        {/* Name */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-8xl leading-none tracking-tight mb-6">
          <span className="text-white">Ben</span>{" "}
          <span className="text-gradient">Rich</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-white/50 text-lg md:text-xl font-mono">
            {displayed}
            <span className="cursor-blink text-blue-400 ml-0.5">_</span>
          </span>
        </div>

        {/* Short tagline */}
        <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          I build scalable web &amp; mobile apps — from pixel-perfect UIs to robust backend systems.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="btn-pill-white group">
            Explore my work
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur text-white/80 font-semibold text-sm hover:bg-white/10 hover:text-white transition-colors"
          >
            Get in touch
          </a>
        </div>

      </div>
    </section>
  );
}