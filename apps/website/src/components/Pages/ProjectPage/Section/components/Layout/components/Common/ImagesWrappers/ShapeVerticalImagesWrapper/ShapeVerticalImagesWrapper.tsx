import ImageLayout from "../../../ImageLayout";
import { VerticalShape } from "../../Shapes";
import { ShapeVerticalImagesWrapperProps } from "./ShapeVerticalImagesWrapper.types";

const ShapeVerticalImagesWrapper = (props: ShapeVerticalImagesWrapperProps) => {
  return (
    <div
      className={`
        wrapper tw-w-screen tw-flex tw-items-center tw-justify-center
        tw-relative tw-h-[350px]

        lg:tw-h-[675px] lg:tw-flex-1

        sm:tw-h-[515px]
      `}
    >
      <VerticalShape align={props.side} />
      <div
        className={`
          images tw-flex tw-items-center tw-justify-center tw-w-full
          tw-aspect-[630/532] tw-relative tw-max-w-[454px] tw-mx-[20px]

          lg:tw-max-w-[630px] lg:tw-mx-0 lg:tw-flex-1
        `}
      >
        <ImageLayout {...props} mainAxis="width" />
      </div>
    </div>
  );
};

export default ShapeVerticalImagesWrapper;
