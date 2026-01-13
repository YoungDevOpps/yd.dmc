"use client";
import { motion } from "framer-motion";
import targets from "@/mock/objectifs.json";
import { IconTargetArrow } from "@tabler/icons-react";
import SectionWrapper from "../SectionWrapper";
import SectionTitle from "../SectionTitle";
import { BadgeCheck } from "lucide-react";

export default function TargetSection() {
  return (
    <SectionWrapper id="target" variant="lightBg">
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
            DM COMPANY est spécialisée dans l’électricité HTA et BT. Elle
            développe :
          </span>
          <ul className="">
            <li className="flex items-start gap-2">
              <span>
                <BadgeCheck />
              </span>
              Des projets d’installation industrielle, tertiaire
            </li>
            <li className="flex items-start gap-2">
              <span>
                <BadgeCheck />
              </span>
              Des projets d’automatisme (Schneider Electric et Siemens)
            </li>
            <li className="flex items-start gap-2">
              <span>
                <BadgeCheck />
              </span>
              De courant faible (réseau informatique, téléphonique, vidéo
              surveillance, contrôle d’accès et système de sécurité incendie)
            </li>
            <li className="flex items-start gap-2">
              <span>
                <BadgeCheck />
              </span>
              Des études de projets (CCTP, Budgétisation, schémas électriques,
              liste de matériel).
            </li>
          </ul>
          <span>Nos principales missions sont de :</span>
          <ul>
            {targets.map((target) => (
              <li key={target.id} className="flex items-center gap-2">
                <span>
                  <IconTargetArrow className="" />
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
