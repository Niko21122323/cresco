import { FeaturesTypes } from "../types/types";

import { GiConvergenceTarget } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { TbHealthRecognition } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";

import featureImg1 from "../../public/photos/whyUs/feature-1.webp";
import featureImg2 from "../../public/photos/whyUs/feature-2.webp";
import featureImg3 from "../../public/photos/whyUs/feature-3.webp";
import featureImg4 from "../../public/photos/whyUs/feature-4.webp";

export const features: FeaturesTypes[] = [
  {
    id: 1,
    title: "Precision You Can Trust",
    description:
      "Built on advanced tracking technology, delivering consistent and reliable performance data every session.",
    icon: GiConvergenceTarget,
    image: featureImg1,
  },
  {
    id: 2,
    title: "Intelligent Performance Engine",
    description:
      "Our AI analyzes, adapts, and evolves with you to provide smarter coaching over time.",
    icon: LuBrainCircuit,
    image: featureImg2,
  },
  {
    id: 3,
    title: "Recovery, Optimized",
    description:
      "Monitor fatigue, balance intensity, and train at the right pace to maximize results and prevent burnout.",
    icon: TbHealthRecognition,
    image: featureImg3,
  },
  {
    id: 4,
    title: "Built for Athletes",
    description:
      "Connect, compete, and grow within a community driven by progress and performance.",
    icon: FaRunning,
    image: featureImg4,
  },
];
