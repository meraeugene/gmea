import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { certificates, companies, electronicsCertificates } from "../data/companies.js";
import { CompanySwitcher } from "../components/CompanySwitcher.jsx";
import { ProductCatalog } from "../components/ProductCatalog.jsx";
import { ProductModal } from "../components/ProductModal.jsx";
import { CertificatesSection } from "../components/CertificatesSection.jsx";
import { SolarProjects } from "../components/SolarProjects.jsx";

export function CompanyPage({ type }) {
  const company = companies[type];
  const [filter, setFilter] = useState(company.filters[0]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = useMemo(
    () => filter.startsWith("All ") ? company.products : company.products.filter((product) => product.category === filter),
    [company.products, filter],
  );

  useEffect(() => {
    setFilter(company.filters[0]);
    setSelectedProduct(null);
  }, [company]);

  return (
    <main className={`company-page company-page--${company.theme} flow-root min-h-screen`}>
      <CompanySwitcher activePath={company.path} />
      <ProductCatalog company={company} filter={filter} products={products} onFilter={setFilter} onSelect={setSelectedProduct} />
      {type === "solar" && <SolarProjects />}
      {type !== "rental" && (
        <CertificatesSection certificates={type === "electronics" ? electronicsCertificates : certificates} />
      )}

      <AnimatePresence>
        {selectedProduct && <ProductModal product={selectedProduct} company={company} onClose={() => setSelectedProduct(null)} />}
      </AnimatePresence>
    </main>
  );
}
