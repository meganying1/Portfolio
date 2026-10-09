"use client";

import { useEffect, useState } from "react";
import { TegakiRenderer } from "tegaki";
import caveat from "tegaki/fonts/caveat";

// Module state survives client-side navigation but resets on a full page load,
// so the name writes itself once per visit and stays put when you come back.
let hasPlayed = false;

export function HandwrittenName({ name }: { name: string }) {
  // Read once so a re-render mid-animation doesn't cut it short.
  const [alreadyPlayed] = useState(() => hasPlayed);

  useEffect(() => {
    hasPlayed = true;
  }, []);

  return (
    <TegakiRenderer
      as="span"
      font={caveat}
      time={alreadyPlayed ? "100%" : { mode: "uncontrolled", speed: 3 }}
      reducedMotion="user"
      className="handwritten-name"
    >
      {name}
    </TegakiRenderer>
  );
}
