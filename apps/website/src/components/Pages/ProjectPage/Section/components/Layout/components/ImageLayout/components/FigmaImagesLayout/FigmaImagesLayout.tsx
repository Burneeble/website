import { FigmaImagesLayoutProps } from "./FigmaImagesLayout.types";

const FigmaImagesLayout = (props: FigmaImagesLayoutProps) => {
  return (
    <div className="figma-images-layout images-layout tw-w-screen">
      <img src={props.image1} className="tw-w-full" />
    </div>
  );
};

export default FigmaImagesLayout;
