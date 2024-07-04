export default function About() {
  return (
    <div className="scrollable">
      <div className="font-barlow text-right text-2xl grid grid-cols-6 gap-y-4">
        <p className="col-span-5">
          <a
            href="https://www.linkedin.com/in/aaron-clarky/"
            className="hoverLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </p>
        <p className="col-span-5">
          <a
            href="https://github.com/AaronC23/"
            className="hoverLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </p>
        <p className="col-span-5">
          <a
            href="mailto:aaronclarkofficial@gmail.com"
            className="hoverLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            MAIL
          </a>
        </p>
      </div>
    </div>
  );
}
