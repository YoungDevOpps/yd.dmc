import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu3 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";

interface navlinksProps {
  path: string;
  label: string;
}

export default function MobileMenu({ items }: { items: navlinksProps[] }) {
  const pathname = usePathname();
  const isModile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden cursor-pointer p-0 h-12 w-12 text-white!">
          <IconMenu3 className="h-8 w-8" />
        </button>
      </SheetTrigger>
      <SheetContent className={`z-99 ${isModile && "w-[95%]"}`}>
        <SheetHeader>
          <SheetTitle>
            <Image src="/LOGO_DMC.png" alt="Logo" width={100} height={100} />
          </SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-4 px-4">
          {items.map((item, index) => (
            <div className="" key={index}>
              <Link
                href={item.path}
                className={`text-lg font-medium px-4 py-2 rounded-lg hover:bg-white/10 hover:text-primary hover:font-semibold transition-colors duration-200 ease-in uppercase ${
                  pathname === item.path ? "text-primary font-semibold" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
        <SheetFooter className="text-center">
          <p>&copy; {new Date().getFullYear()} DMC - Tous droits réservés.</p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
