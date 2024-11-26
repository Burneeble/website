"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { LayoutType } from "../../Section.types";
import { FigmaLayout } from "./components";
import { LayoutProps } from "./Layout.types";
import { useEffect, useState } from "react";

const Layout = (props: LayoutProps) => {
  //States
  const [comp, setComp] = useState<JSX.Element>(<></>);

  //Hooks
  const { screen } = useClientInfoService();

  //Effects
  useEffect(() => {
    setComp(getLayout());
  }, [screen]);

  //Methods
  const getLayout = () => {
    let images: {
      image1: string;
      image2?: string;
      image3?: string;
      image4?: string;
    };

    switch (screen) {
      case "sm":
        images = props.imageLayoutInfo.imagesLayoutSm;
        break;
      case "md":
        images = props.imageLayoutInfo.imagesLayoutMd;
        break;
      default:
        images = props.imageLayoutInfo.imagesLayoutXl;
        break;
    }

    switch (props.layoutType) {
      case LayoutType.FigmaLayout:
        return <FigmaLayout {...props} {...images} />;
      default:
        return <></>;
    }
  };

  return <>{comp}</>;
};

export default Layout;
