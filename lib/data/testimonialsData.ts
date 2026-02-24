import { TestimonialsTypes } from "../types/types";

import testimonialImg1 from "../../public/photos/testimonials/testimonial-1.webp";
import testimonialImg2 from "../../public/photos/testimonials/testimonial-2.webp";
import testimonialImg3 from "../../public/photos/testimonials/testimonial-3.webp";
import testimonialImg4 from "../../public/photos/testimonials/testimonial-4.webp";

export const testimonials: TestimonialsTypes[] = [
  {
    id: 1,
    title: "The Most Precise Training Tool I’ve Used",
    message:
      "I’ve tried multiple tracking apps, but this is the first one that actually feels intelligent. The real-time insights helped me adjust my training immediately, and within weeks I noticed measurable improvements in both endurance and strength.",
    name: "Daniel Petrov",
    occupation: "Endurance Athlete",
    image: testimonialImg1,
  },
  {
    id: 2,
    title: "It Feels Like Having a Personal Coach 24/7",
    message:
      "The adaptive feedback completely changed how I train. Instead of guessing whether I’m improving, I can see the data clearly and make smarter decisions every session.",
    name: "Markus Schneider",
    occupation: "Strength & Conditioning Coach",
    image: testimonialImg2,
  },
  {
    id: 3,
    title: "Data That Actually Makes Sense",
    message:
      "What I love most is how simple the insights are. It takes complex performance metrics and turns them into clear guidance I can act on right away.",
    name: "Elena Dimitrova",
    occupation: "Competitive Cyclist",
    image: testimonialImg3,
  },
  {
    id: 4,
    title: "Smarter Training, Real Results",
    message:
      "The AI doesn’t just track workouts — it understands them. The recovery insights alone have helped me avoid overtraining and stay consistent.",
    name: "Luca Romano",
    occupation: "Triathlete",
    image: testimonialImg4,
  },
];
