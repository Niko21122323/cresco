"use client";

import TitleComponent from "../TitleComponent";
import SwiperButton from "../buttons/SwiperButton";
import TestimonialCard from "../TestimonialCard";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { testimonials } from "@/lib/data/testimonialsData";
import ScrollReveal from "../animations/ScrollReveal";

const TestimonialsSection = () => {
  return (
    <section className="section-padding-b bg-light" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 lg:gap-12">
          <div className="xl:col-span-5 flex flex-row items-end justify-between xl:justify-normal xl:flex-col ">
            <div className="title-component-padding-b">
              <TitleComponent
                position="start"
                title="Trusted by Athletes Worldwide"
                subtitle="What Our Users Think"
                description="Real feedback from athletes pushing the limits of human performance, powered by AI."
              />
            </div>
            <div className="flex items-center justify-end gap-2 max-lg:hidden">
              <ScrollReveal>
                <SwiperButton id="testimonail-prev">
                  <IoArrowBack className="relative z-10 text-lg text-dark group-hover:text-accent transition-colors duration-300 ease-in-out" />
                </SwiperButton>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <SwiperButton id="testimonial-next">
                  <IoArrowForward className="relative z-10 text-lg text-dark group-hover:text-accent transition-colors duration-300 ease-in-out" />
                </SwiperButton>
              </ScrollReveal>
            </div>
          </div>
          <div className="xl:col-span-7 2xl:col-span-6 2xl:col-end-13">
            <ScrollReveal>
              <div>
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={1}
                  spaceBetween={8}
                  navigation={{
                    prevEl: "#testimonail-prev",
                    nextEl: "#testimonial-next",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1.3 },
                    768: { slidesPerView: 1.5 },
                    1280: { slidesPerView: 1 },
                  }}
                >
                  {testimonials.map(
                    ({ id, image, title, message, name, occupation }) => (
                      <SwiperSlide key={id} className="h-auto! select-none">
                        <TestimonialCard
                          image={image}
                          title={title}
                          message={message}
                          name={name}
                          occupation={occupation}
                        />
                      </SwiperSlide>
                    ),
                  )}
                </Swiper>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
