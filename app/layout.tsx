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
        <div className="p-10">
          <div className="border border-1 border-gray-500 p-10 rounded-sm h-[calc(100vh-80px)] relative">
            <p className="font-barlow text-2xl md:text-5xl lg:text-6xl">
              Aaron Clark
            </p>
            <p className="font-barlow text-sm md:text-lg pb-6">Developer</p>
            <main className="scrollable grid grid-cols-1 gap-20 md:grid-cols-2">
              <Navbar />
              {children}
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
        </div>
      </body>
    </html>
  );
}
