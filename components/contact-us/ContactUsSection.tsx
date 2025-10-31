"use client";
import ContactUsForm from "./ContactUsForm";

export default function ContactUsSection() {
  return (
    <section id="contact-us" className="min-h-[80vh]">
      <div className="flex flex-col lg:flex-row items-center justify-center h-full">
        <div className="w-full lg:w-2/3 h-full p-15">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}
