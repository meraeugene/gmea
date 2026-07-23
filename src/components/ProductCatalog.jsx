import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

const reveal = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function ProductCatalog({ company, filter, products, onFilter, onSelect }) {
  const solar = company.theme === "solar";

  return (
    <motion.section
      className="mx-auto mt-4 w-[min(1320px,calc(100%-2*var(--gutter)))] rounded-xl border border-slate-200 bg-white/95 px-[clamp(16px,4vw,58px)] py-[clamp(34px,6vw,82px)] shadow-[0_24px_58px_rgba(11,29,46,.1)] sm:mt-8"
      id="products"
      {...reveal}
    >
      <header className="mb-7">
        <span className="text-[11px] font-black uppercase tracking-[.22em] text-[var(--brand-accent-dark)]">{company.signature}</span>
        <h1 className="mt-4 text-[clamp(32px,4.6vw,62px)] font-bold leading-[.98] tracking-[-.05em] text-[var(--brand-dark)]">{company.heading}</h1>
      </header>

      <div className="scrollbar-none mb-6 flex gap-2 overflow-x-auto border-t border-slate-200 pt-4" role="tablist" aria-label="Product categories">
        {company.filters.map((item) => (
          <button
            key={item}
            type="button"
            className={`min-h-10 shrink-0 rounded-lg border px-4 py-2 text-xs font-extrabold transition-colors ${filter === item ? "border-[var(--brand-dark)] bg-[var(--brand-dark)] text-[var(--active-text)]" : "border-slate-200 bg-white text-slate-500 hover:border-[var(--brand-accent)] hover:text-[var(--brand-dark)]"}`}
            onClick={() => onFilter(item)}
            role="tab"
            aria-selected={filter === item}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3" layout>
        <AnimatePresence mode="popLayout">
          {products.map((product) => (
            <motion.article
              key={product.name}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-w-0 cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(11,29,46,.06)] transition-[border-color,box-shadow] hover:border-[var(--brand-accent)] hover:shadow-[0_14px_32px_rgba(11,29,46,.1)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--brand-accent)]"
              role="button"
              tabIndex="0"
              aria-label={`View details for ${product.name}`}
              onClick={() => onSelect(product)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onSelect(product);
                }
              }}
            >
              <div className={`${solar ? "h-[340px] bg-white sm:h-[390px] xl:h-[430px]" : "h-[220px] bg-slate-100 sm:h-[245px]"} overflow-hidden`}>
                <img className={`h-full w-full ${solar ? "object-contain" : "object-cover"}`} src={product.image} alt={product.name} />
              </div>
              <div className="p-5.5">
                <h2 className="min-h-13 text-xl font-bold leading-snug tracking-[-.025em] text-[var(--brand-dark)]">{product.name}</h2>
                <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
                  <strong className="text-base text-[var(--brand-accent-dark)]">{product.price}</strong>
                  <button className="inline-flex items-center gap-1 border-0 bg-transparent p-0 text-xs font-black text-[var(--brand-dark)]" type="button" onClick={(event) => { event.stopPropagation(); onSelect(product); }}>
                    View details <ArrowRight />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
