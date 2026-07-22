import { motion } from "framer-motion";
import { solarProjects } from "../data/companies.js";

export function SolarProjects() {
  return (
    <motion.section
      className="mx-auto mt-[clamp(34px,5vw,72px)] w-[min(1320px,calc(100%-2*var(--gutter)))] overflow-hidden rounded-xl border border-slate-200 bg-white/95 px-[clamp(14px,4vw,46px)] py-[clamp(36px,4vw,56px)] shadow-[0_24px_58px_rgba(8,52,107,.1)]"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="mb-6 max-w-180">
        <span className="text-[11px] font-black uppercase tracking-[.16em] text-emerald-700">Selected Installations</span>
        <h2 className="my-3 text-[clamp(36px,4.2vw,56px)] font-bold leading-none tracking-[-.055em] text-[#08346b]">Our Solar Projects</h2>
      </header>

      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-3.5">
        {solarProjects.map((project) => (
          <figure className="m-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_10px_28px_rgba(8,52,107,.08)]" key={project.image}>
            <img className="block h-40 w-full object-cover md:h-[clamp(180px,18vw,240px)]" src={project.image} alt={project.title} loading="lazy" />
            <figcaption className="p-3 md:px-4 md:py-3.5">
              <strong className="block text-xs leading-snug text-[#08346b] md:text-sm">{project.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </motion.section>
  );
}
