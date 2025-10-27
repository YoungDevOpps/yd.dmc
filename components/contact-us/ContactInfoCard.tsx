import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ContactInfoType } from "@/types/types";
import DynamicIcon from "@/components/DynamicIcon";
import { cn } from "@/lib/utils";

interface ContactInfoCardProps {
  contactCard: ContactInfoType;
}

export default function ContactInfoCard({ contactCard }: ContactInfoCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow group">
      <CardHeader>
        <div
          //   className={`flex items-start space-x-4 group-hover:${contactCard.iconHoverColor}`}
          className={cn(
            "flex items-start space-x-4 transition-colors",
            contactCard.iconHoverColor === "emerald" &&
              "group-hover:text-emerald-600",
            contactCard.iconHoverColor === "violet" &&
              "group-hover:text-violet-600",
            contactCard.iconHoverColor === "orange" &&
              "group-hover:text-orange-600"
          )}
        >
          <span>
            <DynamicIcon iconName={contactCard.icon} />
          </span>
          <h3 className={`text-xl font-semibold`}>{contactCard.label}</h3>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-between flex-1 gap-4">
        <div className="text-gray-600 w-full line-clamp-2">
          {contactCard.description.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
