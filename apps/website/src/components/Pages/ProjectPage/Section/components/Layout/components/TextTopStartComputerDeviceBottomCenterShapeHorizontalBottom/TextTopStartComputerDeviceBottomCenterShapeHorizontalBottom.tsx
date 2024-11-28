import ImageLayout from "../ImageLayout";
import { TextTopStartComputerDeviceBottomCenterShapeHorizontalBottomProps } from "./TextTopStartComputerDeviceBottomCenterShapeHorizontalBottom.types";

const TextTopStartComputerDeviceBottomCenterShapeHorizontalBottom = (
  props: TextTopStartComputerDeviceBottomCenterShapeHorizontalBottomProps
) => {
  return (
    <div
      className={`
        text-top-start-computer-device-bottom-center-shape-horizontal-bottom
        section-layout tw-flex tw-flex-col tw-items-center tw-justify-end
        tw-gap-[10px]
      `}
    >
      <h1
        className="title tw-w-full"
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
      <p className="tw-mb-[50px]">{props.text}</p>
      <div
        className={`
          wrapper tw-relative tw-w-full tw-mt-[30px] tw-h-[600px]
          tw-border-solid tw-border-blue-400 tw-border-[1px]
        `}
      >
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-border-[1px]
            tw-border-solid tw-border-red-400 tw-w-[713px] tw-h-[447px] tw-z-[5]
            tw-absolute tw-left-1/2 -tw-translate-x-1/2 tw-top-[28px]
          `}
        >
          <ImageLayout {...props} />
        </div>
        <img
          src="/img/project/sections/pc-layout.png"
          className={`
            tw-absolute tw-z-[2] tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2
            -tw-translate-y-[53%] tw-w-[951px]
          `}
        />
        <div
          className={`
            layout-shape tw-rounded-t-lg tw-w-full tw-h-[411px] tw-left-0
            tw-bottom-0
          `}
        ></div>
      </div>
    </div>
  );
};

export default TextTopStartComputerDeviceBottomCenterShapeHorizontalBottom;
