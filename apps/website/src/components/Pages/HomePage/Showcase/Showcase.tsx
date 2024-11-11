"use client";

import { Carousel, Label } from "@burneeble/ui-components";
import { ShowcaseProps } from "./Showcase.types";

const Showcase = (props: ShowcaseProps) => {
  return (
    <section
      className={`
        showcase cs-section-structure tw-inline-flex tw-h-[844px] tw-flex-col
        tw-items-center tw-justify-center tw-gap-2.5 tw-px-5 tw-py-[50px]
      `}
    >
      <div className="tw-w-full tw-h-[33.49px] tw-relative">
        <div
          className={`
            tw-w-[332.77px] tw-h-[3.56px] tw-left-[190.26px] tw-top-0
            tw-absolute tw-bg-[var(--primary-lighest)]
          `}
        />
        <div
          className={`
            tw-w-[128.98px] tw-h-[4.28px] tw-right-[100%] tw-translate-x-1/2
            tw-top-[12.11px] tw-absolute tw-bg-[var(--primary-lighter)]
            tw-opacity-[.27]
          `}
        />
        <div
          className={`
            tw-w-[332.77px] tw-h-[3.56px] tw-left-[100%] -tw-translate-x-1/8
            tw-top-[29.93px] tw-absolute tw-bg-[var(--primary-lighter)]
            tw-opacity-[.27]
          `}
        />
      </div>
      <div
        className={`
          tw-my-[115px] tw-flex tw-flex-col tw-items-center tw-justify-center
          tw-gap-[10px]
        `}
      >
        <div className="tw-text-center tw-h-[38px]">
          <span
            className={`
              tw-text-headings tw-text-2xl tw-font-normal tw-font-bowlby-one
            `}
          >
            Check out{" "}
            <span
              className={`
                text-color-primary-gradient tw-text-2xl tw-font-normal
                tw-font-bowlby-one
              `}
            >
              our work
            </span>
            .
          </span>
        </div>
        <div
          className={`
            tw-h-[31px] tw-justify-center tw-items-center tw-gap-[11.90px]
            tw-inline-flex
          `}
        >
          <Label text={"Mint DApp"} size={"sm"} />
          <Label text={"Crossmint"} size={"sm"} />
          <Label text={"Ethereum"} size={"sm"} />
        </div>
        <Carousel
          images={[
            "https://picsum.photos/500",
            "https://picsum.photos/600",
            "https://picsum.photos/1920/1080",
            "https://picsum.photos/800/900",
            "https://picsum.photos/100",
            "https://picsum.photos/500/325",
          ]}
          cta={{
            children: "See All Projects",
            variant: "secondary",
            size: "default",
          }}
        />
      </div>
      <div className={`tw-w-full tw-h-[33.49px] tw-relative`}>
        <div
          className={`
            tw-w-[332.77px] tw-h-[3.56px] -tw-right-[10%] tw-top-0 tw-absolute
            tw-bg-[var(--primary-lighest)]
          `}
        />
        <div
          className={`
            tw-w-[128.98px] tw-h-[4.28px] tw-left-[500px] tw-top-[-12.11px]
            tw-absolute tw-bg-[var(--primary-lighter)] tw-opacity-[.27]
          `}
        />
        <div
          className={`
            tw-Rectangle13 tw-w-[332.77px] tw-h-[3.56px] tw-right-full
            tw-top-[-29.93px] tw-absolute tw-bg-[var(--primary-lighter)]
            tw-opacity-[.27] tw-translate-x-1/2
          `}
        />
      </div>
    </section>
  );
};

export default Showcase;
