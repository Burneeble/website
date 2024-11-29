import ImageLayout from "../ImageLayout";
import { TextLeftStartFullImageRightCenterProps } from "./TextLeftStartFullImageRightCenter.types";

const TextLeftStartFullImageRightCenter = (
  props: TextLeftStartFullImageRightCenterProps
) => {
  return (
    <div
      className={`
        text-left-start-full-image-right-center section-layout tw-flex
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
      <div className="wrapper tw-flex-1 tw-h-full tw-relative">
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-aspect-square
            tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-0
            tw-w-[calc(100vw/2-20px)]
          `}
        >
          <ImageLayout {...props} />
        </div>
      </div>
    </div>
  );
};

export default TextLeftStartFullImageRightCenter;
