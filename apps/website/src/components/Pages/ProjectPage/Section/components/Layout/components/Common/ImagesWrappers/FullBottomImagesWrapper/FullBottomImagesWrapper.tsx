import ImageLayout from "../../../ImageLayout";
import { FullBottomImagesWrapperProps } from "./FullBottomImagesWrapper.types";

const FullBottomImagesWrapper = (props: FullBottomImagesWrapperProps) => {
  return (
    <div
      className={`
        images tw-w-full tw-flex tw-items-center tw-justify-center tw-h-[410px]

        md:tw-h-[600px]
      `}
    >
      <ImageLayout {...props} />
    </div>
  );
};

export default FullBottomImagesWrapper;
