"use client";
import { motion } from "framer-motion";
export default function StorySection() {
  return (
    <section
      id="about"
      className="container py-20 mx-auto px-6 min-h-[50vh] flex items-center flex-col justify-center gap-4"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-3xl md:text-4xl font-bold mb-2">
          Petite{" "}
          <span className="text-primary group relative">
            histoire
            <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary"></span>
          </span>
        </span>
      </motion.h2>
      <motion.p
        className="text-justify max-w-3xl mx-auto text-lg leading-relaxed flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span>
          DM COMPANY est une SA créée à l’initiative de M DJE Yao Magloire et
          soutenue par une équipe de professionnels de plus de 10ans
          d’expérience. Elle est spécialisée dans les domaines de l’électricité,
          de l’Automatisme et des Risques Industriels. Fort d’un parcours
          éprouvé, le Directeur a été d’abord responsable technique en 2003.
          Depuis quelques années, une équipe dynamique et professionnelle de
          jeunes été consolidée par les défis des avancées technologiques.
        </span>
        <span>
          Aujourd’hui partenaire exclusif en Côte d’Ivoire reconnu mondialement
          de IFM electronic, nous commercialisons et installons le matériels de
          cette marque.
        </span>
      </motion.p>
    </section>
  );
}
