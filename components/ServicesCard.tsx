import { ServicesTypes } from "@/lib/types/types";
import Image from "next/image";

const ServicesCard = ({ image, title, description }: ServicesTypes) => {
  return (
    <div className="relative overflow-hidden h-full rounded-3xl">
      <Image
        src={image}
        alt="service image"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 px-6 pb-6 pt-56">
        <h4 className="text-background text-xl sm:text-2xl pb-4">{title}</h4>
        <p className="text-background/80 text-sm sm:max-w-[85%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
