import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Hero() {
  return (
    <>
      {/* CONTACT STRIP */}
      <div className="bg-accent mt-[60px] flex flex-wrap justify-center overflow-hidden">
        <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2.5 px-5 py-3 text-white/70 hover:text-white transition-colors text-[12px] font-mono tracking-wider no-underline">
          <MapPin size={13} /> {CONTACT_INFO.location} &nbsp;·&nbsp; {CONTACT_INFO.phone}
        </a>
        <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2.5 px-5 py-3 text-white/70 hover:text-white transition-colors text-[12px] font-mono tracking-wider no-underline">
          <Mail size={13} /> {CONTACT_INFO.email}
        </a>
        <a href={CONTACT_INFO.linkedIn} target="_blank" rel="noopener" className="flex items-center gap-2.5 px-5 py-3 text-white/70 hover:text-white transition-colors text-[12px] font-mono tracking-wider no-underline">
          LinkedIn
        </a>
        <a href={CONTACT_INFO.github} target="_blank" rel="noopener" className="flex items-center gap-2.5 px-5 py-3 text-white/70 hover:text-white transition-colors text-[12px] font-mono tracking-wider no-underline">
          GitHub
        </a>
      </div>

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-[500px] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden bg-bg">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(59,91,219,0.07)_0%,transparent_70%)]" />

        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-[11px] tracking-[2.5px] uppercase text-muted mb-5 flex gap-6 items-center"
        >
          <span className="flex items-center gap-1.5 ring-offset-[1px]">
            <span className="w-[5px] h-[5px] rounded-full bg-accent2" />
            Open to Opportunities
          </span>
          <span className="hidden sm:inline">Karachi, PK</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-[clamp(28px,5.5vw,72px)] font-medium leading-[1.1] tracking-[-1px] mb-8 text-dark"
        >
          Khadija <em className="not-italic text-accent">-Tul-</em> Kubra
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-[580px] text-[#555] text-[16px] leading-[1.8] mb-11"
        >
          BSCS graduate with a strong foundation in software development, software quality assurance, and machine learning. Seeking opportunities to apply analytical thinking, problem-solving skills, and modern technologies to build reliable, data-driven, and impactful solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3.5"
        >
          <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 bg-dark text-white rounded-[5px] text-[13px] font-semibold tracking-[0.4px] hover:bg-accent hover:-translate-y-[1px] transition-all no-underline shadow-sm">
            View More
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-dark border-[1.5px] border-dark rounded-[5px] text-[13px] font-semibold tracking-[0.4px] hover:bg-dark hover:text-white hover:-translate-y-[1px] transition-all no-underline">
            Get In Touch
          </a>
        </motion.div>
      </section>
    </>
  );
}
