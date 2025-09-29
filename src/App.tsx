import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Home from "./pages/Home";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function App() {
  const stickyEls = document.querySelectorAll(".sticky-statement");

  const container = useRef();

  useGSAP(
    () => {
      stickyEls.forEach((el) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "bottom 70%",
            end: "bottom center",
            markers: true,
            toggleActions: "play none reverse none",
            scrub: 1,
          },
        });
        tl.to(el, { opacity: 0, yPercent: -10 });
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <>
      <Navbar />
      <div ref={container}>
        <section>
          <div className="sticky-statement">
            <h1>Statement one</h1>
          </div>
          <div className="sticky-statement">
            <h1>Statement two</h1>
          </div>
          <div className="sticky-statement">
            <h1>Statement three</h1>
          </div>
        </section>
      </div>

      <Section id="hero" className="bg-gray-200">
        <Home />
      </Section>

      <Section id="about" className="bg-gray-100">
        <About />
      </Section>

      <Section id="techstack" className="bg-white">
        <TechStack />
      </Section>
    </>
  );
}
