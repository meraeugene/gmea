import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { companyList } from "../data/companies.js";

export function ServicesPage() {
  return (
    <motion.main className="grid min-h-screen content-center gap-11 bg-slate-100 px-[var(--gutter)] py-[clamp(56px,8vw,104px)]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
      <motion.header className="mx-auto w-full max-w-215 text-center" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}>
        <h1 className="mt-3 text-[clamp(42px,6vw,74px)] font-black leading-none tracking-[-.055em]  text-slate-900">CHOOSE A SERVICE</h1>
      </motion.header>

      <section className="mx-auto grid w-full max-w-270 grid-cols-1 items-center gap-[clamp(24px,4vw,54px)] md:grid-cols-3" aria-label="GMEA companies">
        {companyList.map((company, index) => (
          <motion.div key={company.path} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}>
            <Link className="block w-full" to={company.path} aria-label={`Open ${company.label}`}>
              <img className="block h-auto w-full rounded-2xl border border-slate-200 shadow-[0_12px_34px_rgba(11,29,46,.08)] transition-shadow hover:shadow-[0_16px_38px_rgba(11,29,46,.12)]" src={company.logo} alt={company.label} />
            </Link>
          </motion.div>
        ))}
      </section>
    </motion.main>
  );
}
