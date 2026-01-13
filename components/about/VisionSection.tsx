"use client";
import React from "react";
import SectionWrapper from "../SectionWrapper";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { BadgeCheck } from "lucide-react";

export default function VisionSection() {
  return (
    <SectionWrapper id="target" variant="darkBg">
      <SectionTitle title="Notre " highlight="Vision" />
      <motion.div
        className="text-justify max-w-3xl mx-auto text-lg leading-relaxed flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span>
          Notre entreprise spécialisée en électricité s’engage à être bien plus
          qu’un prestataire technique, un partenaire stratégique pour nos
          clients. Notre vision repose sur ces piliers essentiels :
        </span>
        <ul>
          <li className="flex gap-2">
            <span>
              <BadgeCheck />
            </span>
            <p>
              <span className="font-bold">
                Réactivité, fiabilité et sécurité :{" "}
              </span>
              garantir des installations électriques conformes aux normes les
              plus exigeantes, en mettant la sécurité des personnes et des
              infrastructures au cœur de nos interventions.
            </p>
          </li>
          <li className="flex gap-2">
            <span>
              <BadgeCheck />
            </span>
            <p>
              <span className="font-bold">Durabilité et responsabilité : </span>
              contribuer à un avenir énergétique responsable en optimisant la
              consommation, en réduisant les risques et en favorisant des
              solutions respectueuses de l’environnement.
            </p>
          </li>
          <li className="flex gap-2">
            <span>
              <BadgeCheck />
            </span>
            <p>
              <span className="font-bold">Innovation et performance : </span>
              intégrer les meilleures technologies et pratiques pour offrir des
              solutions modernes, efficaces et durables, capables de répondre
              aux défis industriels d’aujourd’hui et de demain.
            </p>
          </li>
        </ul>
        <span>
          Nous croyons que l’électricité est bien plus qu’une ressource, c’est
          un vecteur de développement, de croissance et de transformation. Notre
          vision est de mettre notre expertise au service de projets qui allient
          efficacité, sécurité et innovation, afin d’accompagner nos partenaires
          vers un avenir plus sûr et durable.
        </span>
      </motion.div>
    </SectionWrapper>
  );
}
