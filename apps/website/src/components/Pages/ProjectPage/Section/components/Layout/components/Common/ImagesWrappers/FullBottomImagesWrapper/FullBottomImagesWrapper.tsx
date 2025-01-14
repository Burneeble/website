import { cn } from "@/lib/utils";
import ImageLayout from "../../../ImageLayout";
import { FullBottomImagesWrapperProps } from "./FullBottomImagesWrapper.types";
import { ImageLayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const FullBottomImagesWrapper = (props: FullBottomImagesWrapperProps) => {
  return (
    <div
      className={cn(
        `
          images tw-w-full tw-flex tw-items-center tw-justify-center

          md:tw-h-[600px]
        `,
        props.imageLayoutType === ImageLayoutType.OneSquareImageLayout
          ? `
            tw-aspect-square tw-max-w-[454px]

            md:tw-w-auto
          `
          : `
            tw-aspect-[350/410] tw-w-full

            md:tw-aspect-[1300/600]

            sm:tw-aspect-[682/625]

            tw:tw-h-auto
          `
      )}
    >
      <ImageLayout {...props} />
    </div>
  );
};

export default FullBottomImagesWrapper;
