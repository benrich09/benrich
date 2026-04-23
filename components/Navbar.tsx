"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050508]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-display font-bold text-xl tracking-tight">
          <span className="text-gradient">Ben Rich</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white/40 hover:text-white/80"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-lg bg-white/[0.07] border border-white/[0.08]" />
                )}
                <span className="relative">{item.name}</span>
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:benrich205@gmail.com"
            className="text-sm px-4 py-1.5 rounded-full border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 font-medium"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-white/60 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block h-px bg-white/60 transition-all duration-300 ${mobileOpen ? "opacity-0 w-0" : "w-4"}`} />
          <span className={`block w-5 h-px bg-white/60 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-[#050508]/95 backdrop-blur-xl border-b border-white/[0.06] space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white/[0.07] text-white border border-white/[0.08]"
                    : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />}
                {item.name}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="mailto:benrich205@gmail.com?subject=Hello%20Benrich&body=Hi,%20I%20wanted%20to%20reach%20out%20about..."
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-medium border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}