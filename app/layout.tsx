import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import background from "./images/bg-image-2.jpg";
import Navbar from "./navbar/navbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello @ Aaron Clark",
  description: "Aaron Clark Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-10 font-barlow">
          <div className="border border-1 border-gray-500 p-5 md:p-10 rounded-sm h-[calc(100vh-90px)]">
            <p className="text-base sm:text-2xl md:text-5xl lg:text-6xl">
              Aaron Clark
            </p>
            <p className="text-xs md:text-lg pb-3 md:pb-6">Developer</p>
            <main className="grid grid-cols-3 gap-10 h-[calc(100vh-170px)]">
              <div className="col-span-1">
                <Navbar />
              </div>
              <div className="col-span-2">{children}</div>
              <Image
                className="-z-10 opacity-60"
                alt="Background"
                src={background}
                layout="fill"
                placeholder="blur"
                style={{
                  objectFit: "cover",
                }}
              />
            </main>
          </div>
          <div className="text-xs text-right">
            Developed in NextJS, TailwindCSS and deployed with AWS.
          </div>
        </div>
      </body>
    </html>
  );
}
