"use client";

import { ElementType, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";

interface AccordionProps {
  title: string;
  description: string;
  Icon?: ElementType;
  backgroundColor?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionComponent = ({
  title,
  description,
  Icon,
  backgroundColor = "bg-light",
  isOpen,
  onToggle,
}: AccordionProps) => {
  return (
    <div className={`rounded-xl overflow-hidden ${backgroundColor}`}>
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full gap-6 p-4 sm:p-6 cursor-pointer outline-none group"
      >
        <div className="flex items-center gap-2 sm:gap-4">
          {Icon && (
            <div className="flex items-center justify-center size-8 rounded-sm bg-accent shrink-0">
              <Icon className="text-dark" />
            </div>
          )}
          <span className="text-base sm:text-xl font-medium text-dark">
            {title}
          </span>
        </div>

        <m.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <FiPlus className="text-dark text-xl" />
        </m.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <span className="block px-4 sm:px-6 pb-6 pt-4 text-dark/60 text-sm md:text-base lg:text-lg leading-tight">
              {description}
            </span>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionComponent;
