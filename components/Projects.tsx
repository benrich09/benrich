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
    description: "A Digital Store that provides different products and services.",
    tech: ["React", "Tailwind"],
    link: "https://senotrams-project.vercel.app/",
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
  "Full-Stack": "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
  "Frontend": "text-violet-400 border-violet-400/40 bg-violet-400/10",
  "Backend": "text-blue-400 border-blue-400/40 bg-blue-400/10",
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState("All");

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

  const filters = ["All", "Full-Stack", "Frontend"];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.label === filter);

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-5 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`transition-all duration-900 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>

            <div className="flex gap-2.5 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                    filter === f
                      ? "bg-white/12 border-white/30 text-white shadow-sm"
                      : "border-white/10 text-white/50 hover:text-white hover:border-white/25 hover:bg-white/5"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative glass rounded-3xl p-7 md:p-8 
                flex flex-col gap-5 overflow-hidden
                transition-all duration-500 ease-out
                hover:scale-[1.03] hover:-translate-y-1
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
                ${project.featured ? "lg:col-span-1" : ""}
              `}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
            >
              {/* Growing border effect */}
              <div
                className="
                  absolute inset-0 rounded-3xl border-2 border-transparent
                  transition-all duration-500 ease-out
                  group-hover:border-cyan-500/40 group-hover:scale-[1.015]
                  pointer-events-none
                "
              />

              {/* Top row */}
              <div className="flex items-start justify-between gap-5">
                <div
                  className={`
                    w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 
                    border border-white/10 flex items-center justify-center 
                    font-display font-bold text-white/60 text-lg flex-shrink-0
                    transition-transform duration-500 group-hover:scale-110
                  `}
                >
                  {project.title.charAt(0)}
                </div>

                <span
                  className={`
                    px-3 py-1.5 rounded-full text-xs font-medium border
                    ${labelColors[project.label]}
                    transition-all duration-400 group-hover:scale-105
                  `}
                >
                  {project.label}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <h3
                  className="
                    font-display font-bold text-xl md:text-2xl text-white 
                    group-hover:text-gradient transition-all duration-500
                  "
                >
                  {project.title}
                </h3>
                <p className="text-white/50 text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      text-xs text-white/40 bg-white/[0.06] border border-white/[0.08]
                      px-3 py-1 rounded-lg transition-all duration-300
                      group-hover:bg-white/10 group-hover:text-white/70
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA arrow – more pronounced hover effect */}
              <div
                className="
                  flex items-center gap-2 text-sm font-medium
                  text-cyan-300/60 group-hover:text-cyan-300
                  transition-all duration-500 mt-3
                  group-hover:translate-x-1
                "
              >
                <span className="group-hover:underline underline-offset-4">
                  View project
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className={`text-center mt-16 transition-all duration-900 delay-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <a
            href="https://github.com/benrich09"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3 px-7 py-4 rounded-2xl
              text-white/70 hover:text-white border border-white/15
              hover:border-white/30 bg-white/5 hover:bg-white/10
              transition-all duration-400 hover:shadow-lg hover:shadow-cyan-500/10
            "
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387..." />
            </svg>
            View more projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}