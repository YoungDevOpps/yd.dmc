import Link from "next/link";
import { usePathname } from "next/navigation";

interface navlinksProps {
  path: string;
  label: string;
}

export default function DesktopMenu({ items }: { items: navlinksProps[] }) {
  const pathname = usePathname();
  return (
    <ul className="hidden md:flex space-x-6">
      {items.map((item, i) => (
        <li key={i} className="group relative pb-1 ">
          <Link className="relative" href={item.path}>
            {item.label}
          </Link>
          {/* Barre active */}
          {pathname === item.path && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-background"></div>
          )}

          {/* Animation double ligne */}
          <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-background transition-all duration-300 group-hover:left-0 group-hover:w-full transform -translate-x-1/2 group-hover:translate-x-0"></div>
          <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-background/50 transition-all duration-500 group-hover:left-0 group-hover:w-full transform -translate-x-1/2 group-hover:translate-x-0 delay-100"></div>
        </li>
      ))}
    </ul>
  );
}
