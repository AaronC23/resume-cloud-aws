"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import CountUp from "react-countup";

export default function Page() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://fbwbeen661.execute-api.ap-southeast-2.amazonaws.com/serverless_lambda_stage/updateCounter"
    )
      .then((response) => response.json())
      .then((res) => {
        let numberCount: number = res.viewCount;
        let count: string = moment.localeData().ordinal(res.viewCount);
        setIsLoading(false);
        setVisitorCount(numberCount);
      });
  }, []);

  return (
    <div className="scrollable scrollbar-hide homepage subtext-font xl:text-xl 2xl:text-1.5xl">
      Welcome! I am Aaron Clark, a Full Stack Software Engineer based in
      Adelaide. I believe in creating seamless and tailored experiences for
      users. I hope you enjoy your stay.
      <br />
      <div>
        {isLoading ? (
          <p>Loading...</p> // Show loading text while fetching data
        ) : (
          <div>
            <p>Data loaded! Visitor count is: {visitorCount}</p>
          </div>
        )}
      </div>
    </div>
  );
}
