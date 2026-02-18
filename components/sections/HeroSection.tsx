import Image from "next/image";
import heroImage from "../../public/photos/home/hero-image.jpg";
import heroMiniImage from "../../public/photos/home/hero-mini-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" id="hero">
      <div className="relative container mx-auto px-6 z-20">
        <div className="flex flex-col justify-end">
          <div className="flex flex-col justify-between min-h-screen pb-16 pt-64 gap-36">
            <div className="flex items-start justify-between gap-24">
              <p className="text-background/80 text-lg max-w-[460px]">
                AI-driven tracking meets real-time coaching, giving you the
                clarity and guidance you need to improve every session.
              </p>
              <div className="max-w-[225px]">
                <p className="text-background/80 text-lg max-w-[460px] pb-6">
                  Breakthrough growth built on insight.
                </p>
                <Image
                  src={heroMiniImage}
                  alt="hero image"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <h1 className="text-background text-9xl">
              Train Smarter <br /> with AI Precision
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={heroImage}
          alt="hero image"
          width={3000}
          height={3000}
          className="h-full w-full object-cover"
          priority
          loading="eager"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
    </section>
  );
};

export default HeroSection;
