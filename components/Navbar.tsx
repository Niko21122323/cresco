"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import PrimaryButton from "./buttons/PrimaryButton";

import { FaInstagram } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";

const navLinks = [
  { id: 1, label: "About", link: "" },
  { id: 2, label: "Features", link: "" },
  { id: 3, label: "Testimonials", link: "" },
  { id: 4, label: "FAQ'S", link: "" },
];

const socialLinks = [
  { id: 1, Icon: FaInstagram, url: "https://instagram.com" },
  { id: 2, Icon: SiTiktok, url: "https://tiktok.com" },
  { id: 3, Icon: GrLinkedinOption, url: "https://linkedin.com" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (isOpen) return;

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

  const navClasses =
    isSticky || isOpen
      ? "bg-white border-b border-border"
      : "bg-transparent border-b border-border/15";

  const textClass = isSticky || isOpen ? "text-black" : "text-white";
  const linkClass = isSticky || isOpen ? "text-black/90" : "text-white/90";
  const borderLinkClass = isSticky || isOpen ? "border-black" : "border-white";
  const iconColor = isSticky || isOpen ? "#000" : "#fff";

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-[60] py-6 transition-colors duration-300 ${navClasses}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-10">
            <div className="flex items-center">
              <h5
                className={`text-2xl uppercase font-bold lg:pr-8 xl:pr-12 transition-colors duration-300 ${textClass}`}
              >
                Cresco
              </h5>

              {/* Desktop Links Restored */}
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
                theme={isSticky || isOpen ? "dark" : "light"}
              />
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[70] flex flex-col items-center justify-center w-10 h-10 gap-1.5 lg:hidden"
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5"
                style={{ backgroundColor: iconColor }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5"
                style={{ backgroundColor: iconColor }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 w-full max-h-screen overflow-y-auto bg-white border-b border-border z-50 flex flex-col py-10 pt-32 pb-10 shadow-2xl"
          >
            <div className="container mx-auto px-6">
              <div className="flex max-[500px]:flex-col items-start justify-between gap-16">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.link}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-black hover:text-gray-600 transition-colors"
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
                    url="/"
                    theme="dark"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
