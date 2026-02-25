import { StaticImageData } from "next/image";
import { ElementType, ReactNode } from "react";

export interface AnalyticsTypes {
  id?: number;
  title: string;
  description: string;
}

export interface FaqTypes {
  id: number;
  question: string;
  answer: string;
}

export interface CoreFeaturesTypes {
  id?: number;
  content: string;
  icon: StaticImageData;
  image?: StaticImageData;
  gridPosition: string;
}

export interface ServicesTypes {
  id?: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export interface TestimonialsTypes {
  id?: number;
  title: string;
  message: string;
  name: string;
  occupation: string;
  image: StaticImageData;
}

export interface FeaturesTypes {
  id: number;
  title: string;
  description: string;
  icon: ElementType;
  image: StaticImageData;
}

export interface AccordionTypes {
  title: string;
  description: string;
  Icon?: ElementType;
  backgroundColor?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export interface AccordionImageTypes {
  id: number;
  image: StaticImageData;
  title: string;
}
export interface AccordionImageDisplayTypes {
  items: AccordionImageTypes[];
  activeId: number | null;
  className?: string;
}

export interface FooterLinksTypes {
  id: number;
  label: string;
  link: string;
}

export interface NavbarLinksTypes {
  id: number;
  label: string;
  link: string;
}

export interface SocialsLinksTypes {
  id: number;
  Icon: ElementType;
  url: string;
}

export interface TitleComponentTypes {
  position?: "center" | "start";
  title: string;
  subtitle: string;
  description?: string;
}

export interface PrimaryButtonTypes {
  title: string;
  url: string;
  theme: string;
}

export interface SwiperButtonTypes {
  id: string;
  children: ReactNode;
}
