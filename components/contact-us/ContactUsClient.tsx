"use client";
import ReCaptchaProviderClient from "../ReCaptchaProviderClient";
import ContactUsForm from "./ContactUsForm";

export default function ContactUsClient() {
  return (
    <ReCaptchaProviderClient>
      <ContactUsForm />
    </ReCaptchaProviderClient>
  );
}
