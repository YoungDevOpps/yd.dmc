"use client";
import React from "react";
import navlinks from "@/mock/navlinks.json";
import Image from "next/image";
import DesktopMenu from "@/components/menu/DesktopMenu";
import MobileMenu from "./menu/MobileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  const pathname = usePathname();

  // Effet sticky avec changement de style au scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // ✅ Vérifie dès le chargement de la page
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlinksFiltered = navlinks.filter((item) => item.path !== "/");

  // ❌ Correction ici : on vérifie si un des paths correspond au pathname
  const isHiddenPage = navlinks.some((item) => item.path === pathname);

  if (!isHiddenPage) {
    console.log("Hidden page");
    return null;
  } else {
    console.log("Visible page", pathname);
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-99 transition-all duration-300 text-white ${
        scrolled
          ? "bg-[#006699]/95 shadow-md backdrop-blur-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <Image
            src="/WHITE_LOGO_DMC.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        {/* Bouton burger (mobile) */}
        <MobileMenu items={navlinksFiltered} />

        {/* Liens desktop */}
        <DesktopMenu items={navlinksFiltered} />
      </div>
    </nav>
  );
}
