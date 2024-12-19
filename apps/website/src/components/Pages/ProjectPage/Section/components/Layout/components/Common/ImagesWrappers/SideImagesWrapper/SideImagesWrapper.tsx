import ImageLayout from "../../../ImageLayout";
import { SideImagesWrapperProps } from "./SideImagesWrapper.types";

const SideImagesWrapper = (props: SideImagesWrapperProps) => {
  return (
    <div
      className={`
        images tw-flex tw-items-center tw-justify-center tw-w-full
        tw-aspect-square tw-max-w-[454px]

        lg:tw-max-w-[630px] lg:tw-flex-1
      `}
    >
      <ImageLayout {...props} mainAxis="width" />
    </div>
  );
};

export default SideImagesWrapper;
