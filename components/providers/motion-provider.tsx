"use client";

import { createContext, useContext, useState } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Preloader from "../Preloader";

const MotionContext = createContext({ isLoaderDone: false });

export const useMotionLoading = () => useContext(MotionContext);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [isLoaderDone, setIsLoaderDone] = useState(false);

  return (
    <MotionContext.Provider value={{ isLoaderDone }}>
      <LazyMotion features={domAnimation} strict>
        <Preloader setFinished={() => setIsLoaderDone(true)} />
        {children}
      </LazyMotion>
    </MotionContext.Provider>
  );
}
