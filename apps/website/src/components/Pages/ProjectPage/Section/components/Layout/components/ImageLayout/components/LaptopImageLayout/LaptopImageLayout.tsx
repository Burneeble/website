"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { LaptopImageLayoutProps } from "./LaptopImageLayout.types";

const LaptopImageLayout = (props: LaptopImageLayoutProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={`
        images-layout laptop-image-layout tw-relative tw-w-screen
        tw-aspect-[952/639] tw-flex tw-items-center tw-justify-center

        md:tw-aspect-[952/639]

        sm:tw-h-full sm:tw-w-auto
      `}
    >
      {!["sm"].includes(screen) && (
        <img
          src="/img/project/sections/pc-layout.png"
          className={`
            tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2
            -tw-translate-y-1/2 tw-h-full tw-aspect-[952/639]
          `}
        />
      )}
      <img
        src={props.image1}
        className={`
          tw-object-cover tw-mx-auto tw-rounded-lg tw-w-[calc(100%-42px)]
          tw-aspect-[348/204]

          sm:tw-rounded-none sm:tw-top-[10.5%] sm:tw-w-[75%]
          sm:tw-aspect-[645/405] sm:tw-left-1/2 sm:tw-absolute
          sm:-tw-translate-x-1/2 sm:tw-mx-0
        `}
      />
    </div>
  );
};

export default LaptopImageLayout;
