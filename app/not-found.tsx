"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    // <main className="min-h-screen bg-white flex items-center justify-center p-6">
    <main className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      {/* background floating orbs */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-32 -top-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.7, 0.4, 0.7],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-40 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            opacity: [0.8, 0.45, 0.8],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 -bottom-20 -translate-x-1/2 w-96 h-96 rounded-full bg-amber-400/10 blur-2xl"
          animate={{ scale: [1, 1.06, 1], opacity: [0.85, 0.55, 0.85] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <section className="relative max-w-4xl w-full bg-linear-to-tr from-slate-900/60 via-slate-800/60 to-slate-900/70 backdrop-blur-md border border-slate-700/40 rounded-2xl p-10 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            {/* animated spaceship/ghost SVG */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="w-48 h-48"
              initial={{ rotate: -6 }}
              animate={{ rotate: [-6, 6, -6] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <g transform="translate(100,100)">
                <motion.ellipse
                  cx="0"
                  cy="38"
                  rx="46"
                  ry="8"
                  fill="rgba(255,255,255,0.06)"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                />

                <motion.path
                  d="M-48 -10 C-42 -40 42 -40 48 -10 C36 -2 24 -4 0 -4 C-24 -4 -36 -2 -48 -10 Z"
                  fill="url(#g)"
                />

                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>
                </defs>

                <motion.circle
                  cx="0"
                  cy="-8"
                  r="22"
                  fill="#0EA5A4"
                  initial={{ y: -6 }}
                  animate={{ y: [-6, 6, -6], scale: [1, 0.98, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                />
              </g>
            </motion.svg>
          </motion.div>

          <div className="text-center md:text-left">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white to-slate-200 drop-shadow-md"
            >
              404
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-lg text-slate-300 max-w-xl"
            >
              {
                "Oups — la page que tu cherches n'existe plus ou a été déplacée."
              }
            </motion.p>

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.35 }}
              className="mt-6 flex flex-col sm:flex-row gap-3"
            >
              <Button
                size={"lg"}
                onClick={() => {
                  router.push("/");
                }}
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-linear-to-r from-primary to-blue-900 text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-transform cursor-pointer"
              >
                {"Retour à l'accueil"}
              </Button>

              <Button
                size={"lg"}
                onClick={() => {
                  router.back();
                }}
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-transparent border border-slate-500 text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-transform hover:bg-transparent cursor-pointer"
              >
                Retour sur la page précédente
              </Button>
            </motion.div>

            {/* <motion.div
              className="mt-6 text-sm text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              Astuce : teste aussi la recherche — elle est parfois plus fiable
              que les cartes stellaires.
            </motion.div> */}
          </div>
        </div>

        {/* decorative footer small stars */}
        <div className="mt-8 grid grid-cols-8 gap-2 opacity-60">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              className="h-1 rounded-full bg-white/10"
              animate={{ scaleX: [0.6, 1.3, 0.6], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
