"use client";

import { useEffect, useState } from "react";
import { ImageLayoutType } from "../../../../Section.types";
import {
  FigmaImagesLayout,
  LaptopImageLayout,
  LaptopSmarthphoneImagesLayout,
  LargeImageLayout,
  OneImageLayout,
  OneSquareImageLayout,
  SmarthphoneImageLayout,
  ThreeImagesLayout,
  TwoImagesLayout,
  VeryLargeImageLayout,
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
  }, [
    screen,
    props.imageLayoutType,
    props.image1,
    props.image2,
    props.image3,
    props.image4,
  ]);

  //Methods
  const getImageLayout = () => {
    switch (props.imageLayoutType) {
      case ImageLayoutType.FigmaImageLayout:
        return <FigmaImagesLayout {...props} />;
      case ImageLayoutType.ThreeImagesLayout:
        return <ThreeImagesLayout {...props} />;
      case ImageLayoutType.TwoImagesLayout:
        return <TwoImagesLayout {...props} />;
      case ImageLayoutType.LargeImageLayout:
        return <LargeImageLayout {...props} />;
      case ImageLayoutType.VeryLargeImageLayout:
        return <VeryLargeImageLayout {...props} />;
      case ImageLayoutType.OneImageLayout:
        return <OneImageLayout {...props} />;
      case ImageLayoutType.OneSquareImageLayout:
        return <OneSquareImageLayout {...props} />;
      case ImageLayoutType.LaptopImageLayout:
        return <LaptopImageLayout {...props} />;
      case ImageLayoutType.SmarthphoneImageLayout:
        return <SmarthphoneImageLayout {...props} />;
      case ImageLayoutType.LaptopSmarthphoneImagesLayout:
        return <LaptopSmarthphoneImagesLayout {...props} />;
      default:
        return <></>;
    }
  };

  return <>{comp}</>;
};

export default ImageLayout;
