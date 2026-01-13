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
import SectionWrapper from "../SectionWrapper";
import SectionTitle from "../SectionTitle";

export default function ValuesSection() {
  return (
    <SectionWrapper id="values" variant="darkBg">
      <SectionTitle title="Nos" highlight="valeurs" />
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
    </SectionWrapper>
  );
}
