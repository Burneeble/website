import { cn } from "@/lib/utils";
import ImageLayout from "../../../ImageLayout";
import { BottomImagesWrapperProps } from "./BottomImagesWrapper.types";
import { ImageLayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const BottomImagesWrapper = (props: BottomImagesWrapperProps) => {
  return (
    <div
      className={cn(
        `
          images tw-w-full tw-flex tw-items-center tw-justify-center

          md:tw-h-[480px]
        `,
        [
          ImageLayoutType.SmarthphoneImageLayout,
          ImageLayoutType.LaptopSmarthphoneImagesLayout,
          ImageLayoutType.LaptopImageLayout,
        ].includes(props.imageLayoutType)
          ? "tw-h-[410px]"
          : [ImageLayoutType.OneSquareImageLayout].includes(
              props.imageLayoutType
            )
          ? `tw-aspect-square tw-max-w-[454px]`
          : "tw-h-[293px]"
      )}
    >
      <ImageLayout {...props} />
    </div>
  );
};

export default BottomImagesWrapper;
