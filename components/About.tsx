"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Built" },
  { value: "7+", label: "Projects Shipped" },
  { value: "∞", label: "Lines of Code" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">who I am</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-16">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio text */}
          <div className={`space-y-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-white/60 text-lg leading-relaxed">
              I'm <span className="text-white font-semibold">Benson Richard</span>, a full-stack developer based in{" "}
              <span className="text-cyan-400">Dar es Salaam, Tanzania</span>. I specialize in building scalable, production-ready web and mobile applications using modern technologies.
            </p>
            <p className="text-white/50 leading-relaxed">
              With a background in both frontend and backend development, I bridge the gap between beautiful interfaces and robust server-side logic. I care deeply about performance, developer experience, and shipping products that actually solve problems.
            </p>
            <p className="text-white/50 leading-relaxed">
              Currently pursuing my <span className="text-white/70">B.S. in Information Technology</span> at IFM (2023–2026) while working on real-world projects. When I'm not coding, I'm exploring new frameworks, contributing to open source, or mentoring fellow developers.
            </p>

            {/* Quick facts */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              {[
                { icon: "📍", text: "Dar es Salaam, TZ" },
                { icon: "🎓", text: "B.S. IT — IFM" },
                { icon: "💼", text: "Open to opportunities" },
                { icon: "⚡", text: "Fast learner" },
              ].map((fact) => (
                <div key={fact.text} className="flex items-center gap-2 text-sm text-white/40">
                  <span>{fact.icon}</span>
                  <span>{fact.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/benrich09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/benson-richard-9110ab307/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Stats grid + highlights */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-6 text-center glass-hover">
                  <div className="font-display font-bold text-4xl text-gradient mb-1">{stat.value}</div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* What I do cards */}
            <div className="space-y-3">
              {[
                {
                  icon: "🖥️",
                  title: "Frontend Engineering",
                  desc: "React, Next.js, TypeScript — pixel-perfect, performant UIs",
                },
                {
                  icon: "⚙️",
                  title: "Backend Development",
                  desc: "NestJS, Express, REST APIs, WebSockets, PostgreSQL",
                },
                {
                  icon: "📱",
                  title: "Mobile Development",
                  desc: "Expo & React Native for cross-platform apps",
                },
              ].map((item) => (
                <div key={item.title} className="glass rounded-xl p-4 flex gap-4 items-start glass-hover">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
