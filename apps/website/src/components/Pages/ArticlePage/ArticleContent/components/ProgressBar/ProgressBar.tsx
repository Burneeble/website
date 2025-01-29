"use client";

import { useEffect, useRef } from "react";
import { ProgressBarProps } from "./ProgressBar.types";
import gsap from "gsap";

const ProgressBar = (props: ProgressBarProps) => {
  //Hooks
  const bar = useRef<HTMLDivElement>(null);

  //Effects
  useEffect(() => {
    const updateProgress = () => {
      if (!props.content.current || !bar.current) return;

      const { scrollTop } = document.documentElement;
      const scrollPercentage =
        (scrollTop / props.content.current.scrollHeight) * 100;

      gsap.to(bar.current, {
        width: `${scrollPercentage}%`,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className={`
        progress-bar tw-fixed tw-top-0 tw-left-0 tw-w-0 tw-h-[.5rem]
        tw-bg-gradient-to-l primary-gradient tw-z-20
      `}
      ref={bar}
    />
  );
};

export default ProgressBar;
