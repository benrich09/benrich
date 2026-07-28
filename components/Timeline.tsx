"use client";

import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    year: "July 2026 - Present",
    type: "work",                           // ← changed
    title: "Software Developer",
    company: "Mianet",
    description: "Working on a project with TNCC to manage TCP system and other company projects. Involved in both frontend and backend development, ensuring seamless integration and performance.",
    tags: ["Next.js", "flutter", "Golang", "PostgreSQL", "Tailwind"],
  },
  {
    year: "Continous",
    type: "work",                           // ← changed
    title: "Software Developer",
    company: "Senotrams - Avionics",
    description: "Delivered 5+ web and mobileapplications for businesses across Tanzania. Handled everything from design to deployment.",
    tags: ["Next.js", "flutter", "Golang", "PostgreSQL", "Tailwind"],
  },
  {
    year: "2023 - Present",
    type: "freelance",
    title: "Freelance Software Developer",
    company: "Self-employed",
    description: "Delivered 10+ web applications for businesses across Tanzania. Handled everything from design to deployment.",
    tags: ["React", "Next.js", "flutter","React-native","Golang", "PostgreSQL", ],
  },
  {
    year: "2023 - Present",
    type: "education",
    title: "B.S. Information Technology",
    company: "IFM — Institute of Finance Management",
    description: "Currently in my final year. Coursework includes data structures, web development, cloud computing, and software engineering.",
    tags: ["2023–2026"],
  },
  {
    year: "2022",
    type: "milestone",
    title: "First Full-Stack Project",
    company: "Personal",
    description: "Launched my first complete full-stack app combining React frontend with a PHP/MySQL backend — the beginning of everything.",
    tags: ["React", "PHP", "MySQL"],
  },
];
const typeStyles: Record<string, { dot: string; badge: string; label: string }> = {
  work: {
    dot: "bg-sky-400 shadow-[0_0_12px_rgba(96,165,250,0.6)]",
    badge: "bg-sky-400/10 text-sky-400 border-sky-400/20",
    label: "Work",
  },
  freelance: {
    dot: "bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.6)]",
    badge: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    label: "Freelance",
  },
  education: {
    dot: "bg-indigo-400 shadow-[0_0_12px_rgba(167,139,250,0.6)]",
    badge: "bg-indigo-400/10 text-indigo-400 border-indigo-400/20",
    label: "Education",
  },
  milestone: {
    dot: "bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.6)]",
    badge: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    label: "Milestone",
  },
};

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="py-28 px-6 relative">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-16">
            My <span className="text-gradient">Timeline</span>
          </h2>
        </div>

        {/* Timeline items */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/40 via-indigo-500/40 to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const style = typeStyles[item.type];
              return (
                <div
                  key={i}
                  className={`relative pl-12 transition-all duration-700 ${
                    visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${i * 150 + 200}ms` }}
                >
                  {/* Dot */}
                  <div className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full -translate-x-1/2 ${style.dot} ring-2 ring-[#050a1c]`} />

                  <div className="glass rounded-2xl p-6 glass-hover">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-white text-lg">{item.title}</h3>
                        <p className="text-white/40 text-sm mt-0.5">{item.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-xs border font-medium ${style.badge}`}>
                          {style.label}
                        </span>
                        <span className="text-white/25 text-xs font-mono">{item.year}</span>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs text-white/30 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}