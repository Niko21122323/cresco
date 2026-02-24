"use client";

import Image from "next/image";
import TitleComponent from "../TitleComponent";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { testimonials } from "@/lib/data/testimonialsData";

const TestimonialsSection = () => {
  return (
    <section className="section-padding-b bg-light">
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
              <button
                type="button"
                id="testimonail-prev"
                className="relative flex items-center justify-center bg-accent rounded-md size-16 cursor-pointer overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
              >
                <IoArrowBack className="relative z-10 text-lg text-dark group-hover:text-accent transition-colors duration-300 ease-in-out" />
                <div className="absolute bottom-0 left-0 w-full h-0 bg-dark group-hover:h-full transition-all duration-300 ease-in-out"></div>
              </button>
              <button
                type="button"
                id="testimonial-next"
                className="relative flex items-center justify-center bg-accent rounded-md size-16 cursor-pointer overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
              >
                <IoArrowForward className="relative z-10 text-lg text-dark group-hover:text-accent transition-colors duration-300 ease-in-out" />
                <div className="absolute bottom-0 left-0 w-full h-0 bg-dark group-hover:h-full transition-all duration-300 ease-in-out"></div>
              </button>
            </div>
          </div>
          <div className="xl:col-span-7 2xl:col-span-6 2xl:col-end-13">
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
                {testimonials.map((testimonial) => (
                  <SwiperSlide
                    key={testimonial.id}
                    className="h-auto! select-none"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-background p-6 rounded-3xl overflow-hidden h-full">
                      <div className="relative rounded-2xl overflow-hidden col-span-5 max-lg:hidden">
                        <Image
                          src={testimonial.image}
                          alt="testimonial image"
                          width={500}
                          height={1000}
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="lg:col-span-6 flex flex-col justify-between">
                        <div>
                          <h4 className="text-dark text-xl sm:text-2xl pb-6">
                            {testimonial.title}
                          </h4>
                          <p className="text-dark/60 text-sm sm:text-base">
                            {testimonial.message}
                          </p>
                        </div>

                        <div className="flex items-center gap-4 border-t border-border pt-8 mt-16 md:mt-20 lg:mt-28">
                          <div className="aspect-square rounded-full overflow-hidden size-16 block lg:hidden">
                            <Image
                              src={testimonial.image}
                              alt="testimonial image"
                              width={100}
                              height={100}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <h6 className="text-dark sm:text-lg">
                              {testimonial.name}
                            </h6>
                            <p className="text-dark/60 text-base">
                              {testimonial.occupation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
