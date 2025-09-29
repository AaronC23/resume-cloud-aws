import { useRef } from "react";
import VisitorCounter from "../api/VisitorCounter";
import Title from "../components/Title";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function TestGsap() {
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
      <div ref={container} className="width-gsap" >
        <section className="statement">
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
    </>
  );
}

export default TestGsap;
