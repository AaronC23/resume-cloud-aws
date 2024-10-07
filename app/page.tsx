"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import CountUp from 'react-countup';

export default function Page() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetch(
      "https://fbwbeen661.execute-api.ap-southeast-2.amazonaws.com/serverless_lambda_stage/updateCounter"
    )
      .then((response) => response.json())
      .then((res) => {
        let numberCount: number = res.viewCount;
        let count: string = moment.localeData().ordinal(res.viewCount);
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
        <CountUp
          start={0}
          end={visitorCount}
          duration={4.75}
          separator=" "
          prefix="Visit Count: "
          onEnd={() => console.log('Ended! 👏')}
          onStart={() => console.log('Started! 💨')}
        >
          {({ countUpRef, start }) => (
            <div>
              <span ref={countUpRef} />
              <div></div>
            </div>
          )}
        </CountUp>
      </div>
    </div>
  );
}
