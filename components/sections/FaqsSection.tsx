"use client";

import { useState } from "react";

import PrimaryButton from "../buttons/PrimaryButton";
import TitleComponent from "../TitleComponent";
import AccordionComponent from "../AccordionComponent";

import { faqs } from "@/lib/data/faqData";
import ScrollReveal from "../animations/ScrollReveal";

const FaqsSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="bg-background section-padding-y">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="title-component-padding-b">
              <TitleComponent
                position="start"
                title="Frequently Asked Questions"
                subtitle="FAQ'S"
                description="Everything you need to know about Cresco before getting started."
              />
            </div>
            <div className="w-fit max-lg:hidden">
              <PrimaryButton title="Join the waitlist" url="/" theme="dark" />
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 lg:col-end-13 xl:col-end-13">
            <div className="flex flex-col gap-2">
              {faqs.map(({ id, question, answer, delay }) => (
                <ScrollReveal key={id} delay={delay}>
                  <AccordionComponent
                    title={question}
                    description={answer}
                    isOpen={openId === id}
                    onToggle={() => setOpenId(id)}
                    backgroundColor="bg-light"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
          <div className="w-fit block pt-10 md:pt-12 lg:pt-16 lg:hidden">
            <PrimaryButton title="Join the waitlist" url="/" theme="dark" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
