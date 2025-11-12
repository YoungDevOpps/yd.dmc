"use client";
import ReCaptchaProviderClient from "@/components/ReCaptchaProviderClient";
import ContactUsForm from "@/components/contact-us/ContactUsForm";
import SectionWrapper from "../SectionWrapper";

export default function ContactUsClient() {
  return (
    <SectionWrapper id="contact-us" variant="lightBg" className="">
      <ReCaptchaProviderClient>
        <ContactUsForm />
      </ReCaptchaProviderClient>
    </SectionWrapper>
  );
}
