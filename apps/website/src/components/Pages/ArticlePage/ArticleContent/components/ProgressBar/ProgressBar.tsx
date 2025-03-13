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
      if (
        scrollTop > 0 &&
        scrollTop + window.innerHeight >=
          props.content.current.getBoundingClientRect().top + window.scrollY
      ) {
        const scrollPercentage =
          ((scrollTop +
            window.innerHeight -
            (props.content.current.getBoundingClientRect().top +
              window.scrollY)) /
            props.content.current.scrollHeight) *
          100;

        gsap.to(bar.current, {
          width: `${scrollPercentage}%`,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(bar.current, {
          width: `0%`,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className={`
        progress-bar tw-fixed tw-left-0 tw-top-0 tw-z-20 tw-h-[.5rem] tw-w-0
        tw-bg-gradient-to-l primary-gradient
      `}
      ref={bar}
    />
  );
};

export default ProgressBar;
