"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Counter from "@/components/counter";

export default function Page() {
  const [visitorCount, setVisitorCount] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  return (
    <div className="scrollable scrollbar-hide homepage subtext-font xl:text-xl 2xl:text-1.5xl">
      Welcome! I am Aaron Clark, a Full Stack Software Engineer based in
      Adelaide. I believe in creating seamless and tailored experiences for
      users. I hope you enjoy your stay.
      <br />
      <div>
        <div>
          <motion.div
            initial={{ opacity: animate ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.75 }}
          >
            <Counter />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
