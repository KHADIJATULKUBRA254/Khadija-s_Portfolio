import { motion } from "motion/react";
import { PROJECTS, CONTACT_INFO } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-bg py-[70px] border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-accent mb-2.5 block">Portfolio</span>
            <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-0 text-dark">
              Featured<br />Projects
            </h2>
          </motion.div>
          <motion.a 
            href={CONTACT_INFO.github}
            target="_blank" 
            rel="noopener" 
            className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent border-b border-accent pb-0.5 no-underline hover:text-accent-hover hover:border-accent-hover transition-colors"
          >
            Explore All Projects ↗
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.1 }}
              className="group bg-white border-[1.5px] border-border rounded-[14px] p-7 md:p-[28px_28px_24px] flex flex-col hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(59,91,219,0.1)] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3.5">
                <span className="font-mono text-[10px] tracking-[2px] uppercase text-muted">
                  {project.date}
                </span>
                <span className="font-serif text-[52px] font-black leading-[1] text-[#dde3f8] tracking-[-2px] select-none">
                  {project.id}
                </span>
              </div>
              
              <h3 className="font-serif font-extrabold text-[20px] tracking-[-0.4px] text-dark mb-3 leading-[1.2]">
                {project.name} {project.label && (
                  <span className="text-[11px] font-mono text-accent tracking-[1px] font-normal italic ml-1">
                    {project.label}
                  </span>
                )}
              </h3>
              
              <p className="text-[13.5px] text-[#666] leading-[1.7] mb-5 flex-grow">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map(tag => (
                  <span key={tag} className="font-medium text-[12px] px-3.5 py-1.5 rounded-full bg-tag-bg text-accent border border-[#dde3f8]">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener" 
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-dark bg-tag-bg border border-[#dde3f8] px-[18px] py-2 rounded-full w-fit hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 no-underline"
              >
                View Live ↗
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
