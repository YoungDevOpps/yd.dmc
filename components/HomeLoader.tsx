"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const startTimeout = setTimeout(() => setShowLoader(true), 0); // loader asynchrone
    const hideTimeout = setTimeout(() => {
      setShowLoader(false);
      setShowContent(true); // affiche le contenu après disparition loader
    }, 5000);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(hideTimeout);
    };
  }, [pathname]);

  // Si pas sur la page d'accueil
  if (pathname !== "/") return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-32 h-32 border-4 border-cyan-400 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
