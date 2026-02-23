"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import PrimaryButton from "../buttons/PrimaryButton";
import { FiPlus } from "react-icons/fi";

const faqs = [
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
  const [openId, setOpenId] = useState<number>(1);

  const toggleAccordion = (id: number) => {
    if (openId !== id) {
      setOpenId(id);
    }
  };

  return (
    <section className="bg-background section-padding-y">
      <div className="container mx-auto px-6">
        <div className="grid col-span-1 lg:grid-cols-12 gap-y-16">
          <div className="lg:col-span-5">
            <div className="flex flex-col items-start gap-6 lg:pb-16">
              <span className="text-sm sm:text-base text-dark/60">FAQ’S</span>
              <h2 className="text-3xl sm:text-4xl leading-tight max-w-[450px] text-pretty text-dark">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-dark/60 max-w-[600px]">
                Everything you need to know about Cresco before getting started.
              </p>
            </div>
            <div className="w-fit max-lg:hidden">
              <PrimaryButton title="Join the waitlist" url="/" theme="dark" />
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 lg:col-end-13 xl:col-end-13">
            <div className="flex flex-col gap-2">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="bg-light rounded-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full flex items-center justify-between p-4 sm:p-6 text-left cursor-pointer group outline-none gap-6"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-base sm:text-xl font-medium text-dark">
                          {faq.question}
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
                            {faq.answer}
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-fit block lg:hidden">
            <PrimaryButton title="Join the waitlist" url="/" theme="dark" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
