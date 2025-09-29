import { useRef } from "react";
import VisitorCounter from "../api/VisitorCounter";
import Title from "../components/Title";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home() {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".line-2", {
      scrollTrigger: {
        trigger: ".orange",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
      },
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none"
    });
  },
    { scope: container });

  return (
    <>
      <div className="scrollable scrollbar-hide homepage-height text-base xl:text-xl 2xl:text-1.5xl">
        <Title />
        Welcome! I am Aaron Clark, a Full Stack Software Engineer based in
        Adelaide. I believe in creating seamless and tailored experiences for
        users. I hope you enjoy your stay.
        <br />
        <div>
          <div>
            <VisitorCounter />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
