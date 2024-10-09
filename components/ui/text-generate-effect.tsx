"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

export const TextGenerateEffect = ({ words, className }: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    // Animate each word's opacity with a staggered delay for a smooth reveal effect
    animate(
      "span",
      { opacity: 1, y: 0 },
      { duration: 0.8, delay: stagger(0.15), ease: "easeInOut" }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline-flex flex-wrap justify-center">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={cn(
              "text-white opacity-0 inline-block translate-y-4", // Add translateY for animation effect
              idx % 2 === 0 ? "text-purple-500" : "text-blue-500" // Alternate word colors
            )}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="leading-snug tracking-wide text-black dark:text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
