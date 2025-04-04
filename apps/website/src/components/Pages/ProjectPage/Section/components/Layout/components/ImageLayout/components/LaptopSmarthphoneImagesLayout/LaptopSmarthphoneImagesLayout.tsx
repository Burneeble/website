"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import LaptopImageLayout from "../LaptopImageLayout";
import SmarthphoneImageLayout from "../SmarthphoneImageLayout";
import { LaptopSmarthphoneImagesLayoutProps } from "./LaptopSmarthphoneImagesLayout.types";
import { cn } from "@/lib/utils";
import { LayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const LaptopSmarthphoneImagesLayout = (
  props: LaptopSmarthphoneImagesLayoutProps
) => {
  //States
  const mainAxis = props.mainAxis || "height";

  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={cn(
        `
          images-layout laptop-smarthphone-images-layout tw-flex
          tw-aspect-[350/228] tw-max-h-screen tw-w-full tw-items-center
          tw-justify-center

          md:tw-aspect-[2/1]

          sm:tw-aspect-square
        `,
        mainAxis == "height"
          ? `
            ${
              props.layoutType !== LayoutType.TextCenterCenterImageBackground
                ? `
                  lg:tw-max-h-[35rem]

                  sm:tw-max-h-[30rem]
                `
                : "sm:tw-max-h-full"
            }

            sm:tw-h-full sm:tw-w-auto
          `
          : `sm:tw-w-full`
      )}
    >
      {!["sm", "md"].includes(screen) && (
        <LaptopImageLayout {...props} mainAxis="height" />
      )}
      <div
        className={`
          tw-flex tw-aspect-[350/228] tw-w-full tw-items-center
          tw-justify-center tw-overflow-hidden

          md:tw-aspect-[224/462] md:tw-h-[66%] md:-tw-translate-x-[20%]

          sm:tw-aspect-[380/535] sm:tw-h-full sm:tw-w-auto
        `}
      >
        <SmarthphoneImageLayout
          {...props}
          image1={props.image2!}
          mainAxis="height"
        />
      </div>
    </div>
  );
};

export default LaptopSmarthphoneImagesLayout;
