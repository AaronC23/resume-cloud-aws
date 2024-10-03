"use client";

import { useEffect, useState } from "react";
import moment from "moment";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [visitorCount, setVisitorCount] = useState("");

  useEffect(() => {
    fetch(
      "https://fbwbeen661.execute-api.ap-southeast-2.amazonaws.com/serverless_lambda_stage/updateCounter"
    )
      .then((response) => response.json())
      .then((updatedCount) => {
        let count: string = moment.localeData().ordinal(updatedCount.viewCount);
        setLoading(false);
        setVisitorCount(count);
      });
  }, []);

  return (
    <div className="scrollable scrollbar-hide homepage subtext-font xl:text-xl 2xl:text-1.5xl">
      Welcome! I am Aaron Clark, a Full Stack Software Engineer based in
      Adelaide. I believe in creating seamless and tailored experiences for
      users. I hope you enjoy your stay. P.S You are the {visitorCount} visitor
      :)
      <br />
    </div>
  );
}
