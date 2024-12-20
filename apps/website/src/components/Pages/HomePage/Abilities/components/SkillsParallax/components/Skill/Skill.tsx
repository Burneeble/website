"use client";

import { Label, useClientInfoService } from "@burneeble/ui-components";
import { SkillProps } from "./Skill.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Skill = (props: SkillProps) => {
  //Hooks
  const { screen } = useClientInfoService();
  const iconRef = useRef<SVGPathElement>(null);

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

  //Effects
  useEffect(() => {
    if (iconRef.current) {
      const iconPath =
        "M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z";
      const trianglePath = "M224 32 L32 480 L416 480 Z";

      const targetPath =
        props.currentIndex >= props.index ? iconPath : trianglePath;

      gsap.to(iconRef.current, {
        duration: 0.5,
        attr: { d: targetPath },
        fill:
          props.currentIndex >= props.index
            ? 'url("#gradient")'
            : 'url("#triangle-gradient")',
        ease: "power1.inOut",
      });
    }
  }, [iconRef.current, props.currentIndex]);

  return (
    <div
      className={`
        skill tw-flex tw-gap-[26px]

        sm:tw-h-full
      `}
    >
      {screen !== "sm" && (
        <div
          className={`
            separator tw-flex tw-justify-center tw-min-h-full tw-min-w-[42px]
            tw-relative
          `}
        >
          {!["sm", "md"].includes(screen) ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`
                  tw-w-[42px] tw-h-[42px] tw-relative tw-z-[2] tw-filter
                  tw-drop-shadow-[0px_0px_1.5px_rgba(0,0,0,0.5)]
                `}
                viewBox="0 0 448 512"
              >
                <path
                  ref={iconRef}
                  className="tw-w-full tw-h-full"
                  d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"
                />
              </svg>
            </>
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
                rod tw-absolute tw-bottom-[-25px] tw-left-1/2
                -tw-translate-x-1/2 tw-h-[calc(100%-11px)] tw-w-[8px]

                md:tw-h-[calc(100%-20px)] md:tw-transition-all
                md:tw-duration-500 md:tw-ease-in-out md:tw-bottom-[-15px]
              `,
              props.index == props.amount - 1 &&
                "md:tw-h-[calc(100%-40px)] md:!tw-bottom-0",
              (!["sm", "md"].includes(screen)
                ? props.currentIndex >= props.index
                : true) && `active`
            )}
          />
        </div>
      )}
      <div
        className={cn(
          `
            info tw-flex tw-flex-col tw-gap-[10px]

            md:tw-pb-[30px] md:tw-transition-all md:tw-duration-200
            md:tw-ease-in-out

            sm:tw-h-full
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
        <div
          className={cn(
            `
              categories tw-flex tw-flex-wrap tw-gap-[10px] tw-overflow-hidden
              tw-transition-all tw-duration-500
              tw-animation-timing-[cubic-bezier(0.68,-0.55,0.27,1.55)]
            `,
            (
              !["sm", "md"].includes(screen)
                ? props.currentIndex === props.index
                : true
            )
              ? "tw-max-h-[20rem]"
              : "tw-max-h-0"
          )}
        >
          {props.categories.map((category, index) => {
            return <Label key={index} text={category} size={getLabelSize()} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
