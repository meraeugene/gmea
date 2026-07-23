import { motion } from "framer-motion";

export function CertificatesSection({ certificates }) {
  return (
    <motion.section
      className="mx-auto mt-[clamp(48px,8vw,110px)] mb-[clamp(64px,9vw,126px)] w-[min(1320px,calc(100%-2*var(--gutter)))] rounded-xl border border-slate-200 bg-white/95 px-[clamp(16px,4vw,54px)] py-[clamp(34px,6vw,82px)] shadow-[0_24px_56px_rgba(11,29,46,.1)]"
      id="certificates"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-[clamp(32px,4vw,52px)] max-w-180">
        <span className="text-[11px] font-black uppercase tracking-[.14em] text-[var(--brand-accent-dark)]">Professional development</span>
        <h2 className="my-3 text-[clamp(32px,4.8vw,64px)] font-bold leading-[.98] tracking-[-.05em] text-[var(--brand-dark)]">Certificates &amp; Training</h2>
      </header>
      <div className="columns-1 gap-4.5 md:columns-2 xl:columns-3">
        {certificates.map((item) => (
          <figure className="mb-4.5 break-inside-avoid overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-[0_9px_24px_rgba(11,29,46,.08)] transition-shadow hover:shadow-[0_14px_32px_rgba(11,29,46,.11)]" key={item.image}>
            <img className="block h-auto w-full" src={item.image} alt={item.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </motion.section>
  );
}
