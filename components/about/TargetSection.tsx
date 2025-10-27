"use client";
import { motion } from "framer-motion";
import targets from "@/mock/objectifs.json";
import { IconTargetArrow } from "@tabler/icons-react";

export default function TargetSection() {
  return (
    <section
      id="target"
      className="container py-20 mx-auto px-6 min-h-[50vh] flex items-center flex-col justify-center gap-4 bg-gray-100"
    >
      <div className="mx-auto px-0 md:px-30 xl:px-50">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-3xl md:text-4xl font-bold mb-2">
            Nos{" "}
            <span className="text-primary group relative">
              missions et objectifs
              <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary"></span>
            </span>
          </span>
        </motion.h2>

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
    </section>
  );
}
