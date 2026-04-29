import { CONTACT_INFO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark2 text-white/40 py-10 md:py-14 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-4 text-center">
        <div className="font-serif text-[18px] text-white/70 tracking-tight">
          {CONTACT_INFO.name}
        </div>
        <div className="text-[12px] font-mono tracking-wider uppercase max-w-[400px]">
          © {currentYear} {CONTACT_INFO.name.toUpperCase()}. BUILT WITH PRECISION.
        </div>
      </div>
    </footer>
  );
}