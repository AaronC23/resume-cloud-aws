import VisitorCounter from "../api/VisitorCounter";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="scrollable scrollbar-hide homepage-height text-base xl:text-xl 2xl:text-1.5xl">
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
    </Layout>
  );
}

export default Home;
