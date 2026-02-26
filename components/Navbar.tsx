"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import PrimaryButton from "./buttons/PrimaryButton";
import { m, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data/navbarLinksData";
import { socialLinks } from "@/lib/data/socialsData";
import FlipWrapper from "./animations/FlipWrapper";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();

    setIsOpen(false);

    lenis?.scrollTo(href, {
      offset: -100,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`absolute top-0 left-0 w-full z-50 py-8 border-b border-border/20 transition-colors duration-300 ${
          isOpen && "bg-background"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-10">
            <div className="flex items-center">
              <h5
                className={`text-2xl uppercase font-bold lg:pr-6 2xl:pr-12 transition-colors duration-300 ${
                  isOpen ? "text-dark" : "text-background"
                }`}
              >
                Cresco
              </h5>
              <div
                className={`flex items-center gap-8 2xl:gap-12 lg:pl-6 2xl:pl-12 border-l transition-colors duration-300 max-lg:hidden border-background`}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.link}
                    onClick={(e) => handleScroll(e, link.link)}
                    className={`text-base 2xl:text-lg leading-none transition-colors duration-300 text-background/90`}
                  >
                    <FlipWrapper>{link.label}</FlipWrapper>
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <PrimaryButton
                title="Join the waitlist"
                url="#cta"
                theme="light"
              />
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-1.5 lg:hidden"
              aria-label="Toggle Menu"
            >
              <m.span
                animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className={`w-8 h-0.5 ${isOpen ? "bg-dark" : "bg-background"}`}
              />
              <m.span
                animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className={`w-8 h-0.5 ${isOpen ? "bg-dark" : "bg-background"}`}
              />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 w-full max-h-screen overflow-y-auto bg-background border-b border-border z-40 flex flex-col pt-32 pb-10"
          >
            <div className="container mx-auto px-6">
              <div className="flex max-[500px]:flex-col items-start justify-between gap-16">
                <div className="flex flex-col gap-6 max-[500px]:w-full">
                  {navLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.link}
                      onClick={(e) => handleScroll(e, link.link)}
                      className="text-2xl text-dark transition-colors max-[500px]:border-b border-border/50 max-[500px]:pb-6 last:border-none"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2 max-[500px]:w-full">
                  <div className="grid grid-cols-3 gap-2">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.id}
                        href={link.url}
                        className="flex items-center justify-center bg-accent rounded-lg aspect-square"
                      >
                        <link.Icon className="text-xl" />
                      </Link>
                    ))}
                  </div>
                  <PrimaryButton
                    title="Join the waitlist"
                    url="#cta"
                    theme="dark"
                  />
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-dark/50 z-30 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
