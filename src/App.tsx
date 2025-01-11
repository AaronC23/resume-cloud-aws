import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// https://medium.com/@vitorbritto/react-design-patterns-layout-components-pattern-455c98e0bf92

function App() {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/images/icon.ico" />
      </head>
      <body style={{ fontFamily: "BarlowThin" }}>
        <div className="p-10 font-barlow">
          <div className="border-style border-height">
            <p className="title-font">Aaron Clark</p>
            <p className="subtext-font pb-3 md:pb-6">Developer</p>
            <main className="grid grid-cols-3 gap-5 layout">
              <div className="col-span-1"></div>
              <div className="col-span-2"></div>
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
              Developed in Vite, TailwindCSS and deployed with AWS.
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
