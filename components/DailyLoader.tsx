"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function DailyLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const today = new Date().toDateString();

  // Loader initialement visible uniquement si jamais vu aujourd'hui
  const [showLoader, setShowLoader] = useState(() => {
    if (pathname !== "/") return false;
    const lastVisit = localStorage.getItem("lastVisit");
    return lastVisit !== today;
  });

  useEffect(() => {
    if (!showLoader) return;

    // On marque la visite aujourd'hui
    localStorage.setItem("lastVisit", today);

    // Masquer le loader après 5 secondes
    const timeout = setTimeout(() => setShowLoader(false), 5000);
    return () => clearTimeout(timeout);
  }, [showLoader, today]);

  // Si pas de loader ou pas sur la page d'accueil
  if (pathname !== "/" || !showLoader) return <>{children}</>;

  // Loader stylé simple (tu pourras remplacer par arcs électriques)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <motion.div
        className="w-32 h-32 border-4 border-cyan-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}
