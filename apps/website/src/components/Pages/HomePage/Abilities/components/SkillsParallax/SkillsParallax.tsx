"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { Skill } from "./components";
import { SkillsParallaxProps } from "./SkillsParallax.types";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { ScreenSkill } from "@/services/SkillService/models";

const SkillsParallax = (props: SkillsParallaxProps) => {
  //States
  const [currentSkills, setCurrentSkills] = useState<
    Array<ScreenSkill & { title: string }>
  >([]);

  //Hooks
  const { screen, width } = useClientInfoService();
  const skills = useRef<HTMLDivElement>(null);

  //Effects
  useEffect(() => {
    switch (screen) {
      case "sm":
        setCurrentSkills(
          props.skills.map((skill) => {
            return {
              title: skill.title,
              ...skill.sm,
            };
          })
        );
        break;
      case "md":
        if (width) {
          if (width >= 550) {
            setCurrentSkills(
              props.skills.map((skill) => {
                return {
                  title: skill.title,
                  ...skill.md,
                };
              })
            );
          } else {
            setCurrentSkills(
              props.skills.map((skill) => {
                return {
                  title: skill.title,
                  ...skill.sm,
                };
              })
            );
          }
        }
        break;
      case "lg":
        setCurrentSkills(
          props.skills.map((skill) => {
            return {
              title: skill.title,
              ...skill.md,
            };
          })
        );
        break;
      default:
        setCurrentSkills(
          props.skills.map((skill) => {
            return {
              title: skill.title,
              ...skill.xl,
            };
          })
        );
        break;
    }
  }, [props.skills, screen, width]);

  useEffect(() => {
    if (skills.current) {
      skills.current.scrollTo({
        top: 0,
        left:
          (skills.current.scrollWidth / currentSkills.length) *
          props.currentIndex,
        behavior: "smooth",
      });
    }
  }, [props.currentIndex, currentSkills, skills]);

  return (
    <div
      className={`
        skills-parallax tw-relative tw-flex tw-h-full tw-w-full tw-flex-col
        tw-gap-[10px]

        lg:tw-h-[calc(100vh-60px)] lg:tw-max-h-[calc(100vh-60px)] lg:tw-flex-row
        lg:tw-gap-[70px]

        sm:tw-gap-[30px]
      `}
    >
      <div
        className={cn(
          `
            skill-info tw-relative tw-flex tw-w-full tw-flex-1 tw-flex-col
            tw-items-start tw-justify-center tw-gap-[10px]

            sm:tw-flex-[unset]
          `
        )}
      >
        {currentSkills.map((skill, i) => {
          return (
            <div
              className={cn(
                `
                  wrapper tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full
                  tw-transition-all tw-duration-500 tw-ease-in-out
                `,
                ["sm", "md", "lg"].includes(screen) &&
                  `cs-website-horizontal-padding`,
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
                className={`text p-small`}
                dangerouslySetInnerHTML={{
                  __html: skill.description,
                }}
              />
            </div>
          );
        })}
      </div>
      <div
        className={`
          skill-section tw-relative

          lg:tw-relative lg:tw-bottom-[unset] lg:tw-min-h-full

          sm:tw-absolute sm:tw-bottom-0 sm:tw-w-full
        `}
      >
        <div
          className={`
            skills tw-max-w-full tw-overflow-hidden no-scrollbar

            lg:tw-relative lg:tw-h-full lg:tw-overflow-visible
          `}
          ref={skills}
        >
          <div
            className={`
              wrapper tw-relative tw-flex tw-justify-between

              lg:tw-h-full lg:tw-max-h-full lg:!tw-w-[490px] lg:tw-flex-col
              lg:tw-pb-0

              sm:tw-pb-[30px]
            `}
            style={{ width: `${100 * currentSkills.length}%` }}
          >
            {currentSkills.map((skill, i) => {
              return (
                <div
                  key={i}
                  className={cn(
                    `skill-wrapper tw-flex-1`,
                    ["sm", "md", "lg"].includes(screen) &&
                      `cs-website-horizontal-padding`
                  )}
                >
                  <Skill
                    title={skill.title}
                    categories={skill.labels}
                    index={i}
                    currentIndex={props.currentIndex}
                    amount={currentSkills.length}
                  />
                </div>
              );
            })}
          </div>
          {!["sm", "md", "lg"].includes(screen) && (
            <div
              className={cn(
                `
                  end-bar tw-absolute tw-bottom-0 tw-left-[17px] tw-h-[8px]
                  tw-w-[50vw] tw-bg-[var(--primary-lighest)] tw-transition-all
                `,
                props.currentIndex === currentSkills.length - 1
                  ? `tw-bg-[var(--primary-lighest)]`
                  : "tw-bg-[var(--secondary-darker)]"
              )}
              style={{
                transitionDelay: `${
                  props.currentIndex === currentSkills.length - 1 ? 250 : 0
                }ms`,
                transitionDuration: `250ms`,
              }}
            />
          )}
        </div>
        {width && width >= 550 && ["md", "lg"].includes(screen) && (
          <div
            className={cn(
              `
                bar tw-absolute tw-bottom-0 tw-left-1/2 tw-block tw-h-[8px]
                tw-translate-x-[-50%] tw-bg-[var(--primary-lighest)]
              `
            )}
            style={{ width: `calc(100vw * ${currentSkills.length})` }}
          />
        )}
      </div>
    </div>
  );
};

export default SkillsParallax;
