import Image from "next/image";
import TitleComponent from "../TitleComponent";

import { coreFeatures } from "@/lib/data/coreFeaturesData";

const IntroductionSection = () => {
  return (
    <section className="">
      <div className="container mx-auto px-6">
        <div className="title-component-padding-b">
          <TitleComponent
            position="center"
            title="Built for Those Who Want More"
            subtitle="Introduction"
            description="Whether you train for strength, endurance, or competition, our AI turns data into direction. Precision tracking and live coaching help you push beyond limits — consistently."
          />
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
