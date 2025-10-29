import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import "./style.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "@/components/Navbar";

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "DM COMPANY | Génie Électrique, Automatisme Industriel & Sécurité",
  description:
    "DM COMPANY est une entreprise ivoirienne spécialisée dans l'électricité, l'automatisme industriel et les systèmes de sécurité. Forte de plus de 10 ans d'expérience, elle offre des solutions innovantes aux entreprises locales et internationales.",
  keywords: [
    "DM COMPANY",
    "électricité industrielle",
    "automatisme industriel",
    "sécurité incendie",
    "vidéo surveillance",
    "contrôle d'accès",
    "instrumentation",
    "paratonnerre",
    "signalisation industrielle",
    "Côte d'Ivoire",
  ],
  authors: [{ name: "DM COMPANY", url: "https://dmc-ci.com" }],
  creator: "DM COMPANY",
  publisher: "DM COMPANY",
  metadataBase: new URL("https://dmc-ci.com"),
  alternates: {
    canonical: "https://dmc-ci.com",
  },
  openGraph: {
    title: "DM COMPANY | Génie Électrique, Automatisme Industriel & Sécurité",
    description:
      "Découvrez DM COMPANY, votre partenaire en génie électrique, automatisme industriel et sécurité, offrant des solutions sur mesure pour vos projets.",
    url: "https://dmc-ci.com",
    siteName: "DM COMPANY",
    images: [
      {
        url: "https://dmc-ci.com/og-image.jpg", // Remplacez par l'URL réelle de l'image
        width: 1200,
        height: 630,
        alt: "DM COMPANY - Génie Électrique et Automatisme Industriel",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DM COMPANY",
    url: "https://dmc-ci.com",
    logo: "https://dmc-ci.com/logo.png",
    description:
      "DM COMPANY est une entreprise spécialisée dans l'électricité industrielle, l'automatisme et les systèmes de sécurité.",
    sameAs: [
      "https://www.linkedin.com/company/dm-company",
      "https://www.facebook.com/dmcentreprise",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+225 27 21 28 04 72",
      contactType: "Service client",
      areaServed: "CI",
      availableLanguage: "French",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${comicNeue.className} antialiased`}>{children}</body>
    </html>
  );
}
