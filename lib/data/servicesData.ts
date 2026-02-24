import { ServicesTypes } from "../types/types";

import serviceImg1 from "../../public/photos/services/service-1.webp";
import serviceImg2 from "../../public/photos/services/service-2.webp";
import serviceImg3 from "../../public/photos/services/service-3.webp";
import serviceImg4 from "../../public/photos/services/service-4.webp";
import serviceImg5 from "../../public/photos/services/service-5.webp";
import serviceImg6 from "../../public/photos/services/service-6.webp";

export const services: ServicesTypes[] = [
  {
    id: 1,
    title: "Real-Time Tracking",
    description:
      "Monitor every movement with precision. Our AI captures detailed performance data instantly, giving you clear insight into how you train.",
    image: serviceImg1,
  },
  {
    id: 2,
    title: "Adaptive Coaching",
    description:
      "Get guidance that evolves with you. The AI adjusts recommendations based on your progress, performance, and goals.",
    image: serviceImg2,
  },
  {
    id: 3,
    title: "Performance Insights",
    description:
      "Turn raw data into meaningful metrics. Understand what’s working, what’s not, and where to improve.",
    image: serviceImg3,
  },
  {
    id: 4,
    title: "Multi-Discipline Support",
    description:
      "From strength to endurance, track and optimize across multiple training styles in one intelligent system.",
    image: serviceImg4,
  },
  {
    id: 5,
    title: "Instant Feedback",
    description:
      "Receive live cues during your session to refine technique, increase efficiency, and reduce wasted effort.",
    image: serviceImg5,
  },
  {
    id: 6,
    title: "Smart Progress Reports",
    description:
      "Visualize your improvement over time with clear, structured performance summaries.",
    image: serviceImg6,
  },
];
