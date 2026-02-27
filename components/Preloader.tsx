"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";

export default function Preloader({
  setFinished,
}: {
  setFinished: () => void;
}) {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Smoothly increment progress to 80% to ensure the animation is seen
    const interval = setInterval(() => {
      setPercent((prev) => (prev < 80 ? prev + 1 : prev));
    }, 30);

    const handleLoad = () => {
      setPercent(100);
      setTimeout(() => setLoading(false), 800);
    };

    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={setFinished}>
      {loading && (
        <m.div
          key="loader-container"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="relative inline-block cursor-default select-none  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
            {/* Bottom Layer: Static Background Color */}
            <span className="text-background">CRESCO</span>

            {/* Top Layer: Accent Color Filling Left-to-Right */}
            <m.span
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
              transition={{ ease: "linear" }}
              className="absolute left-0 top-0 text-accent"
              aria-hidden="true"
            >
              CRESCO
            </m.span>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
