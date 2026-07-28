"use client";

import { useEffect, useRef, useState } from "react";

const skillBars = [
  { name: "Node.js / TypeScript / JavaScript / React / Next.js / React Native", level: 90, color: "from-sky-400 to-blue-400" },
  { name: "Golang / Gin / Go Fiber", level: 88, color: "from-blue-400 to-sky-500" },
  { name: "PHP / Laravel", level: 80, color: "from-sky-500 to-indigo-500" },
  { name: "Flutter / Dart", level: 75, color: "from-indigo-400 to-purple-500" },
  { name: "Linux/Unix", level: 70, color: "from-purple-500 to-pink-500" },
  { name: "Python / Django", level: 65, color: "from-pink-400 to-rose-500" },
  { name: "Java / Spring Boot", level: 50, color: "from-yellow-400 to-orange-500" },
];

const techCategories = [
  {
    label: "Languages",
    color: "cyan",
    items: ["TypeScript", "JavaScript", "PHP", "Java", "Python", "Golang", "Dart"],
  },
  {
    label: "Frameworks",
    color: "blue",
    items: ["React.js", "Next.js", "Expo", "Flutter", "NestJS", "Laravel", "Spring Boot", "Django"],
  },
  {
    label: "Databases",
    color: "violet",
    items: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB","Firebase", "Supabase", "Redis"],
  },
  {
    label: "APIs & Protocols",
    color: "purple",
    items: ["REST API", "WebSockets", "GraphQL"],
  },
  {
    label: "Tools & DevOps",
    color: "indigo",
    items: ["Git", "Docker", "Linux/Unix", "Prisma ORM", "Vercel", "GitHub Actions"],
  },
];

const colorMap: Record<string, string> = {
  cyan: "border-blue-400/20 bg-blue-400/5 text-blue-300 hover:bg-blue-400/15",
  blue: "border-sky-400/20 bg-sky-400/5 text-sky-300 hover:bg-sky-400/15",
  violet: "border-indigo-400/20 bg-indigo-400/5 text-indigo-300 hover:bg-indigo-400/15",
  purple: "border-purple-400/20 bg-purple-400/5 text-purple-300 hover:bg-purple-400/15",
  indigo: "border-indigo-400/20 bg-indigo-400/5 text-indigo-300 hover:bg-indigo-400/15",
};

const labelColorMap: Record<string, string> = {
  cyan: "text-blue-400",
  blue: "text-sky-400",
  violet: "text-indigo-400",
  purple: "text-purple-400",
  indigo: "text-indigo-400",
};

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-16">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Progress bars */}
          <div className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="text-white/40 text-xs uppercase tracking-widest mb-8">Proficiency</h3>
            <div className="space-y-6">
              {skillBars.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80 text-sm font-medium">{skill.name}</span>
                    <span className="text-white/30 text-xs font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                      style={{
                        width: visible ? `${skill.level}%` : "0%",
                        transitionDelay: `${i * 120 + 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tech tags */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="text-white/40 text-xs uppercase tracking-widest mb-8">Technologies</h3>
            {techCategories.map((cat) => (
              <div key={cat.label}>
                <p className={`text-xs font-semibold mb-3 ${labelColorMap[cat.color]}`}>{cat.label}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border cursor-default transition-all duration-200 ${colorMap[cat.color]}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}