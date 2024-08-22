import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import background from "./images/bg-image-2.jpg";
import Navbar from "./navbar/navbar";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const inter = Inter({ subsets: ["latin"] });
config.autoAddCss = false;

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
          <div className="border border-1 border-gray-500 p-5 md:p-7 rounded-sm h-[calc(100vh-90px)] s:h-[calc(100vh-100px)] lg:h-[calc(100vh-110px)]">
            <p className="text-m xs:text-base s:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Aaron Clark
            </p>
            <p className="text-xxs xs:text-xs sm:text-m s:text-sm md:text-base lg:text-l xl:text-xl 2xl:text-2xl pb-3 md:pb-6">
              Developer
            </p>
            <main className="grid grid-cols-3 gap-10 h-[calc(100vh-170px)] lg:h-[calc(100vh-300px)]">
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

          <div className="flex items-center justify-between text-xxs xs:text-xs s:text-sm sm:text-m md:text-base lg:text-l xl:text-xl">
            <div className="flex space-x-3">
              <a
                href="mailto:aaronclarkofficial@gmail.com"
                className="hoverLink flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mail
                <FontAwesomeIcon icon={faEnvelope} size="xs" className="ml-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/aaron-clarky/"
                className="hoverLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <FontAwesomeIcon icon={faLinkedin} size="xs" className="ml-2" />
              </a>
              <a
                href="https://github.com/AaronC23/"
                className="hoverLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <FontAwesomeIcon icon={faGithub} size="xs" className="ml-2" />
              </a>
            </div>

            <div className="text-right">
              Developed in NextJS, TailwindCSS and deployed with AWS.
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
