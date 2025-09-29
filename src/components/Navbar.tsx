import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);

  useGSAP(
    () => {
      gsap.set(container.current, { yPercent: -100 });

      const showAnim = gsap
        .from(container.current, {
          yPercent: 0,
          paused: true,
          duration: 0.2,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        markers: true,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.reverse() : showAnim.play();
        },
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <>
      <div ref={container} className="main-tool-bar">
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex gap-6 z-50">
          <button onClick={() => scrollToSection("hero")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("techstack")}>
            Tech Stack
          </button>
        </nav>
      </div>
      {/* <div className="scrollable-area"></div> */}
    </>
  );
}
