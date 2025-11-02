"use client";
import { motion } from "framer-motion";
import targets from "@/mock/objectifs.json";
import { IconTargetArrow } from "@tabler/icons-react";
import SectionWrapper from "../SectionWrapper";
import SectionTitle from "../SectionTitle";

export default function TargetSection() {
  return (
    <SectionWrapper id="target" variant="darkBg">
      <div className="mx-auto px-0 md:px-30 xl:px-50">
        <SectionTitle title="Nos" highlight="missions" />

        <motion.div
          className="text-justify max-w-3xl mx-auto text-lg leading-relaxed flex flex-col gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span>
            DM COMPANY s’est spécialisée dans l’électricité HTA et BT. Elle
            développe essentiellement dans des projets d’installation
            industrielle et tertiaire, d’automatisme (Schneider Electric et
            Siemens), informatique et des études de projets (CCTP,
            Budgétisation, schémas électriques, liste de matériel). Elle innove
            à travers des solutions de câblage simple, des systèmes de
            diagnostic de machine performants, adaptés et encore méconnus du
            marché national. Elle forme également à l’utilisation des ces
            produits.
          </span>
          <span>Les objectif qu’elle vise sont:</span>
          <ul>
            {targets.map((target) => (
              <li key={target.id} className="flex items-center gap-2">
                <span>
                  <IconTargetArrow />
                </span>
                {target.title}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
