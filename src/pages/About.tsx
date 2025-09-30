import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
export default function About() {

  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    const titleSplit = new SplitText('.title', { type: 'chars, words' });

    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

    titleSplit.chars.forEach((char) => char.classList.add('text-gradient'))

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      duration: 1.6,
      ease: 'expo.out',
      stagger: 0.01,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 0.8
    })
  }, [])

  return (
    <>
      <section>
        <h1 className="title text-6xl font-semibold">Hi! I'm Aaron Clark</h1>
        <h3 className="subtitle text-3xl">A Fullstack Software Engineer based in Adelaide. Using design as a medium to create lasting experiences</h3>
      </section>
    </>
  );
}
