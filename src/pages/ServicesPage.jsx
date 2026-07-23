import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { companyList } from "../data/companies.js";

export function ServicesPage() {
  return (
    <motion.main className="grid min-h-screen min-h-dvh content-center gap-[clamp(30px,5vw,44px)] bg-slate-100 px-[var(--gutter)] py-[clamp(44px,8vw,104px)]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
      <motion.header className="mx-auto w-full max-w-215 text-center" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}>
        <h1 className="mt-3 text-[clamp(36px,6vw,74px)] font-black leading-[.95] tracking-[-.055em] text-slate-900">CHOOSE A SERVICE</h1>
      </motion.header>

      <section className="mx-auto grid w-full max-w-270 grid-cols-1 items-center gap-[clamp(18px,3vw,42px)] sm:grid-cols-2 lg:grid-cols-3" aria-label="GMEA companies">
        {companyList.map((company, index) => (
          <motion.div className="sm:last:col-span-2 sm:last:w-1/2 sm:last:justify-self-center lg:last:col-span-1 lg:last:w-full" key={company.path} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}>
            <Link className="block w-full rounded-2xl focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-blue-600" to={company.path} aria-label={`Open ${company.label}`}>
              <img className="block h-auto w-full rounded-2xl border border-slate-200 shadow-[0_12px_34px_rgba(11,29,46,.08)] transition-shadow hover:shadow-[0_16px_38px_rgba(11,29,46,.12)]" src={company.logo} alt={company.label} />
            </Link>
          </motion.div>
        ))}
      </section>
    </motion.main>
  );
}
