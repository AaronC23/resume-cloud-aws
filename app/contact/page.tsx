export default function About() {
  return (
    <div className="gap-y-1 grid text-xs md:text-2xl md:grid-cols-6 md:text-right">
      <p className="md:col-span-5">
        <a
          href="https://www.linkedin.com/in/aaron-clarky/"
          className="hoverLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p className="md:col-span-5">
        <a
          href="https://github.com/AaronC23/"
          className="hoverLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
      <p className="md:col-span-5">
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
