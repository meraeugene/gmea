import { Link } from "react-router-dom";
import { companyList } from "../data/companies.js";

export function CompanySwitcher({ activePath }) {
  return (
    <nav className="sticky top-2 z-40 mx-auto mt-2 w-[calc(100%-24px)] max-w-xl rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-lg backdrop-blur-xl sm:top-4 sm:mt-4 sm:w-fit sm:max-w-[calc(100%-24px)] sm:rounded-full" aria-label="Company navigation">
      <div className="grid grid-cols-3 items-center gap-1 sm:flex">
        {companyList.map((company) => {
          const active = company.path === activePath;
          return (
            <Link
              key={company.path}
              to={company.path}
              aria-current={active ? "page" : undefined}
              className={`min-w-0 rounded-xl px-2 py-2.5 text-center text-[11px] font-extrabold transition-colors sm:shrink-0 sm:rounded-full sm:px-4 sm:text-xs ${active ? "bg-[var(--brand-dark)] text-[var(--active-text)]" : "text-slate-500 hover:bg-slate-100 hover:text-[var(--brand-dark)]"}`}
            >
              <span className="sm:hidden">{company.navLabel.replace("GMEA ", "")}</span>
              <span className="hidden sm:inline">{company.navLabel}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
