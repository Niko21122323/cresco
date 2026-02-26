import TitleComponent from "../TitleComponent";
import FeatureCard from "../FeatureCard";

import { coreFeatures } from "@/lib/data/coreFeaturesData";

const IntroductionSection = () => {
  return (
    <section className="" id="introduction">
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
          {coreFeatures.map(({ id, icon, image, content, gridPosition }) => (
            <FeatureCard
              key={id}
              icon={icon}
              image={image}
              content={content}
              gridPosition={gridPosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
