"use client";

import { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import TitleComponent from "../TitleComponent";
import AccordionComponent from "../AccordionComponent";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "How does the AI track my performance?",
    answer:
      "Our AI uses advanced sensors and movement analysis to capture every detail of your workouts. The data is processed in real time to deliver personalized insights and coaching.",
  },
  {
    id: 2,
    question: "Can it adapt to my training goals?",
    answer:
      "Yes. The AI adjusts its guidance based on your progress and goals, whether you focus on endurance, strength, recovery, or overall performance.",
  },
  {
    id: 3,
    question: "What types of training does it support?",
    answer:
      "It supports multiple disciplines including running, cycling, strength training, HIIT, and more — any activity where performance tracking matters.",
  },
  {
    id: 4,
    question: "Do I need extra equipment to use it?",
    answer:
      "Most features work with minimal gear. Compatible trackers and smart devices can be connected for enhanced precision.",
  },
  {
    id: 5,
    question: "How is my data kept safe?",
    answer:
      "All performance data is encrypted and securely stored. Your insights remain private and are never shared without consent.",
  },
];

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
              {faqs.map((faq: FAQ) => (
                <AccordionComponent
                  key={faq.id}
                  title={faq.question}
                  description={faq.answer}
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                  backgroundColor="bg-light"
                />
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
