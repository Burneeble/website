import { ImageLayoutType } from "../../../../Section.types";
import { FigmaImagesLayout } from "./components";
import { ImageLayoutProps } from "./ImageLayout.types";

const ImageLayout = (props: ImageLayoutProps) => {
  //Methods
  const getImageLayout = () => {
    console.log(props.imageLayoutType);
    switch (props.imageLayoutType) {
      case ImageLayoutType.FigmaImageLayout:
        console.log("FIGMA");
        return <FigmaImagesLayout {...props} />;
      default:
        return <></>;
    }
  };

  return getImageLayout();
};

export default ImageLayout;
