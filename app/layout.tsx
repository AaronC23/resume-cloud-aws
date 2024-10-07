import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import background from "@/images/bg-image-2.jpg";
import Navbar from "@/components/navbar";
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
      <head>
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/images/icon.ico" />
      </head>
      <body className={inter.className}>
        <div className="p-10 font-barlow">
          <div className="border-style border-height">
            <p className="title-font">Aaron Clark</p>
            <p className="subtext-font pb-3 md:pb-6">Developer</p>
            <main className="grid grid-cols-3 gap-5 layout">
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
          <div className="flex items-center justify-between subtext-font">
            <div className="flex space-x-1">
              <a
                href="mailto:aaronclarkofficial@gmail.com"
                className="hoverLink items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mail
                <FontAwesomeIcon
                  icon={faEnvelope}
                  fixedWidth
                  size="xs"
                  className="ml-2"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/aaron-clarky/"
                className="hoverLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <FontAwesomeIcon
                  icon={faLinkedin}
                  fixedWidth
                  size="xs"
                  className="ml-2"
                />
              </a>
              <a
                href="https://github.com/AaronC23/"
                className="hoverLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <FontAwesomeIcon
                  icon={faGithub}
                  fixedWidth
                  size="xs"
                  className="ml-2"
                />
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
