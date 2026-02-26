import { m } from "framer-motion";
import { ReactNode } from "react";

const DURATION = 0.15;
const STAGGER = 0.015;

const FlipWrapper = ({ children }: { children: ReactNode }) => {
  const text = typeof children === "string" ? children : "";

  const characters = text.split("").map((char) => ({
    char: char === " " ? "\u00A0" : char,
    id: crypto.randomUUID(),
  }));

  return (
    <m.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <div>
        {characters.map((item, i) => (
          <m.span
            key={item.id}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {item.char}
          </m.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {characters.map((item, i) => (
          <m.span
            key={`${item.id}-alt`}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {item.char}
          </m.span>
        ))}
      </div>
    </m.div>
  );
};

export default FlipWrapper;
