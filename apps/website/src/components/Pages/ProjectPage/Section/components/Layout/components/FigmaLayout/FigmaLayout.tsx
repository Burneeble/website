import { FigmaLayoutProps } from "./FigmaLayout.types";

const FigmaLayout = (props: FigmaLayoutProps) => {
  return (
    <div
      className={`
        figma-layout tw-flex tw-flex-col tw-justify-center tw-items-center
      `}
    >
      <h1 className="title" dangerouslySetInnerHTML={{ __html: props.title }} />
      <p className="text">{props.text}</p>
    </div>
  );
};

export default FigmaLayout;
