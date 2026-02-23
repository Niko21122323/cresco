"use client";

import Image from "next/image";
import testimonialImg1 from "../../public/photos/testimonials/testimonial-1.webp";
import testimonialImg2 from "../../public/photos/testimonials/testimonial-2.webp";
import testimonialImg3 from "../../public/photos/testimonials/testimonial-3.webp";
import testimonialImg4 from "../../public/photos/testimonials/testimonial-4.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    title: "The Most Precise Training Tool I’ve Used",
    message:
      "I’ve tried multiple tracking apps, but this is the first one that actually feels intelligent. The real-time insights helped me adjust my training immediately, and within weeks I noticed measurable improvements in both endurance and strength.",
    name: "Daniel Petrov",
    occupation: "Endurance Athlete",
    image: testimonialImg1,
  },
  {
    id: 2,
    title: "It Feels Like Having a Personal Coach 24/7",
    message:
      "The adaptive feedback completely changed how I train. Instead of guessing whether I’m improving, I can see the data clearly and make smarter decisions every session.",
    name: "Markus Schneider",
    occupation: "Strength & Conditioning Coach",
    image: testimonialImg2,
  },
  {
    id: 3,
    title: "Data That Actually Makes Sense",
    message:
      "What I love most is how simple the insights are. It takes complex performance metrics and turns them into clear guidance I can act on right away.",
    name: "Elena Dimitrova",
    occupation: "Competitive Cyclist",
    image: testimonialImg3,
  },
  {
    id: 4,
    title: "Smarter Training, Real Results",
    message:
      "The AI doesn’t just track workouts — it understands them. The recovery insights alone have helped me avoid overtraining and stay consistent.",
    name: "Luca Romano",
    occupation: "Triathlete",
    image: testimonialImg4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="pb-36 lg:pb-56 bg-light">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          <div className="xl:col-span-5 flex flex-row items-end justify-between xl:justify-normal xl:flex-col gap-6 xl:gap-24">
            <div className="flex flex-col items-start gap-6">
              <span className="text-sm sm:text-base text-dark/60">
                What Our Users Think
              </span>
              <h2 className="text-3xl sm:text-4xl leading-tight max-w-[400px] text-pretty">
                Trusted by Athletes Worldwide
              </h2>
              <p className="text-base sm:text-lg text-dark/60 max-w-2xl xl:max-w-3xl">
                Real feedback from athletes pushing the limits of human
                performance, powered by AI.
              </p>
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
