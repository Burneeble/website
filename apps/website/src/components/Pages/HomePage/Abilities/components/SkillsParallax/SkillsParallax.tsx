"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { Skill } from "./components";
import { SkillsParallaxProps } from "./SkillsParallax.types";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const SkillsParallax = (props: SkillsParallaxProps) => {
  //Hooks
  const { screen } = useClientInfoService();
  const skills = useRef<HTMLDivElement>(null);

  //Effects
  useEffect(() => {
    if (skills.current) {
      skills.current.scrollTo({
        top: 0,
        left:
          (skills.current.scrollWidth / props.skills.length) *
          props.currentIndex,
        behavior: "smooth",
      });
    }
  }, [props.currentIndex, props.skills, skills]);

  return (
    <div
      className={`
        skills-parallax tw-w-full tw-h-full tw-flex tw-gap-[10px] tw-flex-col
        tw-relative

        md:tw-flex-row md:tw-gap-[70px] md:tw-h-[calc(100vh-60px)]

        sm:tw-gap-[30px]
      `}
    >
      <svg>
        <defs>
          <linearGradient
            id="triangle-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#2B2B2B", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#73503D", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <div
        className={`
          skill-info tw-flex tw-items-start tw-justify-center tw-flex-col
          tw-gap-[10px] tw-w-full tw-relative tw-flex-1

          sm:tw-flex-[unset]
        `}
      >
        {props.skills.map((skill, i) => {
          return (
            <>
              <div
                className={cn(
                  `
                    wrapper tw-absolute tw-left-0 tw-top-0 tw-transition-all
                    tw-duration-500 tw-ease-in-out tw-w-full tw-h-full
                  `,
                  props.currentIndex !== i ? `tw-opacity-0` : "tw-opacity-100"
                )}
                key={i}
              >
                <h2
                  className={`title`}
                  dangerouslySetInnerHTML={{
                    __html: skill.extendedTitle,
                  }}
                />
                <p
                  className={`text`}
                  dangerouslySetInnerHTML={{
                    __html: skill.description,
                  }}
                />
              </div>
            </>
          );
        })}
      </div>
      <div
        className={`
          skill-section tw-relative

          md:tw-min-h-full md:tw-relative md:tw-bottom-[unset]

          sm:tw-absolute sm:tw-bottom-0 sm:tw-w-full
        `}
      >
        <div
          className={`
            skills tw-overflow-hidden tw-max-w-full no-scrollbar

            md:tw-h-full md:tw-relative md:tw-overflow-visible
          `}
          ref={skills}
        >
          <div
            className={`
              wrapper tw-justify-between tw-relative tw-flex

              md:!tw-w-[490px] md:tw-flex-col md:tw-pb-0 md:tw-h-full

              sm:tw-pb-[30px]
            `}
            style={{ width: `${100 * props.skills.length}%` }}
          >
            {props.skills.map((skill, i) => {
              return (
                <div key={i} className={`skill-wrapper tw-flex-1`}>
                  <Skill
                    title={skill.title}
                    categories={skill.labels}
                    index={i}
                    currentIndex={props.currentIndex}
                    amount={props.skills.length}
                  />
                </div>
              );
            })}
          </div>
          {!["sm", "md"].includes(screen) && (
            <div
              className={cn(
                `
                  end-bar tw-absolute tw-h-[8px] tw-w-[50vw] tw-left-[17px]
                  tw-bottom-0 tw-bg-[var(--primary-lighest)] tw-transition-all
                  tw-duration-500 tw-ease-in-out
                `,
                props.currentIndex === props.skills.length - 1
                  ? `tw-bg-[var(--primary-lighest)]`
                  : "tw-bg-[var(--secondary-darker)]"
              )}
            />
          )}
        </div>
        {screen === "md" && (
          <div
            className={cn(
              `
                bar tw-translate-x-[-50%] tw-bg-[var(--primary-lighest)]
                tw-absolute tw-bottom-0 tw-left-1/2 tw-h-[8px] tw-block
              `
            )}
            style={{ width: `calc(100vw * ${props.skills.length})` }}
          />
        )}
      </div>
    </div>
  );
};

export default SkillsParallax;
