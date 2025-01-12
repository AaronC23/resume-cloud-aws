interface Navigation {
  name: string;
  link: string;
}

function Navbar() {
  const navMap: Navigation[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Tech Stack",
      link: "/techstack",
    },
  ];

  return (
    <div className="col-span-1 font-bold scrollable scrollbar-hide aboutpage">
      <ul className="navbar-font navbar-spacing md:block">
        {navMap.map((page, index) => {
          return (
            <li key={index}>
              <a key={index} className="hoverLink">
                {page.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
