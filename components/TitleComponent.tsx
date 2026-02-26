import { GoDotFill } from "react-icons/go";
import { TitleComponentTypes } from "@/lib/types/types";
import ScrollReveal from "./animations/ScrollReveal";

const TitleComponent = ({
  position = "start",
  title,
  subtitle,
  description,
}: TitleComponentTypes) => {
  return (
    <div
      className={`flex flex-col ${position === "center" ? "items-center justify-center" : "items-start"} gap-6`}
    >
      <ScrollReveal>
        <div className="flex items-center gap-3">
          <GoDotFill className="text-accent text-lg" />
          <span className="block text-dark/60 border-l border-border pl-3">
            {subtitle}
          </span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <h2
          className={`text-3xl sm:text-4xl leading-tight max-w-[450px] text-pretty ${position === "center" ? "text-center" : "text-start"}`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p
            className={`text-base sm:text-lg text-dark/60 max-w-2xl xl:max-w-3xl ${position === "center" ? "text-center" : "text-start"}`}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
};

export default TitleComponent;
