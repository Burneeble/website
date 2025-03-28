import React from "react";
import { NotFoundProps } from "./NotFound.types";
import { NotFoundIcon } from "@burneeble/icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = (props: NotFoundProps) => {
  const notFoundIcon = props.icon ? (
    props.icon
  ) : (
    <NotFoundIcon className={`tw-text-[100px] tw-text-body`} />
  );

  return (
    <div
      className={`
        not-found tw-inline-flex tw-h-[261px] tw-w-full tw-flex-col
        tw-items-center tw-justify-center tw-gap-[5px]
      `}
    >
      {typeof notFoundIcon === "string" ? (
        <img className="tw-h-20" src={notFoundIcon} />
      ) : typeof notFoundIcon === "object" && "iconName" in notFoundIcon ? (
        <FontAwesomeIcon
          className="tw-h-20 tw-text-body"
          icon={notFoundIcon as IconDefinition}
        />
      ) : (
        notFoundIcon
      )}

      {/* <NotFoundIcon className={`tw-text-[100px] tw-text-body`} /> */}
      <div
        className={`
          not-found-text-content tw-inline-flex tw-w-[700px] tw-max-w-[90%]
          tw-flex-col tw-items-center tw-justify-center
        `}
      >
        <div
          className={`p-default tw-self-stretch tw-text-center tw-font-black`}
        >
          {props.title}
        </div>
        <div className={`p-small tw-text-center`}>{props.text}</div>
      </div>
    </div>
  );
};

export default NotFound;
