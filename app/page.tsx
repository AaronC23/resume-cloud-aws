"use client";

import moment from "moment";
import { useEffect, useState } from "react";

export default function Home() {
  const [visitorCount, setVisitorCount] = useState<string>("");

  useEffect(() => {
    //TODO use api call :)
    let count: string = moment.localeData().ordinal(419);
    setVisitorCount("P.S. You are the " + count + " visitor!");
  }, []);
  return (
    <div className="scrollable scrollbar-hide text-xxs h-[calc(100vh-170px)] lg:h-[calc(100vh-200px)] 2xl:h-[calc(100vh-300px)] xs:text-xs s:text-sm sm:text-sm md:text-m lg:text-base xl:text-l 2xl:text-xl">
      Welcome! I am Aaron Clark, a Full Stack Software Engineer based in
      Adelaide. I believe in creating seamless and tailored experiences for
      users. I hope you enjoy your stay.
      <br />
      {visitorCount}
    </div>
  );
}
