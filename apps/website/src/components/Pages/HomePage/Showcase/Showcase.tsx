"use client";

import {
  Carousel,
  Label,
  useClientInfoService,
} from "@burneeble/ui-components";
import { ShowcaseProps } from "./Showcase.types";

const Showcase = (props: ShowcaseProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <section
      className={`
        showcase cs-section-structure tw-flex tw-h-[844px] tw-flex-col
        tw-items-center tw-justify-center tw-gap-2.5 tw-relative

        md:tw-h-[1133px]
      `}
    >
      {screen == "sm" ? (
        <div
          className={`
            tw-w-[400.78px] tw-h-[90%] tw-origin-top-left tw-rotate-[-30.59deg]
            tw-bg-[radial-gradient(_var(--secondary-lighter)_10%,_rgba(1,1,1,0)_80%)]
            tw-rounded-full tw-absolute tw-blur-[100px] -tw-left-[10rem]
            tw-top-[15rem] tw-z-[-1] tw-opacity-[.6]
          `}
        />
      ) : (
        <>
          <div
            className={`
              shape tw-w-[306px] tw-h-[307px] tw-left-0 -tw-translate-x-[40%]
              tw-top-[10rem] tw-opacity-[.4]

              xl:tw-w-[597] xl:tw-h-[597px] xl:tw-top-0 xl:-tw-left-[150px]
              xl:-tw-translate-y-[30%]
            `}
          />
          <div
            className={`
              shape tw-w-[257px] tw-h-[256px] tw-right-0 tw-translate-x-[40%]
              tw-top-[10rem] tw-opacity-[.6]

              xl:tw-w-[447] xl:tw-h-[447px] xl:tw-top-0 xl:-tw-right-[150px]
              xl:-tw-translate-y-[30%]
            `}
          />
        </>
      )}
      {["sm", "md", "lg"].includes(screen) && (
        <div className="tw-w-full tw-h-[33.49px] tw-relative">
          <div
            className={`
              tw-w-[332.77px] tw-h-[3.56px] tw-left-[190.26px] tw-top-0
              tw-absolute tw-bg-[var(--primary-lighest)]

              md:tw-h-[5px] md:tw-w-[467px]
            `}
          />
          <div
            className={`
              tw-w-[128.98px] tw-h-[4.28px] tw-right-[100%] tw-translate-x-1/2
              tw-top-[12.11px] tw-absolute tw-bg-[var(--primary-lighter)]
              tw-opacity-[.27]

              md:tw-h-[5px] md:tw-w-[181px] md:tw-top-[17px]
            `}
          />
          <div
            className={`
              tw-w-[332.77px] tw-h-[3.56px] tw-left-[100%] -tw-translate-x-1/8
              tw-top-[29.93px] tw-absolute tw-bg-[var(--primary-lighter)]
              tw-opacity-[.27]

              md:tw-translate-x-[-80%] md:tw-h-[5px] md:tw-w-[467px]
              md:tw-top-[42px]
            `}
          />
        </div>
      )}
      <div
        className={`
          tw-my-[115px] tw-flex tw-flex-col tw-items-center tw-justify-center
          tw-gap-[10px]

          md:tw-my-[189px]

          xl:tw-gap-[20px] xl:tw-my-[33px]
        `}
      >
        <div
          className={`
            tw-text-center tw-h-[38px]

            md:tw-h-[55px]

            xl:tw-h-[70px]
          `}
        >
          <h2
            className={`
              tw-text-headings tw-text-2xl tw-font-normal tw-font-bowlby-one

              md:tw-text-4xl

              xl:tw-text-5xl
            `}
          >
            Check out{" "}
            <span
              className={`
                text-color-primary-gradient tw-font-normal tw-font-bowlby-one
              `}
            >
              our work
            </span>
            .
          </h2>
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
            size: screen == "md" ? "lg" : "default",
          }}
        />
      </div>
      <div className={`tw-w-full tw-h-[33.49px] tw-relative`}>
        <div
          className={`
            tw-w-[332.77px] tw-h-[3.56px] -tw-right-[10%] tw-top-0 tw-absolute
            tw-bg-[var(--primary-lighest)]

            md:tw-right-[20%] md:tw-h-[5px] md:tw-w-[467px]

            xl:tw-h-2 xl:tw-w-[736px]
          `}
        />
        <div
          className={`
            tw-w-[128.98px] tw-h-[4.28px] tw-left-[500px] tw-top-[-12.11px]
            tw-absolute tw-bg-[var(--primary-lighter)] tw-opacity-[.27]

            md:tw-left-[95%] md:tw-h-[5px] md:tw-w-[181px] md:tw-top-[-17px]

            xl:tw-h-2 xl:tw-w-[736px] xl:tw-top-[27px]
          `}
        />
        <div
          className={`
            tw-Rectangle13 tw-w-[332.77px] tw-h-[3.56px] tw-right-full
            tw-top-[-29.93px] tw-absolute tw-bg-[var(--primary-lighter)]
            tw-opacity-[.27] tw-translate-x-1/2

            md:tw-translate-x-[80%] md:tw-h-[5px] md:tw-w-[467px]
            md:tw-top-[-42px]

            xl:tw-h-2 xl:tw-w-[285px] xl:tw-top-[65px]
          `}
        />
      </div>
    </section>
  );
};

export default Showcase;
