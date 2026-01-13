"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { IconPlus } from "@tabler/icons-react";
import SectionWrapper from "../SectionWrapper";
import SectionTitle from "../SectionTitle";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();
  return (
    <SectionWrapper id="about" variant="lightBg">
      <SectionTitle title="Qui sommes" highlight="Nous ?" />
      <motion.p
        className="text-justify max-w-3xl mx-auto text-lg leading-relaxed mb-4"
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
      </motion.p>
      <div className="flex items-center justify-center">
        <Button
          className="cursor-pointer text-white"
          onClick={() => {
            router.push("/about");
          }}
        >
          En savoir plus <IconPlus />
        </Button>
      </div>
    </SectionWrapper>
  );
}
