"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const videos = [
  "/hero/heroVideo.mp4",
  "/hero/heroVideo_02.mp4",
  "/hero/heroVideo_03.mp4",
];

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [index, setIndex] = useState(0);
  const [flash, setFlash] = useState(false);
  const switchingRef = useRef(false);

  const FLASH_MS = 420;

  const goNext = () => setIndex((i) => (i + 1) % videos.length);

  const handleEnded = () => {
  if (switchingRef.current) return;
  switchingRef.current = true;

  setFlash(true);

  // start next clip BEFORE flash fully fades
  window.setTimeout(() => {
    goNext();
  }, 180);

  // fade flash out slowly
  window.setTimeout(() => {
    setFlash(false);
  }, FLASH_MS);
};

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    switchingRef.current = false;

    // Swap the source on the same video element
    v.src = videos[index];
    v.currentTime = 0;

    // Wait until it can play, then play (avoids mid-clip stalls)
    const onCanPlay = () => {
      const p = v.play();
      if (p) p.catch(() => {});
    };

    v.addEventListener("canplay", onCanPlay, { once: true });
    v.load();

    return () => {
      v.removeEventListener("canplay", onCanPlay);
    };
  }, [index]);

  return (
    <section className="relative h-[92vh] min-h-160 w-full overflow-hidden bg-background">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/white.png"
        onEnded={handleEnded}
      />

      <div className="absolute inset-0 bg-black/20" />

      {/* White flash overlay */}
      <div
        className={`pointer-events-none absolute inset-0 bg-white transition-opacity duration-500 ease-out ${
          flash ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-white" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-semibold tracking-[0.22em] leading-none  text-white/90 sm:text-base">
          SEQUOIA LANDS MANAGEMENT
        </p>

        <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Preserve Land,
          <br />
          Restore Nature.
        </h1>

        <Link
          href="#what-we-do"
          className="mt-10 inline-flex flex-col items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white/90 hover:text-white transition"
        >
          LEARN MORE
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-white/10">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
