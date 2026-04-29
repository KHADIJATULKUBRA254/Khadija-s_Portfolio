import { motion } from "motion/react";
import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-bg py-[70px] border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 28 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.65 }}
        >
          <span className="font-mono text-[10px] tracking-[3px] uppercase text-accent mb-2.5 block">Capabilities</span>
          <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1.5px] leading-[1.05] mb-[60px]">
            Technical<br />Expertise
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border border border-border rounded-[12px] overflow-hidden shadow-sm"
        >
          {SKILLS.map((group) => (
            <div 
              key={group.category} 
              className={`bg-white p-7 md:p-8 flex flex-col ${group.fullWidth ? 'sm:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-accent mb-4 flex items-center gap-2">
                <span className="w-0.5 h-3.5 bg-accent rounded-[2px]" />
                {group.category}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span 
                    key={skill} 
                    className="bg-tag-bg text-[#444] text-[12px] font-medium px-3 py-1 rounded-full border border-transparent hover:border-accent hover:text-accent hover:bg-accent/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
