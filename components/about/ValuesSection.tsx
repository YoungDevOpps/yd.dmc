"use client";
import { motion } from "framer-motion";
import values from "@/mock/values.json";
import SectionWrapper from "../SectionWrapper";
import SectionTitle from "../SectionTitle";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

export default function ValuesSection() {
  return (
    <SectionWrapper id="values" variant="darkBg">
      <div className="container mx-auto px-10 md:px-30 xl:px-50">
        <SectionTitle title="Nos" highlight="valeurs" />
        <motion.div
          className="text-justify w-full  mx-auto text-lg leading-relaxed grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {values.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative w-full h-24">
                <Image
                  src={"/values/" + item.id + "." + item.ext}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="uppercase text-sm font-semibold group-hover:text-primary">
                  {item.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
