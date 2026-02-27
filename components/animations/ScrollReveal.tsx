"use client";

import React from "react";
import { m } from "framer-motion";
import { ScrollRevealProps } from "@/lib/types/types";
import { useMotionLoading } from "../providers/motion-provider";

const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 50,
  stagger = 0.1,
  extraClass,
}: ScrollRevealProps) => {
  const { isLoaderDone } = useMotionLoading();

  return (
    <>
      {React.Children.map(children, (child, index) => (
        <m.div
          initial={{ opacity: 0, y: yOffset }}
          whileInView={
            isLoaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: duration,
            delay: index * stagger + delay,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className={`h-full ${extraClass}`}
        >
          {child}
        </m.div>
      ))}
    </>
  );
};

export default ScrollReveal;
