"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { LaptopImageLayoutProps } from "./LaptopImageLayout.types";

const LaptopImageLayout = (props: LaptopImageLayoutProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={`
        images-layout laptop-image-layout tw-relative tw-h-full
        tw-aspect-[952/639] tw-flex tw-items-center tw-justify-center
      `}
    >
      {screen != "sm" && (
        <img
          src="/img/project/sections/pc-layout.png"
          className={`
            tw-hidden tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2
            -tw-translate-y-1/2 tw-h-full tw-aspect-[952/639]

            md:tw-block
          `}
        />
      )}
      <img
        src={props.image1}
        className={`
          tw-object-cover tw-mx-auto tw-rounded-lg tw-w-[calc(100%-42px)]
          tw-aspect-[348/204]

          md:tw-left-1/2 md:tw-top-[10.5%] md:tw-aspect-[645/405] md:tw-w-[75%]
          md:tw-absolute md:-tw-translate-x-1/2 md:tw-mx-0 md:tw-rounded-none
        `}
      />
    </div>
  );
};

export default LaptopImageLayout;
