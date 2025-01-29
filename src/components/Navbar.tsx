import { Link } from "react-router";

function Navbar() {
  const navMap: any[] = [
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

  const { pathname } = location;

  return (
    <div className="font-bold scrollable scrollbar-hide aboutpage">
      <ul className="text-base md:text-l xl:text-xl 2xl:text-1.5xl navbar-spacing md:block">
        {navMap.map((page, index) => {
          if (pathname === page.link) {
            return (
              <li key={index}>
                <Link
                  key={index}
                  to={page.link}
                  className="pointer-events-none"
                >
                  <p className="text-gray-400">&bull;</p>
                </Link>
              </li>
            );
          }
          return (
            <li key={index}>
              <Link key={index} className="hoverLink" to={page.link}>
                {page.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
