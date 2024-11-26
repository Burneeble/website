import ImageLayout from "../ImageLayout";
import { FigmaLayoutProps } from "./FigmaLayout.types";

const FigmaLayout = (props: FigmaLayoutProps) => {
  return (
    <div
      className={`
        figma-layout section-layout tw-flex tw-flex-col tw-justify-center
        tw-items-center tw-gap-[10px]
      `}
    >
      <h2
        className="title tw-text-center"
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
      <p className="text tw-text-center">{props.text}</p>
      <ImageLayout {...props} />
    </div>
  );
};

export default FigmaLayout;
