import TargetSection from "@/components/about/TargetSection";
import ValuesSection from "@/components/about/ValuesSection";
import CarouselSection from "@/components/CarouselSection";
import DocumentsSection from "@/components/about/DocumentsSection";
import { Metadata } from "next";
import StorySection from "@/components/about/StorySection";
import VisionSection from "@/components/about/VisionSection";

export const metadata: Metadata = {
  title: "À propos | DM COMPANY",
  description:
    "Apprenez plus sur notre entreprise en parcourant notre page à propos.",
};

export default function AboutPage() {
  return (
    <>
      <CarouselSection
        title="À propos"
        description="Apprenez plus sur notre entreprise en parcourant notre page à propos."
      />

      {/* STORY SECTION */}
      <StorySection />

      {/* VISION SECTION */}
      <VisionSection />

      {/* TARGET SECTION */}
      <TargetSection />

      {/* VALUES SECTION */}
      <ValuesSection />

      {/* DOCUMENTS SECTION */}
      <DocumentsSection />
    </>
  );
}
