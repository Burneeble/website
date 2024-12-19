import ImageLayout from "../../../ImageLayout";
import { BottomImagesWrapperProps } from "./BottomImagesWrapper.types";

const BottomImagesWrapper = (props: BottomImagesWrapperProps) => {
  return (
    <div
      className={`
        images tw-w-full tw-flex tw-items-center tw-justify-center tw-h-[293px]

        md:tw-h-[480px]
      `}
    >
      <ImageLayout {...props} />
    </div>
  );
};

export default BottomImagesWrapper;
