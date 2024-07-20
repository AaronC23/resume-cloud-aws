import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="gap-y-1 grid text-xxs grid-cols-1 text-left">
      <a
        href="mailto:aaronclarkofficial@gmail.com"
        className="hoverLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mail
        <FontAwesomeIcon icon={faEnvelope} size="xs" />
      </a>
      <a
        href="https://www.linkedin.com/in/aaron-clarky/"
        className="hoverLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
        <FontAwesomeIcon icon={faLinkedin} size="xs" />
      </a>
      <a
        href="https://github.com/AaronC23/"
        className="hoverLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
        <FontAwesomeIcon icon={faGithub} size="xs" />
      </a>
    </div>
  );
}
