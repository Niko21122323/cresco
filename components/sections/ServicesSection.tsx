"use client";

import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Image from "next/image";
import TitleComponent from "../TitleComponent";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

import { services } from "@/lib/data/servicesData";

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
            <button
              type="button"
              id="swiper-prev"
              className="relative flex items-center justify-center bg-accent rounded-md size-16 cursor-pointer overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
            >
              <IoArrowBack className="relative z-10 text-lg text-dark group-hover:text-accent transition-colors duration-300 ease-in-out" />
              <div className="absolute bottom-0 left-0 w-full h-0 bg-dark group-hover:h-full transition-all duration-300 ease-in-out"></div>
            </button>
            <button
              type="button"
              id="swiper-next"
              className="relative flex items-center justify-center bg-accent rounded-md size-16 cursor-pointer overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
            >
              <IoArrowForward className="relative z-10 text-lg text-dark group-hover:text-accent transition-colors duration-300 ease-in-out" />
              <div className="absolute bottom-0 left-0 w-full h-0 bg-dark group-hover:h-full transition-all duration-300 ease-in-out"></div>
            </button>
          </div>
        </div>
        <div className="">
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
            {services.map((service) => (
              <SwiperSlide
                key={service.id}
                className="select-none overflow-hidden rounded-3xl"
              >
                <div className="relative overflow-hidden h-full">
                  <Image
                    src={service.image}
                    alt="service image"
                    width={1000}
                    height={1000}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  <div className="relative z-10 px-6 pb-6 pt-56">
                    <h4 className="text-background text-xl sm:text-2xl pb-4">
                      {service.title}
                    </h4>
                    <p className="text-background/80 text-sm sm:max-w-[85%]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
