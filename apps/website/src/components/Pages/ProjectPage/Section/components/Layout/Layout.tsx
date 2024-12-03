"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { LayoutType } from "../../Section.types";
import {
  FigmaLayout,
  TextLeftCenterFullImageRightCenter,
  TextLeftCenterImageRightCenter,
  TextLeftCenterImageRightCenterShapeVerticalRight,
  TextLeftStartFullImageRightCenter,
  TextLeftStartImageRightCenter,
  TextLeftStartImageRightCenterShapeVerticalRight,
  TextRightCenterShapeHorizontalRight,
  TextRightCenterFullImageLeftCenter,
  TextRightCenterImageLeftCenter,
  TextRightCenterImageLeftCenterShapeVerticalLeft,
  TextTopCenterShapeHorizontalBottom,
  TextTopCenterFullImageBottomCenter,
  TextTopCenterImageBottomCenter,
  TextTopStartShapeHorizontalBottom,
  TextTopStartFullImageBottomCenter,
  TextTopStartImageBottomCenter,
  TextRightStartShapeHorizontalRight,
  TextRightCenterShapeHorizontalLeft,
  TextRightCenterShapeVerticalRight,
  TextRightStartShapeVerticalRight,
  TextRightCenterShapeVerticalLeft,
  TextCenterCenterImageBackground,
} from "./components";
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
      case LayoutType.TextTopCenterImageBottomCenter:
        return <TextTopCenterImageBottomCenter {...props} {...images} />;
      case LayoutType.TextTopStartImageBottomCenter:
        return <TextTopStartImageBottomCenter {...props} {...images} />;
      case LayoutType.TextTopCenterFullImageBottomCenter:
        return <TextTopCenterFullImageBottomCenter {...props} {...images} />;
      case LayoutType.TextTopStartFullImageBottomCenter:
        return <TextTopStartFullImageBottomCenter {...props} {...images} />;
      case LayoutType.TextTopCenterShapeHorizontalBottom:
        return <TextTopCenterShapeHorizontalBottom {...props} {...images} />;
      case LayoutType.TextTopStartShapeHorizontalBottom:
        return <TextTopStartShapeHorizontalBottom {...props} {...images} />;
      case LayoutType.TextLeftCenterImageRightCenter:
        return <TextLeftCenterImageRightCenter {...props} {...images} />;
      case LayoutType.TextLeftStartImageRightCenter:
        return <TextLeftStartImageRightCenter {...props} {...images} />;
      case LayoutType.TextRightCenterImageLeftCenter:
        return <TextRightCenterImageLeftCenter {...props} {...images} />;
      case LayoutType.TextLeftCenterFullImageRightCenter:
        return <TextLeftCenterFullImageRightCenter {...props} {...images} />;
      case LayoutType.TextLeftStartFullImageRightCenter:
        return <TextLeftStartFullImageRightCenter {...props} {...images} />;
      case LayoutType.TextRightCenterFullImageLeftCenter:
        return <TextRightCenterFullImageLeftCenter {...props} {...images} />;
      case LayoutType.TextLeftCenterImageRightCenterShapeVerticalRight:
        return (
          <TextLeftCenterImageRightCenterShapeVerticalRight
            {...props}
            {...images}
          />
        );
      case LayoutType.TextLeftStartImageRightCenterShapeVerticalRight:
        return (
          <TextLeftStartImageRightCenterShapeVerticalRight
            {...props}
            {...images}
          />
        );
      case LayoutType.TextRightCenterImageLeftCenterShapeVerticalLeft:
        return (
          <TextRightCenterImageLeftCenterShapeVerticalLeft
            {...props}
            {...images}
          />
        );
      case LayoutType.TextRightCenterShapeHorizontalRight:
        return <TextRightCenterShapeHorizontalRight {...props} {...images} />;
      case LayoutType.TextRightStartShapeHorizontalRight:
        return <TextRightStartShapeHorizontalRight {...props} {...images} />;
      case LayoutType.TextRightCenterShapeHorizontalLeft:
        return <TextRightCenterShapeHorizontalLeft {...props} {...images} />;
      case LayoutType.TextRightCenterShapeVerticalRight:
        return <TextRightCenterShapeVerticalRight {...props} {...images} />;
      case LayoutType.TextRightStartShapeVerticalRight:
        return <TextRightStartShapeVerticalRight {...props} {...images} />;
      case LayoutType.TextRightCenterShapeVerticalLeft:
        return <TextRightCenterShapeVerticalLeft {...props} {...images} />;
      case LayoutType.TextCenterCenterImageBackground:
        return <TextCenterCenterImageBackground {...props} {...images} />;
      default:
        return <></>;
    }
  };

  return <>{comp}</>;
};

export default Layout;
