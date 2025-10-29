"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Toaster } from "sonner";

export default function ToasterSonner() {
  const { theme } = useTheme();
  return (
    <div>
      <Toaster
        position="top-center"
        expand={false}
        richColors
        theme={theme ? (theme === "dark" ? "dark" : "light") : "light"}
        closeButton
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
}
