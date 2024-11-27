import ImageLayout from "../ImageLayout";
import { TextLeftStartImageRightCenterProps } from "./TextLeftStartImageRightCenter.types";

const TextLeftStartImageRightCenter = (
  props: TextLeftStartImageRightCenterProps
) => {
  return (
    <div
      className={`
        text-left-start-image-right-center section-layout tw-flex
        tw-items-center tw-justify-center tw-gap-[40px]
      `}
    >
      <div
        className={`
          info tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center
        `}
      >
        <h1
          className="title tw-w-full"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p>{props.text}</p>
      </div>
      <div
        className={`
          images tw-flex-1 tw-flex tw-items-center tw-justify-center
          tw-border-[1px] tw-border-solid tw-border-red-400 tw-w-full
          tw-aspect-square
        `}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextLeftStartImageRightCenter;
