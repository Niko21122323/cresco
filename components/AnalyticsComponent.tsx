"use client";

import { useRef, useEffect } from "react";
import { m, useInView, useMotionValue, animate } from "framer-motion";
import { analytics } from "@/lib/data/analyticsData";

const CountUp = ({ value, start }: { value: string; start: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const target = parseFloat(value.replace(/,/g, ""));
  const suffix = value.replace(/[0-9.,]/g, "");
  const count = useMotionValue(0);

  useEffect(() => {
    if (start) {
      const controls = animate(count, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent =
              Math.floor(latest).toLocaleString() + suffix;
          }
        },
      });
      return controls.stop;
    }
  }, [start, target, count, suffix]);

  return <m.span ref={ref}>0{suffix}</m.span>;
};

const AnalyticsComponent = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <div
      ref={containerRef}
      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-20"
    >
      {analytics.map(({ id, title, description }) => (
        <div key={id} className="flex flex-col gap-4">
          <h3 className="text-dark text-4xl md:text-[42px]">
            <CountUp value={title} start={isInView} />
          </h3>
          <span className="text-dark/60 text-sm">{description}</span>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsComponent;
