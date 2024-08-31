"use client";

import moment from "moment";
import { useEffect, useState } from "react";
import SvgIcon from "@/app/icons/icon.svg";

export default function Home() {
  const [visitorCount, setVisitorCount] = useState<string>("");

  useEffect(() => {
    //TODO use api call :)
    let count: string = moment.localeData().ordinal(419);
    setVisitorCount("P.S. You are the " + count + " visitor!");
  }, []);
  return (
    <div className="scrollable scrollbar-hide homepage subtext-font xl:text-l 2xl:text-xl">
      Welcome! I am Aaron Clark, a Full Stack Software Engineer based in
      Adelaide. I believe in creating seamless and tailored experiences for
      users. I hope you enjoy your stay.
      <br />
      {visitorCount}
      <SvgIcon width={25} height={25} />
    </div>
  );
}
