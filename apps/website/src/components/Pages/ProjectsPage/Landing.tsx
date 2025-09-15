"use client";

import { FlameIcon } from "@burneeble/icons";
import { useClientInfoService } from "@burneeble/ui-components";

export interface LandingProps {
  variant: "gallery" | "portfolio";
}

const Landing = ({ variant }: LandingProps) => {
  const { screen } = useClientInfoService();
  const isPortfolio = variant === "portfolio";

  // Configuration for each variant
  const config = {
    gallery: {
      height: "tw-h-[622px] xl:tw-h-[764px]",
      title: {
        mobile: "Showcase",
        desktop: "Discover our Showcase",
      },
      showSubtitle: false,
    },
    portfolio: {
      height: "tw-h-[622px] xl:tw-h-[764px]",
      title: {
        mobile: "Portfolio",
        desktop: "Discover our Portfolio",
      },
      subtitle: "Premium Collection",
      showSubtitle: false,
    },
  }[variant];

  const isMobile = ["md", "sm", "lg"].includes(screen);

  return (
    <section
      className={`
        ${variant}-landing-section

        tw-relative tw-top-8 tw-flex tw-items-center tw-justify-center

        ${config.height}
      `}
    >
      <div
        className={`
          tw-flex tw-h-[151px] tw-flex-col tw-items-center tw-justify-center
          tw-gap-2.5 tw-font-bowlby-one
        `}
      >
        <div className="tw-font-[60px]">
          <FlameIcon className="tw-h-[60px] tw-w-[60px]" />
        </div>

        <h1
          className={`
              tw-whitespace-nowrap tw-text-center tw-text-4xl tw-font-normal
              tw-text-headings

              lg:tw-text-6xl

              md:tw-text-5xl
            `}
        >
          {isPortfolio
            ? config.subtitle
            : isMobile
            ? config.title.mobile
            : config.title.desktop}
        </h1>
      </div>
    </section>
  );
};

export default Landing;
