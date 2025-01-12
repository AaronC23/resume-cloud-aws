import { motion } from "framer-motion";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="scrollable scrollbar-hide homepage subtext-font xl:text-xl 2xl:text-1.5xl">
        Welcome! I am Aaron Clark, a Full Stack Software Engineer based in
        Adelaide. I believe in creating seamless and tailored experiences for
        users. I hope you enjoy your stay.
        <br />
        <div>
          <div>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.75 }}
            >
              <h1>Counter should be here?</h1>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
