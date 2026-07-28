"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      const sections = ["home", "about", "skills", "projects", "timeline", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial values on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#050a1c] text-white min-h-screen">
      {/* Centered scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-500 transition-all duration-200 ease-out rounded-full shadow-[0_0_12px_rgba(96,165,250,0.5)]"
          style={{
            width: `${scrollProgress}%`,
            marginLeft: `calc(50% - ${scrollProgress / 2}%)`,
            maxWidth: "min(1600px, 92vw)",
          }}
        />
      </div>

      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 blue-sheen" />
        <div className="absolute inset-0 grid-texture" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sky-600/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}