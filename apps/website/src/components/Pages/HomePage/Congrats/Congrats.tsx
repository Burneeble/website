"use client";

import { Button, useClientInfoService } from "@burneeble/ui-components";
import { CongratsProps } from "./Congrats.types";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FlameIcon } from "@burneeble/icons";

const Congrats = (props: CongratsProps) => {
  //States
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState<string | null>(null);
  const [wrongCode, setWrongCode] = useState<boolean>(false);
  const combination = [
    "ArrowUp",
    "B",
    "ArrowLeft",
    "U",
    "ArrowRight",
    "R",
    "ArrowDown",
    "N",
    "-",
    "1",
  ];
  const arrowsIcons = {
    ArrowUp: faArrowUp,
    ArrowDown: faArrowDown,
    ArrowLeft: faArrowLeft,
    ArrowRight: faArrowRight,
  };
  let listenerFlag: boolean = false;

  //Hooks
  const { screen, scrollPos } = useClientInfoService();
  const congrats = useRef<HTMLDivElement>(null);

  //useEffect
  useEffect(() => {
    if (congrats.current) {
      if (
        !["sm", "md"].includes(screen) &&
        scrollPos + window.innerHeight >=
          congrats.current.getBoundingClientRect().top + scrollPos
      ) {
        if (!listenerFlag) {
          window.addEventListener("keydown", handleKeyDown);
          listenerFlag = true;
        }
      } else {
        if (listenerFlag) {
          window.removeEventListener("keydown", handleKeyDown);
          listenerFlag = false;
        }
      }
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [scrollPos, congrats.current]);

  useEffect(() => {
    if (userInput && currentIndex < combination.length) {
      if (userInput === combination[currentIndex]) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
        if (currentIndex > 0) {
          setWrongCode(true);
          setTimeout(() => {
            setWrongCode(false);
          }, 500);
        }
      }
      setUserInput(null);
    }
  }, [userInput]);

  //Methods
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key.includes("Arrow")) e.preventDefault();
    setUserInput(e.key.length === 1 ? e.key.toUpperCase() : e.key);
  };

  return (
    <section
      className={`
        congrats cs-section-structure tw-h-[314px] !tw-min-h-[unset] tw-flex-col
        tw-justify-center tw-items-center tw-flex tw-relative tw-z-10
        cs-gap-between-content

        lg:tw-h-[302px]

        md:tw-h-[624px]
      `}
      ref={congrats}
    >
      <div
        className={`
          wrapper tw-flex tw-items-center tw-justify-center tw-flex-col
          cs-gap-between-text
        `}
      >
        <h2
          className={`
            title tw-text-center tw-text-2xl

            lg:tw-text-5xl lg:tw-leading-[60px]

            md:tw-flex md:tw-text-4xl md:tw-gap-[15px]
          `}
        >
          <span className="cs-text-color-primary-gradient tw-font-bowlby-one">
            Congrats,
          </span>
          <span className="tw-text-headings tw-font-bowlby-one">
            you reached the end.
          </span>
        </h2>
        <p
          className={`
            text p-default tw-self-stretch tw-text-center tw-text-body
            tw-font-normal

            md:tw-mb-[10px]
          `}
        >
          {["sm", "md"].includes(screen)
            ? "So...What are you going to do? We are available to work with you ;)"
            : "We want to gave you a gift, just for you who came this far."}
        </p>
      </div>
      {["sm", "md"].includes(screen) ? (
        <Button size="lg">Start Building</Button>
      ) : (
        <div
          className={cn(
            `
              code tw-text-center tw-text-[#acacac] tw-text-6xl tw-font-inter
              tw-flex tw-gap-[10px] tw-transition-all tw-duration-500
              tw-ease-in-out
            `,
            wrongCode && "tw-animate-cs-wrong tw-text-error"
          )}
        >
          {combination.map((item, i) => {
            if (currentIndex >= combination.length) {
              return (
                <FlameIcon
                  className={`
                    tw-w-[60px] tw-aspect-square tw-animate-cs-zoom-in
                    tw-animate tw-scale-0
                  `}
                  style={{ animationDelay: `${0.075 * i}s` }}
                  key={i}
                />
              );
            } else {
              switch (item) {
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                  return (
                    <FontAwesomeIcon
                      className={cn(
                        "tw-w-[60px] tw-aspect-square",
                        currentIndex > i &&
                          `digit fontawesome-gradient-icon tw-animate-cs-pulse`
                      )}
                      key={i}
                      icon={arrowsIcons[item]}
                    />
                  );
                default:
                  return (
                    <span
                      className={cn(
                        "tw-w-[60px] tw-aspect-square",
                        currentIndex > i &&
                          `
                            digit cs-text-color-primary-gradient
                            tw-animate-cs-pulse
                          `
                      )}
                      key={i}
                    >
                      {item}
                    </span>
                  );
              }
            }
          })}
        </div>
      )}
    </section>
  );
};

export default Congrats;
