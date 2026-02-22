export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-xl">
            <span className="text-gradient">BR</span>
          </span>
          <span className="text-white/20 text-xs">Benson Richard — Full-Stack Developer</span>
        </div>
        <p className="text-white/20 text-xs text-center">
          © {currentYear} Benson Richard. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4 text-xs text-white/20">
          {["#home", "#about", "#skills", "#projects", "#contact"].map((href) => (
            <a key={href} href={href} className="hover:text-white/50 transition-colors capitalize">
              {href.replace("#", "")}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
