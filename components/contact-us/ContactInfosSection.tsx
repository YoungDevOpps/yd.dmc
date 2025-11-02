"use client";
import contactInfos from "@/mock/infos.json";
import ContactInfoCard from "./ContactInfoCard";
import SectionWrapper from "../SectionWrapper";

export default function ContactInfosSection() {
  return (
    <SectionWrapper id="contact-infos" variant="lightBg" className="min-h-0">
      <div className="px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contactInfos.map((info, index) => (
          <ContactInfoCard key={index} contactCard={info} />
        ))}
      </div>
    </SectionWrapper>
  );
}
