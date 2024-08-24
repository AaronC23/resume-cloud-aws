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
      name: "Tech Stack",
      link: "/techstack",
    },
  ];

  return (
    <div className="font-bold scrollable scrollbar-hide h-[calc(100vh-170px)] s:h-[calc(100vh-200px)] md:h-[calc(100vh-240px)] lg:h-[calc(100vh-260px)] xl:h-[calc(100vh-280px)] 2xl:h-[calc(100vh-300px)]">
      <ul className="text-xxs s:text-xs sm:text-sm md:text-m lg:text-base xl:text-l 2xl:text-xl space-y-1 sm:space-y-2 md:space-y-3 xl:space-y-4 md:block">
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
  );
}
