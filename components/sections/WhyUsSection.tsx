"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";

import featureImg1 from "../../public/photos/whyUs/feature-1.webp";
import featureImg2 from "../../public/photos/whyUs/feature-2.webp";
import featureImg3 from "../../public/photos/whyUs/feature-3.webp";
import featureImg4 from "../../public/photos/whyUs/feature-4.webp";

import { FiPlus } from "react-icons/fi";
import { GiConvergenceTarget } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { TbHealthRecognition } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import TitleComponent from "../TitleComponent";

const features = [
  {
    id: 1,
    title: "Precision You Can Trust",
    description:
      "Built on advanced tracking technology, delivering consistent and reliable performance data every session.",
    icon: GiConvergenceTarget,
    image: featureImg1,
  },
  {
    id: 2,
    title: "Intelligent Performance Engine",
    description:
      "Our AI analyzes, adapts, and evolves with you to provide smarter coaching over time.",
    icon: LuBrainCircuit,
    image: featureImg2,
  },
  {
    id: 3,
    title: "Recovery, Optimized",
    description:
      "Monitor fatigue, balance intensity, and train at the right pace to maximize results and prevent burnout.",
    icon: TbHealthRecognition,
    image: featureImg3,
  },
  {
    id: 4,
    title: "Built for Athletes",
    description:
      "Connect, compete, and grow within a community driven by progress and performance.",
    icon: FaRunning,
    image: featureImg4,
  },
];

const WhyUsSection = () => {
  const [openId, setOpenId] = useState<number>(1);

  const toggleAccordion = (id: number) => {
    if (openId !== id) {
      setOpenId(id);
    }
  };

  return (
    <section className="section-padding-y bg-light">
      <div className="container mx-auto px-6">
        <div className="title-component-padding-b">
          <TitleComponent
            position="start"
            title="Smart Training, with clear and proven results"
            subtitle="Intelligence in Motion"
            description="Our AI isn’t just about tracking, it’s about transforming the way you train, recover and perform"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 xl:gap-24 items-stretch">
          <div className="flex flex-col gap-2">
            {features.map((feature) => {
              const isOpen = openId === feature.id;

              return (
                <div
                  key={feature.id}
                  className="bg-background rounded-xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(feature.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left cursor-pointer group outline-none gap-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center rounded-sm bg-accent size-8 shrink-0">
                        <feature.icon className="text-dark" />
                      </div>
                      <span className="text-base sm:text-xl font-medium text-dark">
                        {feature.title}
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
                        <div className="px-4 sm:px-6 pb-6 pt-4 text-dark/70 text-sm sm:text-lg leading-relaxed">
                          {feature.description}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-xl w-full h-full max-lg:hidden">
            <AnimatePresence initial={false}>
              {features.map((feature) => {
                const isActive = openId === feature.id;
                return (
                  isActive && (
                    <m.div
                      key={feature.id}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{
                        y: 0,
                        transition: { delay: 0.5 }, // Keep it in DOM longer so new image can cover it
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="absolute inset-0 w-full h-full z-20"
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
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
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
