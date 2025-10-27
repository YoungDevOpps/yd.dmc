"use client";
import contactInfos from "@/mock/infos.json";
import ContactInfoCard from "./ContactInfoCard";
import { motion } from "framer-motion";
import { IconInfoCircle } from "@tabler/icons-react";

export default function ContactInfosSection() {
  return (
    <section
      id="contact-infos"
      className="container py-20 mx-auto px-6 h-fit flex items-center flex-col justify-start gap-4 "
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-2 text-primary"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <IconInfoCircle className="w-18 h-18 " />
      </motion.h2>
      <div className="px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contactInfos.map((info, index) => (
          <ContactInfoCard key={index} contactCard={info} />
        ))}
      </div>
    </section>
  );
}
