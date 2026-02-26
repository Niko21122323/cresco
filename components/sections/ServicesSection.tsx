"use client";

import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import TitleComponent from "../TitleComponent";
import SwiperButton from "../buttons/SwiperButton";
import ServicesCard from "../ServicesCard";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

import { services } from "@/lib/data/servicesData";
import ScrollReveal from "../animations/ScrollReveal";

const ServicesSection = () => {
  return (
    <section className="section-padding-y">
      <div className="container mx-auto px-6 overflow-x-clip">
        <div className="flex items-end justify-between title-component-padding-b">
          <TitleComponent
            position="start"
            title="Your AI coach, always by your side."
            subtitle="Next-Gen Training"
            description="Discover how intelligent features analyze every movement, track your performance in real time, and deliver personalized guidance that adapts as you improve. From strength to endurance, each workout becomes smarter, more focused, and built around measurable progress."
          />

          <div className="flex items-center gap-2 max-lg:hidden">
            <ScrollReveal>
              <SwiperButton id="swiper-prev">
                <IoArrowBack className="relative z-10 text-lg text-dark group-hover:text-accent transition-colors duration-300 ease-in-out" />
              </SwiperButton>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <SwiperButton id="swiper-next">
                <IoArrowForward className="relative z-10 text-lg text-dark group-hover:text-accent transition-colors duration-300 ease-in-out" />
              </SwiperButton>
            </ScrollReveal>
          </div>
        </div>
        <div className="">
          <ScrollReveal>
            <Swiper
              autoHeight={false}
              modules={[Navigation]}
              navigation={{
                prevEl: "#swiper-prev",
                nextEl: "#swiper-next",
              }}
              breakpoints={{
                410: { slidesPerView: 1.1 },
                640: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              slidesPerView={1}
              spaceBetween={8}
            >
              {services.map(({ id, image, title, description }) => (
                <SwiperSlide
                  key={id}
                  className="select-none overflow-hidden rounded-3xl"
                >
                  <ServicesCard
                    image={image}
                    title={title}
                    description={description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
