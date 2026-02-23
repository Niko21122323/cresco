import Image from "next/image";

import introductionImg1 from "../../public/photos/introduction/introduction-img1.webp";
import introductionImg2 from "../../public/photos/introduction/introduction-img2.webp";
import introductionImg3 from "../../public/photos/introduction/introduction-img3.webp";

import iconStar from "../../public/icons/icon-star.svg";
import iconHeart from "../../public/icons/icon-heart.svg";
import iconTrending from "../../public/icons/icon-trending.svg";
import iconFocus from "../../public/icons/icon-focus.svg";

const coreFeatures = [
  {
    id: 1,
    content: "AI-driven insights tailored to your training style",
    icon: iconStar,
    image: introductionImg1,
    gridPosition: "lg:col-span-4 xl:col-span-5 lg:row-span-2",
  },
  {
    id: 2,
    content: "Advanced health & heart rate tracking",
    icon: iconHeart,
    image: introductionImg2,
    gridPosition:
      "lg:col-span-4 xl:col-span-3 lg:col-start-5 xl:col-start-6 lg:row-start-1",
  },
  {
    id: 3,
    content: "Faster Progress with smart AI guidance",
    icon: iconTrending,
    gridPosition:
      "lg:col-span-4 xl:col-span-3 lg:col-start-5 xl:col-start-6 lg:row-start-2",
  },
  {
    id: 4,
    content: "Personalized workout recommendations",
    icon: iconFocus,
    image: introductionImg3,
    gridPosition:
      "lg:col-span-4 xl:col-span-3 lg:row-span-2 lg:col-start-10 xl:col-start-9 lg:row-start-1",
  },
];

const IntroductionSection = () => {
  return (
    <section className="">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6 pb-16 lg:pb-20 xl:pb-28">
          <span className="text-sm sm:text-base text-dark/60">
            Introduction
          </span>
          <h2 className="text-3xl sm:text-4xl text-center leading-tight max-w-[400px] text-pretty">
            Built for Those Who Want More
          </h2>
          <p className="text-base sm:text-lg text-dark/60 text-center max-w-3xl">
            Whether you train for strength, endurance, or competition, our AI
            turns data into direction. Precision tracking and live coaching help
            you push beyond limits — consistently.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 xl:grid-cols-11 grid-rows-2 gap-2 sm:gap-4 lg:min-h-[500px] xl:min-h-[670px]">
          {coreFeatures.map((feature) => (
            <div
              key={feature.id}
              className={`relative flex flex-col items-start justify-end rounded-xl lg:rounded-3xl overflow-hidden bg-accent p-8 ${feature.gridPosition}`}
            >
              <div className="relative z-10 max-lg:pt-24">
                <Image
                  src={feature.icon}
                  alt="icon"
                  width={49}
                  height={49}
                  className="size-auto"
                />
                <p
                  className={`${feature.image ? "text-background" : "text-dark"} text-base pt-6 max-w-[236px]`}
                >
                  {feature.content}
                </p>
              </div>
              {feature.image && (
                <Image
                  src={feature.image}
                  alt="feature image"
                  width={1000}
                  height={1000}
                  className="absolute top-0 left-0 h-full w-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
