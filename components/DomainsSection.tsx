"use client";
import React from "react";
import domains from "@/mock/domains.json";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function DomainsSection() {
  return (
    <section id="domains" className="mx-auto min-h-[50vh] py-16 bg-gray-100">
      <div className="container mx-auto px-10 md:px-30 xl:px-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Nos{" "}
            <span className="text-primary group relative">
              Services{" "}
              <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary"></span>
            </span>
          </h2>
          <p className="text-gray-600">
            Découvrez notre expertise à travers différents domaines
            d’intervention.
          </p>
        </div>
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
    </section>
  );
}
