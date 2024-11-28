"use client";

import { useEffect, useState } from "react";
import { ImageLayoutType } from "../../../../Section.types";
import {
  FigmaImagesLayout,
  LargeImageLayout,
  ThreeImagesLayout,
  TwoImagesLayout,
} from "./components";
import { ImageLayoutProps } from "./ImageLayout.types";
import { useClientInfoService } from "@burneeble/ui-components";

const ImageLayout = (props: ImageLayoutProps) => {
  //States
  const [comp, setComp] = useState<JSX.Element>(<></>);

  //Hooks
  const { screen } = useClientInfoService();

  //Effects
  useEffect(() => {
    setComp(getImageLayout());
  }, [screen, props.image1, props.image2, props.image3, props.image4]);

  //Methods
  const getImageLayout = () => {
    switch (props.imageLayoutType) {
      case ImageLayoutType.FigmaImagesLayout:
        return <FigmaImagesLayout {...props} />;
      case ImageLayoutType.ThreeImagesLayout:
        return <ThreeImagesLayout {...props} />;
      case ImageLayoutType.TwoImagesLayout:
        return <TwoImagesLayout {...props} />;
      case ImageLayoutType.LargeImageLayout:
        return <LargeImageLayout {...props} />;
      default:
        return <></>;
    }
  };

  return <>{comp}</>;
};

export default ImageLayout;
