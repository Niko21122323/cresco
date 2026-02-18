"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import PrimaryButton from "./buttons/PrimaryButton";

const navLinks = [
  { id: 1, label: "About", link: "" },
  { id: 2, label: "Features", link: "" },
  { id: 3, label: "Testimonials", link: "" },
  { id: 4, label: "FAQ'S", link: "" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest <= 0) {
      setIsHidden(false);
      setIsSticky(false);
      return;
    }

    if (latest > previous) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
      setIsSticky(true);
    }
  });

  const navClasses = isSticky
    ? "bg-white border-b border-border"
    : "bg-transparent border-b border-border/15";

  const textClass = isSticky ? "text-dark" : "text-background";
  const linkClass = isSticky ? "text-dark/90" : "text-background/90";
  const borderLinkClass = isSticky ? "border-dark" : "border-background";

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed overflow-x-clip top-0 left-0 w-full z-50 py-8 transition-colors duration-300 ${navClasses}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-10">
          <div className="flex items-center">
            <h5
              className={`text-2xl uppercase font-bold lg:pr-8 xl:pr-12 transition-colors duration-300 ${textClass}`}
            >
              Cresco
            </h5>

            <div
              className={`flex items-center gap-8 xl:gap-12 lg:pl-8 xl:pl-12 border-l transition-colors duration-300 max-lg:hidden ${borderLinkClass}`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className={`text-lg leading-none transition-colors duration-300 ${linkClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <PrimaryButton
              title="Join the waitlist"
              url="/"
              theme={isSticky ? "dark" : "light"}
            />
          </div>
          <button type="button" className="text-white block lg:hidden">
            Menu
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
