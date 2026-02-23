import Image from "next/image";
import ctaImage from "../../public/photos/cta/cta-image.webp";

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center py-36 md:py-44 lg:py-52">
          <h3 className="text-4xl sm:text-[52px] text-background text-center leading-tight pb-7 max-w-[540px]">
            Take Your Training to the Next Level
          </h3>
          <p className="text-lg text-white/60 text-center max-w-[680px]">
            Unlock intelligent coaching, real-time insights, and adaptive AI
            guidance. Start transforming your workouts today.
          </p>
          <form
            action=""
            className="flex flex-col sm:flex-row items-center gap-2.5 mt-16 max-sm:w-full"
          >
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="bg-background/15 backdrop-blur-xl p-3 rounded-md text-base placeholder:text-base text-white/80 placeholder:text-white/60 border border-background/30 min-w-[90%] sm:min-w-80"
            />
            <button
              type="submit"
              className="bg-background px-7 py-3 text-dark rounded-md cursor-pointer max-sm:min-w-[90%]"
            >
              Join the waitlist
            </button>
          </form>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          src={ctaImage}
          alt="cta image background"
          width={3000}
          height={3000}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default CtaSection;
