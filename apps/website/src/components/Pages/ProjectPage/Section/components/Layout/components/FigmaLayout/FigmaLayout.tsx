"use client";

import ImageLayout from "../ImageLayout";
import { FigmaLayoutProps } from "./FigmaLayout.types";
import { SectionInfo } from "../Common";
import { cn } from "@/lib/utils";
import { ImageLayoutType } from "../../../../Section.types";

const FigmaLayout = (props: FigmaLayoutProps) => {
  return (
    <div className={`figma-layout section-layout layout-structure tw-flex-col`}>
      <SectionInfo {...props} />
      <div
        className={cn(
          `
            tw-flex tw-items-center tw-justify-center images tw-w-screen images

            md:tw-aspect-[1512/375]

            sm:tw-aspect-[744/485]
          `,
          props.imageLayoutType === ImageLayoutType.LaptopImageLayout
            ? `tw-h-[410px]`
            : `tw-aspect-[390/345]`
        )}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default FigmaLayout;
