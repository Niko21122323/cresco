"use client";

import { useRef } from "react";
import Link from "next/link";
import PrimaryButton from "./buttons/PrimaryButton";
import Image from "next/image";
import footerLogo from "../public/photos/footer/footerLogo.svg";
import { m, useScroll, useTransform } from "framer-motion";
import { footerLinks } from "@/lib/data/footerLinksData";
import FlipWrapper from "./animations/FlipWrapper";

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={containerRef} className="bg-accent overflow-hidden relative">
      <m.div
        style={{ y }}
        initial={{ translateZ: 0 }}
        className="container mx-auto px-6 will-change-transform"
      >
        <div className="flex flex-col gap-16 sm:gap-36 lg:gap-64 xl:gap-80">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-16 sm:gap-24 pt-16 sm:pt-20 lg:pt-28">
            <div>
              <p className="text-dark text-xl lg:text-2xl max-w-[430px] pb-10">
                Ready to elevate your performance? Your AI coach is always here.
              </p>
              <div className="w-fit rounded-full border border-dark">
                <PrimaryButton title="Join the waitlist" url="/" theme="dark" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className="text-dark text-lg lg:text-xl"
                >
                  <FlipWrapper>{link.label}</FlipWrapper>
                </Link>
              ))}
            </div>
          </div>
          <div className="pb-2">
            <Image
              src={footerLogo}
              alt="footer logo"
              width={3000}
              height={2000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </m.div>
    </section>
  );
};

export default Footer;
