import ImageLayout from "../ImageLayout";
import { TextTopCenterFullImageBottomCenterProps } from "./TextTopCenterFullImageBottomCenter.types";

const TextTopCenterFullImageBottomCenter = (
  props: TextTopCenterFullImageBottomCenterProps
) => {
  return (
    <div
      className={`
        text-top-center-full-image-bottom-center section-layout tw-flex
        tw-flex-col tw-items-center tw-justify-end tw-gap-[10px]
      `}
    >
      <h1
        className="title tw-w-full tw-text-center"
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
      <p className="tw-text-center tw-mb-[50px]">{props.text}</p>
      <div
        className={`
          images tw-w-full tw-mt-[30px] tw-flex tw-items-center
          tw-justify-center tw-border-[1px] tw-border-solid tw-border-red-400
          tw-h-[600px]
        `}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextTopCenterFullImageBottomCenter;
