"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import heroImage from "../../public/photos/home/hero-image.jpg";
import heroMiniImage from "../../public/photos/home/hero-mini-image.jpg";
import PrimaryButton from "../buttons/PrimaryButton";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.3], ["0%", "70%"]);

  return (
    <div ref={containerRef} className="">
      <section className="relative overflow-hidden">
        <div className="relative container z-20">
          <div className="flex flex-col justify-end">
            <m.div
              style={{ y }}
              className="flex flex-col-reverse lg:flex-col lg:justify-between min-h-screen pb-16 pt-44 lg:pt-64 gap-8 lg:gap-36"
            >
              <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-24">
                <p className="text-background/80 text-lg max-w-[460px]">
                  AI-driven tracking meets real-time coaching, giving you the
                  clarity and guidance you need to improve every session.
                </p>
                <div className="max-w-[225px] max-lg:hidden">
                  <p className="text-background/80 text-lg pb-6">
                    Breakthrough growth built on insight.
                  </p>
                  <Image
                    src={heroMiniImage}
                    alt="hero image"
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="block lg:hidden">
                  <PrimaryButton
                    title="Join the waitlist"
                    url="/"
                    theme="light"
                  />
                </div>
              </div>
              <h1 className="text-background max-[355px]:text-4xl max-[510px]:text-5xl text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                Train Smarter <br /> with AI Precision
              </h1>
            </m.div>
          </div>
        </div>
        <m.div
          style={{ scale }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src={heroImage}
            alt="hero image"
            width={3000}
            height={3000}
            className="h-full w-full object-cover"
            priority
            loading="eager"
          />
        </m.div>
        <m.div
          style={{ opacity }}
          className="absolute top-0 left-0 w-full h-full bg-black z-10"
        />
      </section>
    </div>
  );
};

export default HeroSection;
