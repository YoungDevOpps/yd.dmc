"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { IconSend2 } from "@tabler/icons-react";
import { withMask } from "use-mask-input";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import React from "react";

const maxLengthMsg = 250;

// ✅ Schéma Zod corrigé
const formSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty("Name is required.")
    .min(2, "Name must be at least 2 characters."),
  companyName: z
    .string()
    .trim()
    .nonempty("Company name is required.")
    .min(2, "Company name must be at least 2 characters."), // correction du message
  email: z
    .string()
    .trim()
    .nonempty("Email is required.")
    .refine(
      (emailValue) =>
        /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i.test(
          emailValue
        ),
      "Invalid email address."
    ),
  phone: z
    .string()
    .trim()
    .refine(
      (phoneVal) =>
        /^\+225\s?(?:\d{2}\s?\d{3}\s?\d{3}\s?\d{2})$/.test(
          phoneVal.replace(/\s+/g, "")
        ) && !phoneVal.includes("_"),
      "Invalid phone number format. Expected +225 XX XXX XXX XX"
    ),
  subject: z
    .string()
    .trim()
    .nonempty("Subject is required.")
    .min(2, "Subject must be at least 2 characters."),
  message: z
    .string()
    .trim()
    .nonempty("Message is required.")
    .min(2, "Message must be at least 2 characters.")
    .max(maxLengthMsg, `Message must be at most ${maxLengthMsg} characters.`),
});

export default function ContactUsForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  React.useEffect(() => {
    if (executeRecaptcha) {
      console.log("✅ reCAPTCHA v3 chargé et prêt !");
    } else {
      console.warn("⚠️ reCAPTCHA pas encore prêt.");
    }
  }, [executeRecaptcha]);

  const form = useForm({
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validators: { onSubmit: formSchema },

    // ✅ Fonction de soumission améliorée
    onSubmit: async ({ value }) => {
      try {
        if (!executeRecaptcha) {
          toast.error(
            "reCAPTCHA non chargé. Réessayez dans quelques secondes."
          );
          return;
        }

        const token = await executeRecaptcha("contactUs");

        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...value, token }),
        });

        if (!res.ok) {
          const { error } = await res.json();
          console.log("error", error);
          throw new Error(error || "Une erreur est survenue lors de l'envoi.");
        }

        toast.success("Message envoyé avec succès !");
        form.reset(); // 🔹 reset du formulaire après succès
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "Erreur inconnue lors de l'envoi du message.";
        toast.error(message);
      }
    },
  });

  return (
    <div>
      <motion.h2
        className="text-3xl text-center mb-8 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-3xl md:text-4xl font-bold mb-2">
          Dites-nous ce dont vous avez besoin
        </span>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Accédez à tous nos documents officiels, guides et ressources
        </p>
      </motion.h2>

      <form
        id="contactUs"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
        {/* Nom + Entreprise */}
        <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nom */}
          <form.Field
            name="name"
            validators={{ onSubmit: formSchema.shape.name }}
          >
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Saisir votre nom"
                    autoComplete="off"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          {/* Entreprise */}
          <form.Field
            name="companyName"
            validators={{ onSubmit: formSchema.shape.companyName }}
          >
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Company name</FieldLabel>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Saisir le nom de votre entreprise"
                    autoComplete="off"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
        </FieldGroup>

        {/* Email + Téléphone */}
        <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email */}
          <form.Field
            name="email"
            validators={{ onSubmit: formSchema.shape.email }}
          >
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Saisir votre email"
                    autoComplete="off"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          {/* Téléphone */}
          <form.Field
            name="phone"
            validators={{ onSubmit: formSchema.shape.phone }}
          >
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>
                    Phone (+225 XX XXX XXX XXX)
                  </FieldLabel>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Saisir votre numéro de téléphone"
                    autoComplete="off"
                    ref={withMask("+225 99 999 999 99", {
                      placeholder: "_",
                      showMaskOnHover: true,
                    })}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
        </FieldGroup>

        {/* Sujet */}
        <FieldGroup>
          <form.Field
            name="subject"
            validators={{ onSubmit: formSchema.shape.subject }}
          >
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Subject</FieldLabel>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Saisir le sujet de votre message"
                    autoComplete="off"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
        </FieldGroup>

        {/* Message */}
        <FieldGroup>
          <form.Field
            name="message"
            validators={{ onSubmit: formSchema.shape.message }}
          >
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Message</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      id={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        if (newValue.length <= maxLengthMsg) {
                          field.handleChange(newValue);
                        }
                      }}
                      placeholder="Je dois développer un projet et je voudrais votre avis d'expert."
                      rows={6}
                      className="min-h-28 max-h-28 resize-none overflow-auto"
                      aria-invalid={isInvalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.state.value.length}/{maxLengthMsg} caractères
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
        </FieldGroup>

        {/* Bouton d'envoi */}
        <div className="flex justify-center">
          <Field orientation="horizontal">
            <Button type="submit" form="contactUs">
              Envoyer
              <IconSend2 className="ml-2" />
            </Button>
          </Field>
        </div>
      </form>
    </div>
  );
}
