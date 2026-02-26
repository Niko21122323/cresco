"use client";

import React, { ReactNode } from "react";
import { m } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  stagger?: number;
}

const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 50,
  stagger = 0.1,
}: ScrollRevealProps) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <m.div
          initial={{ opacity: 0, y: yOffset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: duration,
            delay: index * stagger + delay,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          className="h-full"
        >
          {child}
        </m.div>
      ))}
    </>
  );
};

export default ScrollReveal;
