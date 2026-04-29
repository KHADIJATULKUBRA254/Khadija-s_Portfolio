import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { EXPERIENCE, EDUCATION } from "../data";

export default function ExperienceEducation() {
  const [openEduIndex, setOpenEduIndex] = useState<number | null>(null);

  const toggleEdu = (index: number) => {
    setOpenEduIndex(openEduIndex === index ? null : index);
  };

  return (
    <section id="experience" className="bg-bg py-[70px] border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr] gap-[60px] items-start">
          
          {/* Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex flex-col"
          >
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-accent mb-2.5 block">Experience</span>
            <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1.5px] leading-[1.05] mb-[60px]">
              Professional<br />History
            </h2>

            <div className="space-y-10">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-border mb-10 last:mb-0">
                  <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-accent" />
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-[16px]">{exp.title}</span>
                    <span className="font-mono text-[11px] text-muted">{exp.date}</span>
                  </div>
                  <div className="text-accent text-[13px] font-semibold mb-3">{exp.company}</div>
                  <ul className="list-none space-y-1.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="relative pl-3.5 text-[#555] text-[14px]">
                        <span className="absolute left-0 text-muted text-[11px] top-[1px]">―</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            id="education"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="bg-dark2 text-white rounded-[12px] p-8 md:p-[36px_32px] scroll-mt-[70px]"
          >
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#8888b8] mb-2.5 block">Academic Journey</span>
            <h2 className="font-serif text-[36px] font-extrabold text-white mb-8 tracking-[-1px]">Education</h2>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-0">
              {EDUCATION.map((edu, idx) => (
                <div 
                  key={idx} 
                  className={`border-b border-white/10 last:border-none py-4 first:pt-0 last:pb-0 overflow-hidden cursor-pointer md:cursor-default group`}
                  onClick={() => toggleEdu(idx)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[14px] text-white leading-tight md:text-[15px] max-w-[85%] md:max-w-full">
                      {edu.school}
                    </span>
                    <span className={`md:hidden p-1 rounded-full bg-white/10 transition-transform ${openEduIndex === idx ? 'bg-accent rotate-180' : ''}`}>
                      <ChevronDown size={14} />
                    </span>
                  </div>

                  <motion.div 
                    initial={false}
                    animate={{ 
                      height: (window.innerWidth >= 768 || openEduIndex === idx) ? "auto" : 0,
                      opacity: (window.innerWidth >= 768 || openEduIndex === idx) ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 pb-4 md:pb-0">
                      <div className="text-[12px] text-[#8888b8] font-mono tracking-wider uppercase mb-1">{edu.degree}</div>
                      <div className="text-[11px] font-mono text-accent tracking-tighter">{edu.date}</div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
