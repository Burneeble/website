"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import LaptopImageLayout from "../LaptopImageLayout";
import SmarthphoneImageLayout from "../SmarthphoneImageLayout";
import { LaptopSmarthphoneImagesLayoutProps } from "./LaptopSmarthphoneImagesLayout.types";

const LaptopSmarthphoneImagesLayout = (
  props: LaptopSmarthphoneImagesLayoutProps
) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={`
        images-layout laptop-smarthphone-images-layout tw-h-full tw-max-h-screen
        tw-flex tw-items-center tw-justify-center tw-aspect-[2/1]
      `}
    >
      <LaptopImageLayout {...props} />
      {!["sm", "md"].includes(screen) && (
        <div
          className={`
            tw-h-[66%] tw-aspect-[350/230]

            md:tw-aspect-[224/462]

            sm:tw-aspect-[380/535]
          `}
        >
          <SmarthphoneImageLayout {...props} image1={props.image2!} />
        </div>
      )}
    </div>
  );
};

export default LaptopSmarthphoneImagesLayout;
