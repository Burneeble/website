"use client";

import { useRef } from "react";
import { Technology } from "./components";
import { TechnologiesProps } from "./Technologies.types";

const Technologies = (props: TechnologiesProps) => {
  //Hooks
  const wrapper = useRef<HTMLDivElement>(null);
  return (
    <section
      className={`
        technologies-section cs-section-structure tw-flex tw-min-h-0
        tw-max-w-full tw-items-center tw-justify-center
        tw-bg-[radial-gradient(circle,_rgba(255,92,1,0.23)_4px,_transparent_4px)_center]

        xl:tw-px-[103px] xl:tw-py-[100px]
      `}
    >
      <div
        className={`
          content tw-flex tw-flex-col tw-items-center tw-justify-center
          tw-gap-[10px]
          tw-bg-[radial-gradient(rgba(255,92,1,0.5)_0%,transparent_80%)]
        `}
        ref={wrapper}
      >
        <h2 className="tw-text-center">
          <span className={`cs-text-color-primary-gradient`}>Technologies</span>
          <span> Used.</span>
        </h2>
        <div
          className={`
            technologies tw-relative tw-flex tw-flex-wrap tw-items-center
            tw-justify-center tw-gap-[20px]
          `}
        >
          {props.technologies.map((technology, i) => {
            return <Technology wrapperRef={wrapper} key={i} {...technology} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
