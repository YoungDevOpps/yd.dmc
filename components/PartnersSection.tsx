"use client";
import React from "react";
import { motion } from "framer-motion";
import partners from "@/mock/partners.json";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 container mx-auto px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Ils nous font{" "}
          <span className="text-primary group relative">
            confiance{" "}
            <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary"></span>
          </span>
        </h2>
        <p className="text-gray-600">
          Découvrez notre expertise à travers différents domaines
          d’intervention.
        </p>
      </div>
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
    </section>
  );
}
