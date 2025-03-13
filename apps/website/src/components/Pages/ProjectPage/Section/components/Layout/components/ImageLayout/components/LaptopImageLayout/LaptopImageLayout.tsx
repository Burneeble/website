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
          images-layout laptop-image-layout tw-relative tw-flex
          tw-aspect-[350/228] tw-w-screen tw-items-center tw-justify-center

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
                  : `
                    md:tw-max-h-[35rem]

                    sm:tw-max-h-[410px]
                  `
                : `sm:tw-max-h-full`
            }

            sm:tw-w-auto
          `
          : "sm:tw-h-auto sm:tw-w-full"
      )}
    >
      {!["sm"].includes(screen) && (
        <img
          src="/img/project/sections/pc-layout.png"
          className={cn(
            `
              tw-absolute tw-left-1/2 tw-top-1/2 tw-aspect-[952/639]
              -tw-translate-x-1/2 -tw-translate-y-1/2
            `,

            mainAxis === "height" ? "tw-h-full" : `tw-w-full`
          )}
        />
      )}
      <img
        src={props.image1}
        className={`
          tw-aspect-[350/228] tw-w-full tw-rounded-lg tw-object-cover

          sm:tw-absolute sm:tw-left-1/2 sm:tw-top-[10.5%] sm:tw-aspect-[645/405]
          sm:tw-w-3/4 sm:-tw-translate-x-1/2 sm:tw-rounded-none
        `}
      />
    </div>
  );
};

export default LaptopImageLayout;
