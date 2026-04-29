import { motion } from "motion/react";
import { CERTIFICATIONS } from "../data";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-dark text-white py-[70px]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#8888b8] mb-2.5 block">Credentials</span>
          <h2 className="font-serif text-[clamp(28px,5vw,56px)] font-extrabold tracking-[-1.5px] leading-[1.05] mb-[60px] text-white">
            Accreditation<br />& Growth
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-white/5 border border-white/10 rounded-[12px] overflow-hidden"
        >
          {CERTIFICATIONS.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-white/[0.03] p-7 md:p-8 hover:bg-white/[0.07] transition-colors group cursor-default"
            >
              <div className="font-mono text-[9px] tracking-[2px] uppercase text-accent mb-2.5">
                {cert.source}
              </div>
              <h3 className="font-bold text-[17px] text-white leading-[1.3] group-hover:text-accent transition-colors">
                {cert.title}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
