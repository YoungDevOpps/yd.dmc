"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { IconPlus } from "@tabler/icons-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="container py-20 mx-auto px-6 h-[50vh] flex items-center flex-col justify-center gap-4"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-3xl md:text-4xl font-bold mb-2">
          Qui sommes{" "}
          <span className="text-primary group relative">
            Nous ?
            <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary"></span>
          </span>
        </span>
      </motion.h2>
      <motion.p
        className="text-center max-w-3xl mx-auto text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        DM Company est une SA créée à l’initiative de M. DJE Yao Magloire et
        soutenue par une équipe de professionnels de plus de 10ans d’expérience.
        Elle est spécialisée dans les domaines de l’électricité, de
        l’Automatisme et des Risques Industriels. Fort d’un parcours éprouvé, le
        Directeur a été d’abord responsable technique en 2003…
        {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
          "test de lecture de variable d'environnement"}{" "}
      </motion.p>
      <Button className="cursor-pointer text-white">
        En savoir plus <IconPlus />
      </Button>
    </section>
  );
}
