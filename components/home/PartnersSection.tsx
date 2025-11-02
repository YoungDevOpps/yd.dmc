"use client";
import React from "react";
import { motion } from "framer-motion";
import partners from "@/mock/partners.json";
import SectionWrapper from "../SectionWrapper";
import SectionTitle from "../SectionTitle";

export default function PartnersSection() {
  return (
    <SectionWrapper id="partners" variant="lightBg">
      <SectionTitle title="Ils nous font" highlight="de confiance" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 place-items-center">
        {partners.map((partner, i) => (
          <motion.img
            key={i}
            src={"/partners/" + partner.id + ".png"}
            alt="Partenaire"
            className="h-16 grayscale hover:grayscale-0 transition"
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
