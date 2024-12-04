"use client";

import { Label, useClientInfoService } from "@burneeble/ui-components";
import { SkillProps } from "./Skill.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

const Skill = (props: SkillProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  //Methods
  const getLabelSize = () => {
    switch (screen) {
      case "sm":
        return "sm";
      case "md":
        return "default";
      default:
        return "lg";
    }
  };

  return (
    <div
      className={`
        skill tw-flex tw-gap-[26px]

        xl:tw-h-full
      `}
    >
      {screen !== "sm" && (
        <div
          className={`
            separator tw-flex tw-justify-center tw-min-h-full tw-min-w-[42px]
            tw-relative
          `}
        >
          {(
            !["sm", "md"].includes(screen)
              ? props.currentIndex >= props.index
              : true
          ) ? (
            <FontAwesomeIcon
              icon={faFire}
              className={`
                fontawesome-gradient-icon tw-text-[42px] tw-relative tw-z-[2]
                tw-filter tw-drop-shadow-[0px_0px_1.5px_rgba(0,0,0,0.5)]
              `}
            />
          ) : (
            <div
              className={`
                triangle tw-bg-gradient-to-t tw-from-[#2B2B2B] tw-to-[#73503D]
                tw-w-[42px] tw-h-[50px] tw-relative tw-z-[2]
              `}
            />
          )}
          <div
            className={cn(
              `
                rod tw-absolute tw-bottom-[-15px] tw-left-1/2
                -tw-translate-x-1/2 tw-h-[calc(100%-11px)] tw-w-[8px]

                xl:tw-h-[calc(100%-20px)]
              `,
              props.index == props.amount - 1 &&
                "xl:tw-h-[calc(100%-40px)] xl:tw-bottom-0",
              (
                !["sm", "md"].includes(screen)
                  ? props.currentIndex >= props.index
                  : true
              )
                ? `
                  tw-bg-gradient-to-b tw-from-[var(--primary-default)]
                  tw-to-[var(--primary-lighest)]
                `
                : `tw-bg-[var(--secondary-darker)]`
            )}
          />
        </div>
      )}
      <div
        className={cn(
          `
            info tw-flex tw-flex-col tw-gap-[10px]

            xl:tw-pb-[30px] xl:tw-transition-all xl:tw-duration-200
            xl:tw-ease-in-out
          `,
          !["sm", "md"].includes(screen) &&
            props.currentIndex < props.index &&
            "tw-blur-[5px]"
        )}
      >
        <h3
          className={`
            title tw-text-headings tw-font-bowlby-one tw-flex tw-items-center
            tw-justify-start tw-gap-[.5rem]
          `}
        >
          {screen === "sm" && (
            <FontAwesomeIcon
              icon={faFire}
              className={`fontawesome-gradient-icon tw-text-3xl`}
            />
          )}
          {props.title}
        </h3>
        <div className="categories tw-flex tw-flex-wrap tw-gap-[10px]">
          {(!["sm", "md"].includes(screen)
            ? props.currentIndex === props.index
            : true) &&
            props.categories.map((category, index) => {
              return (
                <Label key={index} text={category} size={getLabelSize()} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
