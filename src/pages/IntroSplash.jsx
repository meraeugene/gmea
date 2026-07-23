import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function IntroSplash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = window.setTimeout(() => navigate("/services", { replace: true }), 2800);
    return () => window.clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="grid min-h-screen min-h-dvh w-full place-items-center overflow-hidden bg-white px-6" aria-label="GMEA loading screen">
      <motion.img
        className="block h-auto w-[min(620px,82vw)] sm:w-[min(620px,72vw)]"
        src="/assets/gmea-logo.jpg"
        alt="GMEA"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.98, 1, 1, 1] }}
        transition={{ duration: 2.6, times: [0, 0.28, 0.74, 1], ease: "easeInOut" }}
      />
    </main>
  );
}
