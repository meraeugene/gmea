import { Link } from "react-router-dom";
import { companyList } from "../data/companies.js";

export function CompanySwitcher({ activePath }) {
  return (
    <nav className="scrollbar-none sticky top-4 z-40 mx-auto mt-4 w-fit max-w-[calc(100%-24px)] overflow-x-auto rounded-full border border-slate-200 bg-white/95 p-1.5 shadow-lg backdrop-blur-xl" aria-label="Company navigation">
      <div className="flex items-center gap-1">
        {companyList.map((company) => {
          const active = company.path === activePath;
          return (
            <Link
              key={company.path}
              to={company.path}
              className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-extrabold transition-colors ${active ? "bg-[var(--brand-dark)] text-[var(--active-text)]" : "text-slate-500 hover:bg-slate-100 hover:text-[var(--brand-dark)]"}`}
            >
              {company.navLabel}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
