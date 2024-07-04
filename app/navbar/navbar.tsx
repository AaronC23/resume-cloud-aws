"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Navigation {
  name: string;
  link: string;
}

export default function Navbar() {
  const pathname = usePathname();

  const navMap: Navigation[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Project (s)",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="z-50">
      <div className="font-barlow font-bold container h-full">
        <div className="flex md:flex-col items-start h-full">
          <ul className="hidden md:block space-y-4">
            {navMap.map((page, index) => {
              if (pathname === page.link) {
                return (
                  <li key={index}>
                    <Link
                      key={index}
                      href={page.link}
                      className="pointer-events-none"
                    >
                      <p className="text-gray-400">&bull;</p>
                    </Link>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <Link key={index} className="hoverLink" href={page.link}>
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
