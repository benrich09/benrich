export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
         
          <span className="text-white/20 text-xs">Benson Richard — Full-Stack Developer</span>

        </div>

        <p className="text-white/20 text-xs text-center">
          © {currentYear}        
        </p>
        <div className="flex items-center gap-4 text-xs text-white/20">
         <p>With great powers</p>
        </div>
      </div>
    </footer>
  );
}
