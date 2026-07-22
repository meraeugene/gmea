import { useEffect } from "react";
import { motion } from "framer-motion";
import { EnvelopeSimple, Phone, X } from "@phosphor-icons/react";

export function ProductModal({ product, company, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    const closeOnEscape = (event) => event.key === "Escape" && onClose();

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      previousFocus?.focus?.();
    };
  }, [onClose]);

  const emailSubject = encodeURIComponent(`Inquiry: ${product.name}`);
  const solar = company.theme === "solar";

  return (
    <motion.div className="fixed inset-0 z-100 grid place-items-center bg-slate-950/70 p-3.5 backdrop-blur-md md:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
      <motion.section
        className="relative grid max-h-[calc(100vh-28px)] w-full max-w-[980px] grid-cols-1 overflow-y-auto rounded-2xl border border-slate-300 bg-white shadow-[0_28px_80px_rgba(0,0,0,.28)] md:max-h-[calc(100vh-48px)] md:grid-cols-[minmax(320px,.95fr)_minmax(0,1.05fr)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="absolute right-4 top-4 z-2 grid size-10 place-items-center rounded-full border border-slate-200 bg-white/95 text-xl text-[var(--brand-dark)] shadow-md hover:border-[var(--brand-accent)]" type="button" onClick={onClose} aria-label="Close product details" autoFocus><X /></button>

        <div className="relative h-[230px] overflow-hidden bg-slate-100 md:h-auto md:min-h-[540px]">
          <img className={`absolute inset-0 h-full w-full ${solar ? "object-contain" : "object-cover"}`} src={product.image} alt="" />
        </div>

        <div className="self-center px-6 py-8 md:px-12 md:py-13">
          <span className="text-[10px] font-black uppercase tracking-[.14em] text-[var(--brand-accent-dark)]">{company.label}</span>
          <h2 className="mr-10 mt-3 mb-4.5 text-[clamp(30px,4vw,46px)] font-bold leading-[1.04] tracking-[-.045em] text-[var(--brand-dark)]" id="product-modal-title">{product.name}</h2>
          {product.details?.length > 0 && (
            <ul className="mb-5.5 list-disc pl-5 text-[var(--brand-dark)] marker:text-[var(--brand-accent)]">
              {product.details.map((detail) => <li className="my-2 leading-relaxed" key={detail}>{detail}</li>)}
            </ul>
          )}
          <p className="mb-6 text-sm leading-relaxed text-slate-500">Talk directly with our team for availability, recommendations, and project requirements.</p>

          <div className="grid grid-cols-1 border-t border-slate-200 sm:grid-cols-2" aria-label="GMEA contact information">
            <ContactLink href="tel:+639171708400" label="Phone" value="0917 170 8400" icon={<Phone weight="fill" />} />
            <ContactLink href="tel:+639688537341" label="Phone" value="0968 853 7341" icon={<Phone weight="fill" />} second />
            <ContactLink href={`mailto:gmeamarketingcorp@gmail.com?subject=${emailSubject}`} label="Email" value="gmeamarketingcorp@gmail.com" icon={<EnvelopeSimple weight="fill" />} email />
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

function ContactLink({ href, label, value, icon, second = false, email = false }) {
  return (
    <a className={`${email ? "border-t sm:col-span-2" : ""} ${second ? "border-t sm:border-l sm:border-t-0 sm:pl-4" : ""} flex min-w-0 items-center gap-3 border-slate-200 py-4.5 pr-4 text-[var(--brand-dark)] transition-colors hover:text-[var(--brand-accent-dark)]`} href={href}>
      <span className="shrink-0 text-2xl text-[var(--brand-accent-dark)]">{icon}</span>
      <span className="min-w-0">
        <small className="mb-1 block text-[10px] font-extrabold uppercase tracking-[.11em] text-slate-500">{label}</small>
        <strong className={`${email ? "text-sm sm:text-base" : "text-lg"} block [overflow-wrap:anywhere] tracking-[-.02em]`}>{value}</strong>
      </span>
    </a>
  );
}
