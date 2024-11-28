import ImageLayout from "../ImageLayout";
import { TextLeftStartImageRightCenterShapeVerticalRightProps } from "./TextLeftStartImageRightCenterShapeVerticalRight.types";

const TextLeftStartImageRightCenterShapeVerticalRight = (
  props: TextLeftStartImageRightCenterShapeVerticalRightProps
) => {
  return (
    <div
      className={`
        text-left-start-image-right-center-shape-vertical-right section-layout
        tw-flex tw-items-center tw-justify-center tw-gap-[40px]
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
          tw-aspect-[630/532] tw-relative
        `}
      >
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-left-[calc((100vw/2)-20px-200px)]
            tw-top-1/2 -tw-translate-y-1/2 tw-w-[200px] tw-h-[675px] tw-z-[-1]
          `}
        />
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextLeftStartImageRightCenterShapeVerticalRight;
