import Image from "next/image";
import ctaImage from "../../public/photos/cta/cta-image.webp";
import ScrollReveal from "../animations/ScrollReveal";

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden" id="cta">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center py-36 md:py-44 lg:py-52 xl:py-56 align-self:stretch;">
          <ScrollReveal>
            <h3 className="text-4xl sm:text-[52px] text-background text-center leading-tight pb-7 max-w-[540px]">
              Take Your Training to the Next Level
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-background/60 text-center max-w-[680px]">
              Unlock intelligent coaching, real-time insights, and adaptive AI
              guidance. Start transforming your workouts today.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} extraClass="w-full">
            <form
              action=""
              className="flex flex-col sm:flex-row items-center gap-2.5 mt-16 max-sm:w-full justify-self-center"
            >
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="bg-background/15 backdrop-blur-xl p-3 rounded-md text-base placeholder:text-base text-background/80 placeholder:text-background/60 border border-background/30 focus:outline-none min-w-[90%] sm:min-w-80"
              />
              <button
                type="submit"
                className="bg-background px-7 py-3 text-dark rounded-md cursor-pointer max-sm:min-w-[90%]"
              >
                Join the waitlist
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          src={ctaImage}
          alt="cta image background"
          width={2536}
          height={2000}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default CtaSection;
