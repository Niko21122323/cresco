"use client";

import Image from "next/image";
import { AccordionImageDisplayTypes } from "@/lib/types/types";
import { m, AnimatePresence } from "framer-motion";

const AccordionImageDisplay = ({
  items,
  activeId,
  className = "",
}: AccordionImageDisplayTypes) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl w-full h-full ${className}`}
    >
      <AnimatePresence initial={false}>
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            isActive && (
              <m.div
                key={item.id}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{
                  y: 0,
                  transition: { delay: 0.5 },
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 w-full h-full z-20"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  placeholder="blur"
                  quality={50}
                />
              </m.div>
            )
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default AccordionImageDisplay;
