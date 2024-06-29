import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import background from "./images/bg-image.jpg";
import Navbar from "./navbar/navbar";

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
          <div className="border border-1 border-gray-500 p-10 rounded-sm h-[calc(100vh-80px)]">
            <p className="font-barlow text-6xl">Aaron Clark</p>
            <p className="font-barlow text-lg pb-6">Developer</p>
            <main className="grid lg:grid-cols-2 grid-cols-2">
              <Navbar />
              {children}
              {/* /Work out the image later zz */}
              {/* <Image
                className="-z-10 opacity-80 h-[calc(100vh-80px)]"
                alt="Background"
                src={background}
                placeholder="blur"
                fill
                style={{
                  objectFit: "cover",
                }}
              /> */}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
