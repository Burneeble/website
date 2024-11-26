import ImageLayout from "../ImageLayout";
import { TextTopStartImageBottomCenterProps } from "./TextTopStartImageBottomCenter.types";

const TextTopStartImageBottomCenter = (
  props: TextTopStartImageBottomCenterProps
) => {
  return (
    <div
      className={`
        text-top-start-image-bottom-center section-layout tw-flex tw-flex-col
        tw-items-center tw-justify-center tw-gap-[10px]
      `}
    >
      <h1
        className="title tw-w-full"
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
      <p>{props.text}</p>
      <div
        className={`
          images tw-w-full tw-mt-[30px] tw-flex tw-items-center
          tw-justify-center tw-border-[1px] tw-border-solid tw-border-red-400
          tw-h-[480px]
        `}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextTopStartImageBottomCenter;
