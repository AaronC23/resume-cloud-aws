export default function About() {
  return (
    <div className="gap-y-1 grid text-xxs grid-cols-1 text-left">
      <p>
        <a
          href="https://www.linkedin.com/in/aaron-clarky/"
          className="hoverLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p>
        <a
          href="https://github.com/AaronC23/"
          className="hoverLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
      <p>
        <a
          href="mailto:aaronclarkofficial@gmail.com"
          className="hoverLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mail
        </a>
      </p>
    </div>
  );
}
