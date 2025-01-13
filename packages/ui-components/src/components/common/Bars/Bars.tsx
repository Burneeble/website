import { useEffect, useRef, useState } from "react";
import { BarsProps } from "./Bars.types";
import React from "react";
import { cn } from "@/lib/utils";
import { useClientInfoService } from "@/services";
import gsap from "gsap";

const Bars = (props: BarsProps) => {
  //States
  const [barsElements, setBarsElements] = useState<JSX.Element | null>(null);

  //Hooks
  const bars = useRef<Array<HTMLDivElement>>([]);
  const { width, isClient, screen } = useClientInfoService();

  //Effects

  useEffect(() => {
    if (!isClient) return;

    const elements = (
      <>
        {Array.from({ length: 3 }).map((_, i) => {
          const offset = Math.round(Math.random() * 100);

          return (
            <div
              key={i}
              className={cn(
                `
                  bars tw-absolute tw-right-full tw-h-[3px] tw-w-[265.57px]

                  md:tw-h-[5px] md:tw-w-[467px]

                  xl:tw-h-[.5rem] xl:tw-w-[736px]
                `,
                offset > 40
                  ? "tw-bg-[var(--primary-lighter)] tw-opacity-[.27]"
                  : `tw-bg-[var(--primary-lighest)]`
              )}
              ref={(el) => {
                if (el && !bars.current.includes(el)) bars.current.push(el);
              }}
            />
          );
        })}
      </>
    );

    setBarsElements(elements);
  }, [isClient]);

  useEffect(() => {
    if (!width || !isClient || !bars.current || !barsElements) return;

    let offset: number;

    switch (screen) {
      case "sm":
        offset = 335;
        break;
      case "md":
      case "lg":
        offset = 470;
        break;
      default:
        offset = 740;
        break;
    }

    const timeline = gsap.context(() => {
      bars.current.forEach((bar) => {
        const randomY = Math.random() * 100;

        gsap.set(bar, { y: randomY });

        gsap.to(bar, {
          x: `+=${width + offset}`,
          duration: 3 + Math.random() * 3,
          ease: "in",
          repeat: -1,
          delay: Math.random() * 4,
          modifiers: {
            x: (x) => `${parseFloat(x) % (width + offset)}px`,
          },
        });
      });
    });

    return () => {
      timeline.revert();
    };
  }, [width, isClient, screen, bars, barsElements]);

  return (
    <div className="bars tw-relative tw-h-[100px] tw-w-screen">
      {barsElements}
    </div>
  );
};

export default Bars;
