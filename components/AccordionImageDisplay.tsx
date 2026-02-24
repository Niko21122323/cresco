"use client";

import { m, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ImageItem {
  id: number | string;
  image: string | StaticImageData;
  title: string;
}

interface AccordionImageDisplayProps {
  items: ImageItem[];
  activeId: number | string | null;
  className?: string;
}

const AccordionImageDisplay = ({
  items,
  activeId,
  className = "",
}: AccordionImageDisplayProps) => {
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
                  priority
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
