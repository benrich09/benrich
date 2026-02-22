"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Logistics Management",
    description: "Enterprise-grade logistics and delivery management system with real-time tracking, driver assignment, and delivery analytics.",
    tech: ["React", "NestJS", "PostgreSQL", "Prisma", "Tailwind"],
    link: "https://logistic-inky.vercel.app/",
    label: "Full-Stack",
    featured: true,
  },
  {
    title: "EMS — Employee System",
    description: "Comprehensive employee management platform with role-based access, attendance tracking, and performance metrics.",
    tech: ["React", "NestJS", "Prisma", "Tailwind"],
    link: "https://ems-red-xi.vercel.app/",
    label: "Full-Stack",
    featured: true,
  },
  {
    title: "Senotrams",
    description: "Art-tech web application for artists to showcase portfolios and connect with collectors.",
    tech: ["React", "Tailwind"],
    link: "https://senotrams.vercel.app/",
    label: "Frontend",
    featured: false,
  },
  {
    title: "E-Gadgets",
    description: "Modern e-commerce platform for electronic devices with cart, filters, and product detail views.",
    tech: ["React", "Tailwind"],
    link: "https://morden-commerce.vercel.app/",
    label: "Frontend",
    featured: false,
  },
  {
    title: "Avionics",
    description: "Company landing page for a tech services firm specializing in web and mobile development.",
    tech: ["React", "Tailwind"],
    link: "https://avionics-two.vercel.app/",
    label: "Frontend",
    featured: false,
  },
  {
    title: "Level Up Safari",
    description: "Tourist services platform with package browsing, booking UI, and destination showcasing.",
    tech: ["React", "Tailwind"],
    link: "https://level-up-safari.vercel.app/",
    label: "Frontend",
    featured: false,
  },
  {
    title: "Mike 360 Media",
    description: "Professional media and graphics web application for a creative services agency.",
    tech: ["React", "Tailwind"],
    link: "https://mikemedia.vercel.app/",
    label: "Frontend",
    featured: false,
  },
];

const labelColors: Record<string, string> = {
  "Full-Stack": "text-cyan-400 border-cyan-400/30 bg-cyan-400/5",
  "Frontend": "text-violet-400 border-violet-400/30 bg-violet-400/5",
  "Backend": "text-blue-400 border-blue-400/30 bg-blue-400/5",
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filters = ["All", "Full-Stack", "Frontend"];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.label === filter);

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">what I've built</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            {/* Filter tabs */}
            <div className="flex gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                    filter === f
                      ? "bg-white/10 border-white/20 text-white"
                      : "border-white/[0.08] text-white/40 hover:text-white/70 hover:border-white/15"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass rounded-2xl p-6 flex flex-col gap-4 project-card cursor-pointer transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${project.featured ? "md:col-span-1" : ""}`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                {/* Project initial icon */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/[0.08] flex items-center justify-center font-display font-bold text-white/50 text-sm flex-shrink-0`}>
                  {project.title.charAt(0)}
                </div>
                {/* Label */}
                <span className={`px-2.5 py-1 rounded-full text-xs border font-medium ${labelColors[project.label]}`}>
                  {project.label}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-white/30 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA arrow */}
              <div className="flex items-center gap-1.5 text-xs text-white/30 group-hover:text-cyan-400 transition-all duration-300 mt-auto">
                <span>View project</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="https://github.com/benrich09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white border border-white/[0.08] hover:border-white/20 px-6 py-3 rounded-xl transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            More projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
