import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Home from "./pages/Home";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import TestGsap from "./pages/TestGsap";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}

      <Section id="about" className="bg-gray-100">
        <About />
      </Section>

      <Section id="gsap" className="bg-white">
        <TestGsap />
      </Section>

      <Section id="hero" className="bg-gray-200">
        <Home />
      </Section>

      <Section id="techstack" className="bg-white">
        <TechStack />
      </Section>
    </>
  );
}
