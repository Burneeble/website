"use client";

import {
  AwsIcon,
  CrossmintIcon,
  NextJsIcon,
  StripeIcon,
  TailwindIcon,
} from "@burneeble/icons";
import { TechnologyProps } from "./Technology.types";
import { Popup, PopupType, usePopup } from "@burneeble/ui-components";

const Technology = (props: TechnologyProps) => {
  //Hooks
  const popupLogic = usePopup();

  //Methods
  const getIcon = () => {
    switch (props.slug) {
      case "aws":
        return <AwsIcon />;
      case "next-js":
        return <NextJsIcon />;
      case "stripe":
        return <StripeIcon />;
      case "crossmint":
        return <CrossmintIcon />;
      case "tailwind":
        return <TailwindIcon />;
      default:
        return <>not found</>;
    }
  };

  return (
    <div
      className={`
        technology tw-w-[164.92px] tw-h-[58px] tw-py-[15.27px]
        tw-bg-gradient-to-r tw-from-[var(--primary-default)]
        tw-to-[var(--primary-lighter)] tw-rounded tw-flex-col tw-justify-center
        tw-items-center tw-inline-flex tw-text-[100px] tw-text-headings
        tw-relative tw-transition-all tw-duration-200 tw-ease-in-out
        tw-cursor-help

        hover:tw-bg-gradient-to-r hover:tw-from-brown-500 hover:tw-to-brown-200

        md:tw-w-[188.35px] md:tw-h-[62px] md:tw-text-[106px]

        xl:tw-w-[324px] xl:tw-h-[106.06px] xl:tw-text-[152px]
      `}
      onMouseEnter={() => {
        popupLogic.openPopup();
      }}
      onMouseLeave={() => {
        popupLogic.closePopup();
      }}
    >
      {getIcon()}
      <Popup
        logic={popupLogic}
        type={PopupType.Absolute}
        className={`
          tw-top-[calc(100%+10px)] tw-left-1/2 -tw-translate-x-1/2 tw-flex
          tw-justify-start tw-items-center tw-flex-col
        `}
      >
        <h3 className="tw-text-center">{props.name}</h3>
        <p className="tw-text-center tw-font-light !tw-text-xl">
          {props.description}
        </p>
      </Popup>
    </div>
  );
};

export default Technology;
