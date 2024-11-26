import { ImageLayoutType } from "../../../../Section.types";
import { FigmaImagesLayout } from "./components";
import { ImageLayoutProps } from "./ImageLayout.types";

const ImageLayout = (props: ImageLayoutProps) => {
  //Methods
  const getImageLayout = () => {
    switch (props.imageLayoutType) {
      case ImageLayoutType.FigmaImageLayout:
        return <FigmaImagesLayout {...props} />;
      default:
        return <></>;
    }
  };

  return getImageLayout();
};

export default ImageLayout;
