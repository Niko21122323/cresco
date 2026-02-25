"use client";

import { useRef } from "react";

import { m, useScroll, useTransform } from "framer-motion";

import PrimaryButton from "../buttons/PrimaryButton";
import { PiStarFourFill } from "react-icons/pi";
import Image from "next/image";
import heroImage from "../../public/photos/home/hero-image.webp";

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
              className="flex items-end justify-between min-h-screen pb-16 pt-44 lg:pt-64"
            >
              <div className="">
                <h1 className="text-background max-[355px]:text-4xl max-[510px]:text-5xl text-6xl md:text-7xl xl:text-8xl pb-8">
                  Train Smarter <br /> with AI Precision
                </h1>
                <p className="text-background/80 text-lg max-w-[560px]">
                  AI-driven tracking meets real-time coaching, giving you the
                  clarity and guidance you need to improve every session.
                </p>
                <div className="w-fit pt-12">
                  <PrimaryButton
                    title="Join the waitlist"
                    url="/"
                    theme="light"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 max-lg:hidden">
                <div className="grid grid-cols-12 gap-1.5">
                  <div className="bg-accent rounded-md col-span-9 flex items-center px-4">
                    <p className="text-xl font-medium text-dark">Fun Facts</p>
                  </div>
                  <div className="flex items-center justify-center bg-accent col-span-3 rounded-md p-4">
                    <PiStarFourFill className="text-base text-dark" />
                  </div>
                </div>
                <div className="bg-background rounded-lg px-4 py-6">
                  <h6 className="text-2xl text-dark font-medium pb-2">
                    1,200+
                  </h6>
                  <p className="text-dark/80 text-base">
                    Clients around the world
                  </p>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <h6 className="text-2xl text-dark font-medium pb-2">95%</h6>
                  <p className="text-dark/80 text-base">
                    Client satisfaction rate
                  </p>
                </div>
              </div>
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
