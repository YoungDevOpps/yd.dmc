"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import activities from "@/mock/activities.json";
import { Button } from "../ui/button";
import { IconCheck, IconEye, IconX } from "@tabler/icons-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ActivityDetailsSheetProps {
  activityId: string;
}

export default function ActivityDetailsSheet({
  activityId,
}: ActivityDetailsSheetProps) {
  const isModile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const activity = activities.find((act) => act.id === activityId);

  if (!activity) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="font-semibold">
          Voir les détails <IconEye />
        </Button>
      </SheetTrigger>
      <SheetContent
        className={`z-99 p-6 max-w-lg bg-white shadow-xl ${
          isModile && "w-full"
        }`}
      >
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">
            {activity.title}
          </SheetTitle>
          <SheetDescription className="text-gray-600 mb-6">
            {activity.description}
          </SheetDescription>
        </SheetHeader>

        {/* Liste des détails */}
        <ul className="space-y-4">
          {activity.details.map((detail) => (
            <li
              key={detail.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <IconCheck className="h-5 w-5 text-green-500 mt-1" />
              <p className="text-gray-700">{detail.description}</p>
            </li>
          ))}
        </ul>
        {/* Bouton de fermeture */}
        <div className="mt-6 flex justify-end">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            <IconX className="h-5 w-5 mr-2" /> Fermer
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
