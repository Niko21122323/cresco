import { TestimonialsTypes } from "@/lib/types/types";
import Image from "next/image";

const TestimonialCard = ({
  image,
  title,
  message,
  name,
  occupation,
}: TestimonialsTypes) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-background p-6 rounded-3xl overflow-hidden h-full">
      <div className="relative rounded-2xl overflow-hidden col-span-5 max-lg:hidden">
        <Image
          src={image}
          alt="testimonial image"
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy"
          placeholder="blur"
          quality={50}
        />
      </div>
      <div className="lg:col-span-6 flex flex-col justify-between">
        <div>
          <h4 className="text-dark text-xl sm:text-2xl pb-6">{title}</h4>
          <p className="text-dark/60 text-sm sm:text-base">{message}</p>
        </div>

        <div className="flex items-center gap-4 border-t border-border pt-8 mt-16 md:mt-20 lg:mt-28">
          <div className="aspect-square rounded-full overflow-hidden size-16 block lg:hidden">
            <Image
              src={image}
              alt="testimonial image"
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-dark sm:text-lg">{name}</h6>
            <p className="text-dark/60 text-base">{occupation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
