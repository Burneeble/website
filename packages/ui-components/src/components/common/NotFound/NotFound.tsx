import React from "react";
import { NotFoundProps } from "./NotFound.types";
import { NotFoundIcon } from "@burneeble/icons";

const NotFound = (props: NotFoundProps) => {
  return (
    <div
      className={`
        not-found tw-inline-flex tw-h-[261px] tw-w-full tw-flex-col
        tw-items-center tw-justify-center tw-gap-[5px]
      `}
    >
      <NotFoundIcon className="tw-text-[100px] tw-text-body" />
      <div
        className={`
          tw-self-stretch tw-text-center tw-font-inter tw-text-3xl tw-font-black
          tw-leading-10 tw-text-body
        `}
      >
        {props.title}
      </div>
      <div
        className={`
          tw-text-center tw-font-inter tw-text-2xl tw-font-normal
          tw-leading-[35px] tw-text-body
        `}
      >
        {props.text}
      </div>
    </div>
  );
};

export default NotFound;
