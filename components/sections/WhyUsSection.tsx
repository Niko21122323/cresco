"use client";

import { useState } from "react";

import TitleComponent from "../TitleComponent";
import AccordionComponent from "../AccordionComponent";
import AccordionImageDisplay from "../AccordionImageDisplay";

import { features } from "@/lib/data/featuresData";
import ScrollReveal from "../animations/ScrollReveal";

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
            {features.map(({ id, icon, title, description, delay }) => (
              <ScrollReveal key={id} delay={delay}>
                <AccordionComponent
                  Icon={icon}
                  title={title}
                  description={description}
                  isOpen={openId === id}
                  onToggle={() => setOpenId(id)}
                  backgroundColor="bg-background"
                />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <AccordionImageDisplay
              items={features}
              activeId={openId}
              className="max-lg:hidden"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
