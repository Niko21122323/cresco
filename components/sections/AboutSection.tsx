import PrimaryButton from "../buttons/PrimaryButton";
import Image from "next/image";

import aboutImage from "../../public/photos/about/about-image.webp";
import AnalyticsComponent from "../AnalyticsComponent";

const AboutSection = () => {
  return (
    <section className="section-padding-y">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 lg:gap-20 lg:pb-24">
          <div className="flex flex-col gap-10 lg:gap-16 lg:col-span-7 xl:col-span-6">
            <h2 className="text-dark max-[325px]:text-2xl text-3xl sm:text-4xl lg:text-3xl xl:text-4xl leading-tight">
              Train smarter across any discipline. Our AI tracks, analyzes, and
              coaches in real time to help you continuously improve.
            </h2>
            <div className="w-fit">
              <PrimaryButton title="Join the waitlist" url="/" theme="dark" />
            </div>
          </div>
          <div className="col-span-5 xl:col-end-13 max-lg:hidden">
            <Image
              src={aboutImage}
              alt="about image"
              width={1000}
              height={800}
              className="aspect-video object-cover w-full h-full rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="py-24 lg:pt-24 lg:border-t lg:border-border">
        <div className="container mx-auto px-6">
          <AnalyticsComponent />
        </div>
      </div>
      <div className="aspect-square sm:aspect-video block lg:hidden">
        <Image
          src={aboutImage}
          alt="about image"
          width={1000}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default AboutSection;
