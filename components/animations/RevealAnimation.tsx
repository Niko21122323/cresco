"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface RevealAnimationProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  stagger?: number;
  once?: boolean;
}

const RevealAnimation = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 40,
  stagger = 0.1,
  once = true,
  ...props
}: RevealAnimationProps) => {
  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        return (
          <motion.div
            {...props}
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: once, amount: 0.25 }}
            transition={{
              duration: duration,
              delay: index * stagger + delay,
              ease: [0.25, 0.1, 0.25, 1.0], // Smooth Cubic Bezier
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </>
  );
};

export default RevealAnimation;
