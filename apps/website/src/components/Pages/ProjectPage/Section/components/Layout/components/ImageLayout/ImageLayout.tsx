"use client";

import { useEffect, useState } from "react";
import { ImageLayoutType } from "../../../../Section.types";
import { FigmaImagesLayout } from "./components";
import { ImageLayoutProps } from "./ImageLayout.types";

const ImageLayout = (props: ImageLayoutProps) => {
  //States
  const [comp, setComp] = useState<JSX.Element>(<></>);

  //Effects
  useEffect(() => {
    setComp(getImageLayout());
  }, []);

  //Methods
  const getImageLayout = () => {
    switch (props.imageLayoutType) {
      case ImageLayoutType.FigmaImageLayout:
        return <FigmaImagesLayout {...props} />;
      default:
        return <></>;
    }
  };

  return <>{comp}</>;
};

export default ImageLayout;
