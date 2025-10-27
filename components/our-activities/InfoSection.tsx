"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconInfoCircle } from "@tabler/icons-react";

export default function InfoSection() {
  return (
    <section
      id="info"
      className="container py-10 mx-auto px-6 flex items-center flex-col justify-center"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-2 text-primary"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <IconInfoCircle className="w-18 h-18 " />
      </motion.h2>
      <motion.p
        className="text-justify max-w-3xl mx-auto text-lg leading-relaxed flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span>
          Notre entreprise bénéficie de la cohésion de ses équipes, d’un
          personnel compétent dans divers domaines, motivé et dynamique. Ceci
          nous permet de développer des activités dont les détails sont donnés
          ci-dessous.
        </span>
      </motion.p>
    </section>
  );
}
