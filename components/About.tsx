"use client";

import { useEffect, useRef, useState } from "react";
import { 
  FaCode, 
  FaServer, 
  FaMobileAlt, 
  FaDownload, 
  FaEnvelope,
  FaGithub
} from "react-icons/fa";

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
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-16">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio text + cards below + buttons */}
          <div className={`space-y-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            {/* Bio paragraphs */}
            <div className="space-y-6">
              <p className="text-white/60 text-lg leading-relaxed">
                I'm <span className="text-white font-semibold">Benson Richard</span>, a full-stack developer based in{" "}
                <span className="text-blue-400">Dar es Salaam, Tanzania</span>. I specialize in building scalable, production-ready web and mobile applications using modern technologies.
              </p>
              <p className="text-white/50 leading-relaxed">
                With a background in both frontend and backend development, I bridge the gap between beautiful interfaces and robust server-side logic. I care deeply about performance, developer experience, and shipping products that actually solve problems.
              </p>
              <p className="text-white/50 leading-relaxed">
                Currently pursuing my <span className="text-white/70">B.S. in Information Technology</span> at IFM (2023–2026) while working on real-world projects. When I'm not coding, I'm exploring new frameworks, contributing to open source, or mentoring fellow developers.
              </p>
            </div>

            {/* What I do cards – now below bio */}
            <div className="space-y-3">
              {[
                {
                  icon: <FaCode className="text-blue-400" />,
                  title: "Frontend Engineering",
                  desc: "React, Next.js, TypeScript — pixel-perfect, performant UIs",
                },
                {
                  icon: <FaServer className="text-blue-400" />,
                  title: "Backend Development",
                  desc: "NestJS, Express, REST APIs, WebSockets, PostgreSQL",
                },
                {
                  icon: <FaMobileAlt className="text-blue-400" />,
                  title: "Mobile Development",
                  desc: "Expo & React Native for cross-platform apps",
                },
              ].map((item) => (
                <div 
                  key={item.title} 
                  className="glass rounded-xl p-5 flex gap-5 items-start glass-hover transition-transform hover:scale-[1.02]"
                >
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons – Download CV + Contact Me */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/BENSON CV.pdf"
                download
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-white/90 hover:text-white hover:border-white/30 hover:bg-white/[0.08] font-semibold text-sm transition-all duration-300"
              >
                <FaDownload className="w-4 h-4" />
                Download CV
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-blue-500/30 text-blue-400 hover:text-blue-300 hover:border-blue-400/50 hover:bg-blue-950/20 font-semibold text-sm transition-all duration-300"
              >
                <FaEnvelope className="w-4 h-4" />
                Contact Me
              </a>

              <a
                href="https://github.com/benrich09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/[0.08] font-semibold text-sm transition-all duration-300"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right: Profile picture (half-size-ish portrait) */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src="/images/BENSON.jpeg"
                  alt="Benson Richard - Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Optional subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}