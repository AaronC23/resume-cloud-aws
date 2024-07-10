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
    <div className="md:scrollable default-height text-xs sm:text-lg md:text-lg">
      Welcome! I am Aaron Clark, a Full Stack Software Engineer based in
      Adelaide. I believe in creating a seamless and tailored experiences for
      users.
      {visitorCount}
    </div>
  );
}
