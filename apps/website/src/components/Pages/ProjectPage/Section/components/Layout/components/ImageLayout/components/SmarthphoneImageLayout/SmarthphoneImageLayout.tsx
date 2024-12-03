"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { SmarthphoneImageLayoutProps } from "./SmarthphoneImageLayout.types";

const SmarthphoneImageLayout = (props: SmarthphoneImageLayoutProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={`
        images-layout smarthphone-image-layout tw-relative tw-max-h-[80vh]
        tw-aspect-[350/230] tw-w-full

        md:tw-h-full md:tw-aspect-[224/462] md:tw-w-auto

        sm:tw-aspect-[380/535]
      `}
    >
      {!["sm", "md"].includes(screen) && (
        <img
          src="/img/project/sections/smartphone-base-layout.svg"
          className={`
            tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2
            -tw-translate-y-1/2 tw-h-full
          `}
        />
      )}
      {["md"].includes(screen) && (
        <img
          src="/img/project/sections/tablet-layout.png"
          className={`
            tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2
            -tw-translate-y-1/2 tw-h-full tw-aspect-[380/535]
          `}
        />
      )}
      <img
        src={props.image1}
        className={`
          tw-object-cover tw-absolute tw-left-1/2 -tw-translate-x-1/2
          -tw-translate-y-1/2 tw-w-[calc(100%-40px)] tw-aspect-[350/230]
          tw-top-1/2 tw-rounded-lg

          md:tw-rounded-[20px] md:tw-h-[calc(100%-24px)]
          md:tw-w-[calc(100%-24px)]

          sm:tw-rounded-[8px] sm:tw-top-[50.3%] sm:tw-w-[calc(100%-37px)]
          sm:tw-h-[calc(100%-37px)]
        `}
      />
      {!["sm", "md"].includes(screen) && (
        <img
          src="/img/project/sections/smartphone-dock-layout.svg"
          className={`
            tw-absolute tw-top-[10px] tw-w-[49%] tw-left-1/2 -tw-translate-x-1/2
          `}
        />
      )}
    </div>
  );
};

export default SmarthphoneImageLayout;
