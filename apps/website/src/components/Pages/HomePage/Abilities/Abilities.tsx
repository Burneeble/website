"use client";

import { useEffect, useRef, useState } from "react";
import { AbilitiesProps } from "./Abilities.types";
import { SkillsParallax } from "./components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Abilities = (props: AbilitiesProps) => {
  //States
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  //Hooks
  const sectionRef = useRef<HTMLElement>(null);

  //Effects
  useEffect(() => {
    const section = sectionRef.current;

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${(props.skills.length + 1) * window.innerHeight}`,
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const newCounter = Math.min(
          props.skills.length - 1,
          Math.floor(self.progress * props.skills.length)
        );
        setCurrentIndex(newCounter);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        abilities-section cs-section-structure tw-relative tw-justify-center
        tw-items-center tw-flex tw-flex-col !tw-max-h-screen !tw-w-screen
      `}
    >
      <div
        className={`
          tw-w-[700px] tw-h-[700px]
          tw-bg-[radial-gradient(circle,var(--primary-light)_0%,_rgba(0,0,0,0)_70%)]
          tw-rounded-full tw-blur-[100px] tw-opacity-[.5] tw-absolute tw-top-0
          tw-left-0 -tw-translate-x-1/2
        `}
      />
      <SkillsParallax currentIndex={currentIndex} skills={props.skills} />
    </section>
  );
};

export default Abilities;
