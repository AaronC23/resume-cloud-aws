"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Navigation {
  name: string;
  link: string;
}

export default function Navbar() {
  const pathname = usePathname();

  const [name, setName] = useState("");
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
      <div className="flex flex-col items-start font-barlow space-y-4">
        {navMap.map((page, index) => {
          if (pathname === page.link) {
            return (
              <Link key={index} href={page.link}>
                <p className="font-bold">.</p>
              </Link>
            );
          }
          return (
            <Link key={index} href={page.link}>
              {page.name}
            </Link>
          );
        })}
      </div>
    </>
    // </div>
  );
}
