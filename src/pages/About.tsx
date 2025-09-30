import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
export default function About() {

  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    const titleSplit = new SplitText('.title', { type: 'chars, words' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });
    const animateText = new SplitText('.subtitle', { type: 'words' });
    const mediumTarget = animateText.words[8];

    titleSplit.chars.forEach((char) => char.classList.add('text-gradient'))

    const t1 = gsap.timeline();

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.02,
    });

    t1.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.4,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 0.5
    }).to(mediumTarget, {
      duration: 2.5,
      delay: 0.5,
      color: 'red',
      ease: "power4.out",
    }, 0);

    gsap.from('.portrait-image', {
      scrollTrigger: '.portrait-image',
      opacity: 0,
      yPercent: 30,
      duration: 1.4,
      ease: 'expo.out',
      delay: 0.2
    })


  }, [])

  return (
    <>
      <section className="space-y-4">
        <h1 className="title text-6xl font-semibold">Hi! I'm Aaron Clark</h1>
        <div>
          <img className="portrait-image object-scale-down size-96 w-full " src="src\assets\images\home-page.jpg" alt="self portrait" />
        </div>
        <h3 className="subtitle text-3xl">A Fullstack Software Engineer based in Adelaide. Using design as a medium to create lasting experiences</h3>
      </section>
    </>
  );
}
