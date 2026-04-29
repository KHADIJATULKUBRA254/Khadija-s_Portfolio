import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CONTACT_INFO } from "../data";

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Credentials", href: "#certifications" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] h-[60px] flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : "bg-bg"
      }`}
    >
      <div className="font-serif font-bold text-[17px] tracking-tight">
        {CONTACT_INFO.name}
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href}
              className="text-[13px] font-medium tracking-[0.4px] uppercase text-muted hover:text-dark transition-colors duration-200 no-underline"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <a 
            href={`mailto:${CONTACT_INFO.email}`} 
            target="_blank" 
            rel="noopener" 
            className="bg-dark text-white text-[12px] font-medium tracking-[0.8px] uppercase px-5 py-2 rounded-[4px] hover:bg-accent transition-colors duration-200 no-underline"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button 
        className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <motion.span 
          animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="block w-6 h-[2px] bg-dark rounded-[2px]" 
        />
        <motion.span 
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-[2px] bg-dark rounded-[2px]" 
        />
        <motion.span 
          animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          className="block w-6 h-[2px] bg-dark rounded-[2px]" 
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[60px] left-0 right-0 bg-bg/98 backdrop-blur-xl border-b border-border px-6 py-5 flex flex-col gap-1 z-[99] md:hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-[15px] font-medium text-dark border-b border-border last:border-none no-underline"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="mt-2 bg-dark text-white text-[14px] font-medium tracking-[0.8px] uppercase px-5 py-3 rounded-[4px] text-center no-underline"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
