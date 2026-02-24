"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";

import featureImg1 from "../../public/photos/whyUs/feature-1.webp";
import featureImg2 from "../../public/photos/whyUs/feature-2.webp";
import featureImg3 from "../../public/photos/whyUs/feature-3.webp";
import featureImg4 from "../../public/photos/whyUs/feature-4.webp";

import { GiConvergenceTarget } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { TbHealthRecognition } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import TitleComponent from "../TitleComponent";
import AccordionComponent from "../AccordionComponent";
import AccordionImageDisplay from "../AccordionImageDisplay";

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
  const [openId, setOpenId] = useState<number | null>(1);

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
            {features.map((feature) => (
              <AccordionComponent
                key={feature.id}
                Icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isOpen={openId === feature.id}
                onToggle={() =>
                  setOpenId(openId === feature.id ? null : feature.id)
                }
                backgroundColor="bg-background"
              />
            ))}
          </div>
          <AccordionImageDisplay
            items={features}
            activeId={openId}
            className="max-lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
