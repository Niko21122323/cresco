"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";

import Image from "next/image";

import serviceImg1 from "../../public/photos/services/service-1.webp";
import serviceImg2 from "../../public/photos/services/service-2.webp";
import serviceImg3 from "../../public/photos/services/service-3.webp";
import serviceImg4 from "../../public/photos/services/service-4.webp";
import serviceImg5 from "../../public/photos/services/service-5.webp";
import serviceImg6 from "../../public/photos/services/service-6.webp";

import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const services = [
  {
    id: 1,
    title: "Real-Time Tracking",
    description:
      "Monitor every movement with precision. Our AI captures detailed performance data instantly, giving you clear insight into how you train.",
    image: serviceImg1,
  },
  {
    id: 2,
    title: "Adaptive Coaching",
    description:
      "Get guidance that evolves with you. The AI adjusts recommendations based on your progress, performance, and goals.",
    image: serviceImg2,
  },
  {
    id: 3,
    title: "Performance Insights",
    description:
      "Turn raw data into meaningful metrics. Understand what’s working, what’s not, and where to improve.",
    image: serviceImg3,
  },
  {
    id: 4,
    title: "Multi-Discipline Support",
    description:
      "From strength to endurance, track and optimize across multiple training styles in one intelligent system.",
    image: serviceImg4,
  },
  {
    id: 5,
    title: "Instant Feedback",
    description:
      "Receive live cues during your session to refine technique, increase efficiency, and reduce wasted effort.",
    image: serviceImg5,
  },
  {
    id: 6,
    title: "Smart Progress Reports",
    description:
      "Visualize your improvement over time with clear, structured performance summaries.",
    image: serviceImg6,
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding-y">
      <div className="container mx-auto px-6 overflow-x-clip">
        <div className="flex items-end justify-between pb-16 lg:pb-20 xl:pb-28">
          <div className="flex flex-col items-start gap-6 ">
            <span className="text-sm sm:text-base text-dark/60">
              Next-Gen Training
            </span>
            <h2 className="text-3xl sm:text-4xl leading-tight max-w-[400px] text-pretty">
              Your AI coach, always by your side.
            </h2>
            <p className="text-base sm:text-lg text-dark/60 max-w-2xl xl:max-w-3xl">
              Discover how intelligent features analyze every movement, track
              your performance in real time, and deliver personalized guidance
              that adapts as you improve. From strength to endurance, each
              workout becomes smarter, more focused, and built around measurable
              progress.
            </p>
          </div>

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
