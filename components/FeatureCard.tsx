import { CoreFeaturesTypes } from "@/lib/types/types";
import Image from "next/image";
import ScrollReveal from "./animations/ScrollReveal";

const FeatureCard = ({
  icon,
  image,
  content,
  gridPosition,
}: CoreFeaturesTypes) => {
  return (
    <div className={`${gridPosition}`}>
      <ScrollReveal>
        <div className="relative flex flex-col items-start justify-end rounded-xl lg:rounded-3xl overflow-hidden bg-accent p-8 h-full w-full">
          <div className="relative z-10 max-lg:pt-24">
            <Image
              src={icon}
              alt="icon"
              width={49}
              height={49}
              className="size-auto"
            />
            <p
              className={`${image ? "text-background" : "text-dark"} text-base pt-6 max-w-[236px]`}
            >
              {content}
            </p>
          </div>
          {image && (
            <Image
              src={image}
              alt="feature image"
              width={1000}
              height={1000}
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
          )}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default FeatureCard;
