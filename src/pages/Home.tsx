import VisitorCounter from "../api/VisitorCounter";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

function Home() {
  return (
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
  );
}

export default Home;
