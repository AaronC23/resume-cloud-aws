import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
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
    </>
  );
}

export default Footer;
