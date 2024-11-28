import ImageLayout from "../ImageLayout";
import { TextRightStartShapeVerticalRightProps } from "./TextRightStartShapeVerticalRight.types";

const TextRightStartShapeVerticalRight = (
  props: TextRightStartShapeVerticalRightProps
) => {
  return (
    <div
      className={`
        text-right-start-shape-vertical-right section-layout tw-flex
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
      <div className="wrapper tw-relative tw-flex-1 tw-h-[780px]">
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-left-[calc((100vw/2)-20px-450px)]
            tw-top-1/2 -tw-translate-y-1/2 tw-w-[450px] tw-h-full tw-z-[-1]
          `}
        />
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-border-[1px]
            tw-border-solid tw-border-red-400 tw-min-w-[320px]
            tw-aspect-[328/675] tw-absolute tw-top-1/2 -tw-translate-y-1/2
            tw-w-fit tw-left-[calc((100vw/2)-20px-450px)] -tw-translate-x-1/2
          `}
        >
          <ImageLayout {...props} />
        </div>
      </div>
    </div>
  );
};

export default TextRightStartShapeVerticalRight;
