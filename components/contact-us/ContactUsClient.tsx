"use client";
import ReCaptchaProviderClient from "@/components/ReCaptchaProviderClient";
import ContactUsForm from "@/components/contact-us/ContactUsForm";

export default function ContactUsClient() {
  return (
    <section id="contact-us" className="container mx-auto px-6 md:px-54 py-20">
      <ReCaptchaProviderClient>
        <ContactUsForm />
      </ReCaptchaProviderClient>
    </section>
  );
}
