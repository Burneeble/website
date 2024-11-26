"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { LayoutType } from "../../Section.types";
import { FigmaLayout } from "./components";
import { LayoutProps } from "./Layout.types";

const Layout = (props: LayoutProps) => {
  //Hooks
  const { screen } = useClientInfoService();

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
        images = props.imageLayoutInfo.imagesLayoutMd;
        break;
    }

    switch (props.layoutType) {
      case LayoutType.FigmaLayout:
        return <FigmaLayout {...props} {...images} />;
      default:
        return <></>;
    }
  };

  return getLayout();
};

export default Layout;
