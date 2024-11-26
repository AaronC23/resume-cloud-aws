"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import { motion } from "framer-motion";
import Counter from "./counter";

export default function Page() {
  const [visitorCount, setVisitorCount] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    /*
    const storedVisitorCount = sessionStorage.getItem("visitorCount");
    const hasFetched = sessionStorage.getItem("hasFetched");

    if (!process.env.NEXT_PUBLIC_API_URL) {
      setIsLoading(false);
      setVisitorCount("???");
      return;
    }

    if (hasFetched) {
      setIsLoading(false);
      setVisitorCount(storedVisitorCount!);
    } else {
      fetch(process.env.NEXT_PUBLIC_API_URL!)
        .then((response) => response.json())
        .then((res) => {
          let count: string = moment.localeData().ordinal(res.viewCount);
          setIsLoading(false);
          setVisitorCount(count);
          setAnimate(true);
          sessionStorage.setItem("visitorCount", count);
          sessionStorage.setItem("hasFetched", "true");
        });
    }
    */
  }, []);

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
