import ImageLayout from "../ImageLayout";
import { TextTopStartShapeHorizontalBottomProps } from "./TextTopStartShapeHorizontalBottom.types";

const TextTopStartShapeHorizontalBottom = (
  props: TextTopStartShapeHorizontalBottomProps
) => {
  return (
    <div
      className={`
        text-top-start-shape-horizontal-bottom section-layout tw-flex
        tw-flex-col tw-items-center tw-justify-end tw-gap-[10px]
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
            tw-border-solid tw-border-red-400 tw-w-fit tw-h-full tw-z-[5]
            tw-absolute tw-left-1/2 -tw-translate-x-1/2 tw-top-0
          `}
        >
          <ImageLayout {...props} />
        </div>
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

export default TextTopStartShapeHorizontalBottom;
