"use client";
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import SectionTitle from "../SectionTitle";
export default function StorySection() {
  return (
    <SectionWrapper id="about" variant="lightBg">
      <SectionTitle title="Notre" highlight="histoire" />
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
    </SectionWrapper>
  );
}
