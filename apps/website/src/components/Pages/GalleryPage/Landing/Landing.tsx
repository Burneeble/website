"use client";

import { FlameIcon } from "@burneeble/icons";
import { LandingProps } from "./Landing.types";
import { useClientInfoService } from "@burneeble/ui-components";

const Landing = (props: LandingProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <section
      className={`
        tw-h-[622px] tw-flex tw-justify-center tw-items-center
        tw-bg-[linear-gradient(180deg,_black_0%,_rgba(102,102,102,0)_100%),url('/img/gallery-page/landing/bg-sm.png')]
        tw-bg-no-repeat tw-bg-cover tw-bg-center

        md:tw-bg-[linear-gradient(180deg,_black_0%,_rgba(102,102,102,0)_100%),url('/img/gallery-page/landing/bg-md.png')]

        xl:tw-bg-[linear-gradient(180deg,_black_0%,_rgba(102,102,102,0)_100%),url('/img/gallery-page/landing/bg-xl.png')]
        xl:tw-h-[764px]
      `}
    >
      <div
        className={`
          tw-h-[151px] tw-flex-col tw-justify-center tw-items-center tw-gap-2.5
          tw-flex tw-font-bowlby-one
        `}
      >
        <div className="tw-font-[60px]">
          <FlameIcon className="tw-h-[60px] tw-w-[60px]" />
        </div>
        <h1
          className={`
            tw-text-[var(--primary-lighter)] tw-font-normal tw-opacity-70
            tw-text-center
          `}
        >
          {["md", "sm"].includes(screen) ? (
            "Showcase"
          ) : (
            <>Discover our{screen === "lg" && <br />} Showcase</>
          )}
        </h1>
        <h2
          className={`
            tw-text-center tw-text-headings tw-font-normal tw-relative
            -tw-top-1/4

            lg:-tw-top-[40%]

            md:-tw-top-[60%]
          `}
        >
          {["md", "sm"].includes(screen) ? (
            "Showcase"
          ) : (
            <>Discover our{screen === "lg" && <br />} Showcase</>
          )}
        </h2>
      </div>
    </section>
  );
};

export default Landing;
