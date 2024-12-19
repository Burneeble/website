import { cn } from "@/lib/utils";
import ImageLayout from "../../../ImageLayout";
import { SideFullImagesWrapperProps } from "./SideFullImagesWrapper.types";

const SideFullImagesWrapper = (props: SideFullImagesWrapperProps) => {
  return (
    <div
      className={`
        wrapper tw-w-full tw-relative tw-aspect-square tw-max-w-[454px]

        lg:tw-flex-1 lg:tw-h-full lg:tw-max-w-[630px] lg:tw-w-auto
      `}
    >
      <div
        className={cn(
          `
            images tw-flex tw-items-center tw-justify-center tw-aspect-square
            tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-w-full
            tw-max-w-[454px]

            lg:tw-w-[calc(100vw/2-20px)] lg:tw-max-w-[unset]
          `,
          props.side === `right` ? `tw-left-0` : `tw-right-0`
        )}
      >
        <ImageLayout {...props} mainAxis="width" />
      </div>
    </div>
  );
};

export default SideFullImagesWrapper;
