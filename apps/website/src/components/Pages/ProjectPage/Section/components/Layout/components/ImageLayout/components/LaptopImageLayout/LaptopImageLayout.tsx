"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { LaptopImageLayoutProps } from "./LaptopImageLayout.types";
import { cn } from "@/lib/utils";
import { LayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const LaptopImageLayout = (props: LaptopImageLayoutProps) => {
  //States
  const mainAxis = props.mainAxis || "height";

  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={cn(
        `
          images-layout laptop-image-layout tw-relative tw-w-screen
          tw-aspect-[350/228] tw-flex tw-items-center tw-justify-center

          sm:tw-aspect-[952/639]
        `,
        mainAxis === "height"
          ? `
            sm:tw-h-full

            ${
              props.layoutType !== LayoutType.TextCenterCenterImageBackground
                ? [
                    LayoutType.TextTopCenterShapeHorizontalBottom,
                    LayoutType.TextTopStartShapeHorizontalBottom,
                  ].includes(props.layoutType)
                  ? `
                    md:tw-max-h-[35rem]

                    sm:tw-max-h-[calc(90vw*639/952)]
                  `
                  : `sm:tw-max-h-[35rem]`
                : `sm:tw-max-h-full`
            }

            sm:tw-w-auto
          `
          : "sm:tw-w-full sm:tw-h-auto"
      )}
    >
      {!["sm"].includes(screen) && (
        <img
          src="/img/project/sections/pc-layout.png"
          className={cn(
            `
              tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2
              -tw-translate-y-1/2 tw-aspect-[952/639]
            `,

            mainAxis === "height" ? "tw-h-full" : `tw-w-full`
          )}
        />
      )}
      <img
        src={props.image1}
        className={`
          tw-object-cover tw-rounded-lg tw-w-full tw-aspect-[350/228]

          sm:tw-rounded-none sm:tw-top-[10.5%] sm:tw-w-[75%]
          sm:tw-aspect-[645/405] sm:tw-left-1/2 sm:tw-absolute
          sm:-tw-translate-x-1/2
        `}
      />
    </div>
  );
};

export default LaptopImageLayout;
