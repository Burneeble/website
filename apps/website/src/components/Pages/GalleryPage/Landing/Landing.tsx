"use client";

import { FlameSymbol } from "@burneeble/icons";
import { LandingProps } from "./Landing.types";
import { useClientInfoService } from "@burneeble/ui-components";

const Landing = (props: LandingProps) => {
  //Hooks
  const { screen } = useClientInfoService();
  //linear-gradient(180deg, black 0%, rgba(102, 102, 102, 0) 100%)
  return (
    <section
      className={`
        cs-section-structure tw-h-[622px] tw-flex tw-justify-center
        tw-items-center
        tw-bg-[linear-gradient(180deg,_black_0%,_rgba(102,102,102,0)_100%),url('/img/gallery-page/landing/bg-sm.png')]
        tw-bg-no-repeat tw-bg-cover tw-bg-center

        md:tw-bg-[linear-gradient(180deg,_black_0%,_rgba(102,102,102,0)_100%),url('/img/gallery-page/landing/bg-md.png')]
      `}
    >
      <div
        className={`
          tw-h-[151px] tw-flex-col tw-justify-center tw-items-center tw-gap-2.5
          tw-flex tw-text-5xl tw-font-bowlby-one
        `}
      >
        <div className="tw-font-[60px]">
          <FlameSymbol className="tw-h-[60px] tw-w-[60px]" />
        </div>
        <div
          className={`
            tw-text-[var(--primary-lighter)] tw-font-normal tw-opacity-70
          `}
        >
          {["md", "sm"].includes(screen) ? "Showcase" : "Discover our Showcase"}
        </div>
        <div
          className={`
            tw-text-center tw-text-headings tw-text-3xl tw-font-normal
            tw-relative -tw-top-1/4
          `}
        >
          Showcase
        </div>
      </div>
    </section>
  );
};

export default Landing;
