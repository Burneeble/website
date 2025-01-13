"use client";

import { useEffect, useRef, useState } from "react";
import { AbilitiesProps } from "./Abilities.types";
import { SkillsParallax } from "./components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useClientInfoService } from "@burneeble/ui-components";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const Abilities = (props: AbilitiesProps) => {
  //States
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  //Hooks
  const sectionRef = useRef<HTMLElement>(null);
  const { screen } = useClientInfoService();

  //Effects
  useEffect(() => {
    const section = sectionRef.current;

    // Create a ScrollTrigger instance to control the scroll behavior.
    ScrollTrigger.create({
      trigger: section, // The element that triggers the scroll animation.
      start: "top top", // Start the trigger when the top of the section meets the top of the viewport.
      end: () => `+=${(props.skills.length + 1) * window.innerHeight}`,
      // Dynamically calculate the end of the scroll animation based on the number of skills and viewport height.
      pin: true, // Pin the section in place while the scroll animation occurs.
      scrub: true, // Smoothly scrubs the animation in sync with the user's scroll.
      onUpdate: (self) => {
        // Triggered on every scroll update, providing progress information.
        const newCounter = Math.min(
          props.skills.length - 1, // Ensure the counter doesn't exceed the skills array length.
          Math.floor(self.progress * props.skills.length)
          // Calculate the new index based on scroll progress and the total number of skills.
        );
        setCurrentIndex(newCounter); // Update the current index state.
      },
    });

    // Cleanup function to remove all ScrollTriggers when the component unmounts.
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // Ensures no memory leaks or unnecessary listeners remain.
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        `
          abilities-section cs-section-structure tw-relative tw-justify-center
          tw-items-center tw-flex tw-flex-col !tw-max-h-screen !tw-w-screen
        `,
        ["sm", "md", "lg"].includes(screen) && "tw-px-0"
      )}
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
