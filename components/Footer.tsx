"use client";
import { usePathname } from "next/navigation";
import navlinks from "@/mock/navlinks.json";

export default function Footer() {
  const pathname = usePathname();

  // ❌ Correction ici : on vérifie si un des paths correspond au pathname
  const isHiddenPage = navlinks.some((item) => item.path === pathname);

  if (!isHiddenPage) return null;

  return (
    <footer className="bg-[#006699] text-white py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} DM COMPANY - Tous droits réservés.
      </p>
    </footer>
  );
}
