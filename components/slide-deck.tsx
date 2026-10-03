"use client";

import Image from "next/image";
import { useState, useSyncExternalStore, type KeyboardEvent } from "react";

const slideCount = 15;
const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function SlideDeck() {
  const [index, setIndex] = useState(0);
  // Render every slide in exported HTML, then enhance after hydration.
  // The server snapshot also keeps the full presentation usable without JS.
  const enhanced = useSyncExternalStore(
    subscribe,
    clientSnapshot,
    serverSnapshot,
  );

  function step(direction: number) {
    setIndex((current) =>
      Math.min(Math.max(current + direction, 0), slideCount - 1),
    );
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      step(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  return (
    <>
      <div
        className="deck__frame"
        data-deck
        data-enhanced={enhanced ? "true" : undefined}
      >
        {Array.from({ length: slideCount }, (_, i) => (
          <Image
            key={i}
            className={`deck__slide${i === index ? " is-active" : ""}`}
            src={`/assets/slides/slide-${String(i + 1).padStart(2, "0")}.jpg`}
            alt={`Presentation slide ${i + 1} of ${slideCount}`}
            width={1600}
            height={900}
            loading={i === index || i === index + 1 ? "eager" : "lazy"}
          />
        ))}
      </div>
      <div
        className="deck__controls"
        data-deck-controls
        hidden={!enhanced}
        onKeyDown={onKeyDown}
      >
        <button
          className="deck__nav"
          type="button"
          aria-label="Previous slide"
          onClick={() => step(-1)}
          disabled={index === 0}
        >
          ←
        </button>
        <button
          className="deck__nav"
          type="button"
          aria-label="Next slide"
          onClick={() => step(1)}
          disabled={index === slideCount - 1}
        >
          →
        </button>
        <p className="deck__count" data-deck-count aria-live="polite">
          {index + 1} / {slideCount}
        </p>
      </div>
    </>
  );
}
