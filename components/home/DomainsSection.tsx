"use client";
import React from "react";
import domains from "@/mock/domains.json";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import SectionWrapper from "../SectionWrapper";
import SectionTitle from "../SectionTitle";

export default function DomainsSection() {
  return (
    <SectionWrapper id="domains" variant="darkBg">
      <div className="container mx-auto px-10 md:px-30 xl:px-50">
        <SectionTitle
          title="Nos"
          highlight="domaines"
          desc="Découvrez notre expertise à travers différents domaines d’intervention."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain) => (
            <Card
              key={domain.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative w-full h-24">
                <Image
                  src={"/domains/" + domain.image}
                  alt={domain.name}
                  fill
                  className="object-contain"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="uppercase text-sm font-semibold group-hover:text-primary">
                  {domain.name}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
