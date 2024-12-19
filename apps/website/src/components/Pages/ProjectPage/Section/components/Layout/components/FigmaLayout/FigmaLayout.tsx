"use client";

import ImageLayout from "../ImageLayout";
import { FigmaLayoutProps } from "./FigmaLayout.types";
import { SectionInfo } from "../Common";

const FigmaLayout = (props: FigmaLayoutProps) => {
  return (
    <div
      className={`
        figma-layout section-layout tw-flex tw-flex-col tw-justify-center
        tw-items-center cs-gap-between-content
      `}
    >
      <SectionInfo {...props} />
      <div
        className={`
          tw-flex tw-items-center tw-justify-center images tw-w-screen
          tw-aspect-[390/345]

          md:tw-aspect-[1512/375]

          sm:tw-aspect-[744/485]
        `}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default FigmaLayout;
