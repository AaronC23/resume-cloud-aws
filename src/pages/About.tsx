import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
export default function About() {

  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const titleSplit = new SplitText('.title', { type: 'chars, words' });
    const whoTitleSplit = new SplitText('.who-title', { type: 'chars, words' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });
    const whoSplit = new SplitText('.who-subtitle', { type: 'lines' });
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
      delay: 0.75,
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

    gsap.from(whoTitleSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.02,
      scrollTrigger: {
        trigger: '.who-title',
        onToggle: (self) => console.log('toggled, isActive:', self.isActive),
      }
    });

    gsap.from(whoSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.4,
      ease: 'expo.out',
      delay: 0.5,
      stagger: 0.06,
      scrollTrigger: {
        trigger: '.who-subtitle',
        onToggle: (self) => console.log('toggled, isActive:', self.isActive),
      }
    })


  }, [])

  return (
    <>
      <section className="space-y-4 pt-20">
        <h1 className="title text-6xl font-medium ">Hi! I'm Aaron Clark</h1>
        <div>
          <img className="portrait-image object-scale-down size-96 w-full " src="src\assets\images\home-page.jpg" alt="self portrait" />
        </div>
        <h3 className="subtitle font-extralight text-4xl pb-20">A Fullstack Software Engineer based in Adelaide. Using design as a medium to create lasting experiences. Enjoy your stay :)</h3>

        <h1 className="who-title text-6xl font-medium ">Who am I?</h1>
        <h3 className="who-subtitle font-extralight text-4xl pb-20">
          I've been developing software for the past 4 years at several companies. My passion for software began when I used GameMaker 7 back in primary school. This led to my decision to study Sofwtare Engineering.  When I’m not coding I am capturing the world through my film camera,
        </h3>
      </section>
    </>
  );
}
