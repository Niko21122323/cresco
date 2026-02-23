"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import PrimaryButton from "./buttons/PrimaryButton";
import footerLogo from "../public/photos/footer/footerLogo.svg";

const footerLinks = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "About", link: "/" },
  { id: 3, label: "Features", link: "/" },
  { id: 4, label: "Testimonials", link: "/" },
  { id: 5, label: "FAQ'S", link: "/" },
];

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={containerRef} className="bg-accent overflow-hidden relative">
      <motion.div
        style={{ y }}
        initial={{ translateZ: 0 }}
        className="container mx-auto px-6 will-change-transform"
      >
        <div className="flex flex-col gap-80">
          <div className="flex items-start justify-between gap-24 pt-28">
            <div>
              <p className="text-dark text-2xl max-w-[430px] pb-10">
                Ready to elevate your performance? Your AI coach is always here.
              </p>
              <div className="w-fit">
                <PrimaryButton title="Join the waitlist" url="/" theme="dark" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className="text-dark text-2xl"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="pb-6">
            <Image
              src={footerLogo}
              alt="footer logo"
              width={3000}
              height={2000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
