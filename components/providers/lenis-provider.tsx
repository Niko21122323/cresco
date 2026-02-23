"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const lenis = lenisRef.current?.lenis;
      if (lenis) {
        lenis.raf(data.timestamp);
      }
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        smoothWheel: true,
        wheelMultiplier: 1.5,
        touchMultiplier: 1.1,
        lerp: 0.05,
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
