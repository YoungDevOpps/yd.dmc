"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import values from "@/mock/values.json";
import DynamicIcon from "../DynamicIcon";

export default function ValuesSection() {
  return (
    <section
      id="values"
      className="container py-20 mx-auto px-6 min-h-[50vh] flex items-center flex-col justify-center gap-4"
    >
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
            valeurs
            <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary"></span>
          </span>
        </span>
      </motion.h2>
      <motion.div
        className="text-justify w-full md:w-3xl mx-auto text-lg leading-relaxed flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {values.map((item) => (
            <AccordionItem value={`item-${item.id}`} key={item.id}>
              <AccordionTrigger className="w-full">
                <span className="flex items-center gap-4">
                  <DynamicIcon iconName={item.icon} /> {item.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="w-full px-10">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
