"use client";

import moment from "moment";
import { useEffect, useState } from "react";

export default function Home() {
  const [visitorCount, setVisitorCount] = useState<string>("");

  useEffect(() => {
    let count: string = moment.localeData().ordinal(419);
    setVisitorCount("You are the " + count + " visitor.");
  }, []);
  return (
    <div className="grid gap-4">
      <div className="font-barlow scrollable text-lg">
        {/* Need to make font smaller, need to add padding to bottom of navbar if small screen */}
        Welcome! I am Aaron Clark, a Full Stack Software Engineer based in
        Adelaide. I believe in creating a seamless and tailored experiences for
        users.
        {visitorCount}
      </div>
    </div>
  );
}
