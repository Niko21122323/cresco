import { CoreFeaturesTypes } from "../types/types";

import introductionImg1 from "../../public/photos/introduction/introduction-img1.webp";
import introductionImg2 from "../../public/photos/introduction/introduction-img2.webp";
import introductionImg3 from "../../public/photos/introduction/introduction-img3.webp";

import iconStar from "../../public/icons/icon-star.svg";
import iconHeart from "../../public/icons/icon-heart.svg";
import iconTrending from "../../public/icons/icon-trending.svg";
import iconFocus from "../../public/icons/icon-focus.svg";

export const coreFeatures: CoreFeaturesTypes[] = [
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
      "lg:col-span-4 xl:col-span-3 lg:row-span-2 xl:col-start-9 lg:row-start-1",
  },
];
