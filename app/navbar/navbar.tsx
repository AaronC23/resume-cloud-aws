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
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <p className="font-barlow text-6xl">Aaron Clark</p>
      <p className="font-barlow text-lg pb-6">Developer</p>
      <div className="font-barlow container h-full">
        <div className="flex flex-col justify-between items-start h-full">
          <ul className="hidden md:block gap-y-4 text-white">
            {navMap.map((page, index) => {
              if (pathname === page.link) {
                return (
                  <li key={index}>
                    <Link key={index} href={page.link}>
                      <p className="font-bold">.</p>
                    </Link>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <Link key={index} href={page.link}>
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
