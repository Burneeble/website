"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { LaptopImageLayoutProps } from "./LaptopImageLayout.types";
import { cn } from "@/lib/utils";

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
          tw-aspect-[952/639] tw-flex tw-items-center tw-justify-center

          md:tw-aspect-[952/639]
        `,
        mainAxis === "height"
          ? "sm:tw-h-full sm:tw-max-h-[35rem] sm:tw-w-auto"
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
          tw-object-cover tw-rounded-lg tw-w-full tw-aspect-[348/204]

          sm:tw-rounded-none sm:tw-top-[10.5%] sm:tw-w-[75%]
          sm:tw-aspect-[645/405] sm:tw-left-1/2 sm:tw-absolute
          sm:-tw-translate-x-1/2
        `}
      />
    </div>
  );
};

export default LaptopImageLayout;
