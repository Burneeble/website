"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { SmarthphoneImageLayoutProps } from "./SmarthphoneImageLayout.types";
import { cn } from "@/lib/utils";

const SmarthphoneImageLayout = (props: SmarthphoneImageLayoutProps) => {
  //States
  const mainAxis = props.mainAxis || "height";

  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={cn(
        `
          images-layout smarthphone-image-layout tw-relative tw-max-h-[80vh]
          tw-w-full tw-aspect-[350/230]

          sm:tw-aspect-square
        `,
        mainAxis == "height" ? "sm:tw-h-full sm:tw-w-auto" : "sm:tw-w-full"
      )}
    >
      {!["sm", "md"].includes(screen) && (
        <img
          src="/img/project/sections/smartphone-base-layout.svg"
          className={cn(
            `
              tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2
              -tw-translate-y-1/2 tw-aspect-[224/462] tw-h-full
            `
          )}
        />
      )}
      {["md"].includes(screen) && (
        <img
          src="/img/project/sections/tablet-layout.png"
          className={cn(
            `
              tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2
              -tw-translate-y-1/2 tw-aspect-[380/535] tw-h-full
            `
          )}
        />
      )}
      <img
        src={props.image1}
        className={cn(`
          tw-object-cover tw-absolute tw-left-1/2 -tw-translate-x-1/2
          -tw-translate-y-1/2 tw-w-full tw-aspect-[350/230] tw-top-1/2
          tw-rounded-lg

          md:tw-rounded-[30px] md:tw-h-[calc(100%-24px)]
          md:tw-w-[calc(48.5%-24px)]

          sm:tw-rounded-[8px] sm:tw-top-[50.3%] sm:tw-w-auto sm:tw-h-[93%]
          sm:tw-aspect-[275/400]
        `)}
      />
      {!["sm", "md"].includes(screen) && (
        <img
          src="/img/project/sections/smartphone-dock-layout.svg"
          className={`
            tw-absolute tw-top-[10px] tw-w-[23.7%] tw-left-1/2
            -tw-translate-x-1/2
          `}
        />
      )}
    </div>
  );
};

export default SmarthphoneImageLayout;
