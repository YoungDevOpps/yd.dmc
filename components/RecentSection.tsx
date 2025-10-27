import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RecentSection() {
  return (
    <section id="activities" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#006699]">
          Activités récentes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((a) => (
            <motion.div
              key={a}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
              whileHover={{ y: -5 }}
            >
              <Image
                fill
                alt="Activité"
                src={`/images/activity${a}.jpg`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Projet #{a}</h3>
                <p>
                  Découvrez nos dernières réalisations dans le domaine du
                  digital et de l’innovation.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
