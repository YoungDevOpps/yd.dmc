"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
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
          DM COMPANY est une société anonyme fondée par M. DJE Yao Magloire, et
          portée par une équipe de professionnels cumulant plus de dix ans
          d’expérience. L’entreprise est spécialisée dans les domaines de
          l’électricité, de l’automatisme et des risques industriels.
        </span>
        <span>
          Forte d’un parcours solide, son Directeur a débuté comme responsable
          technique dès 2003. Au fil des années, l’entreprise s’est entourée
          d’une équipe jeune, dynamique et hautement professionnelle, forgée par
          les défis et les évolutions technologiques du secteur.
        </span>{" "}
        <span>
          Aujourd’hui, DM COMPANY est le partenaire exclusif en Côte d’Ivoire de
          IFM Electronic, une marque reconnue à l’échelle mondiale. À ce titre,
          nous commercialisons, intégrons et installons l’ensemble de leurs
          solutions et équipements.
        </span>
      </motion.p>
    </SectionWrapper>
  );
}
