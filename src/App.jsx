import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { IntroSplash } from "./pages/IntroSplash.jsx";
import { ServicesPage } from "./pages/ServicesPage.jsx";
import { CompanyPage } from "./pages/CompanyPage.jsx";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: location.pathname === "/services" ? 0.55 : 0.32, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<IntroSplash />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/electronics" element={<CompanyPage type="electronics" />} />
          <Route path="/solar" element={<CompanyPage type="solar" />} />
          <Route path="/rental" element={<CompanyPage type="rental" />} />
          <Route path="/cctv" element={<Navigate to="/electronics" replace />} />
          <Route path="*" element={<Navigate to="/services" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export function App() {
  return <BrowserRouter><Pages /></BrowserRouter>;
}
