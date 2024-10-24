import React from "react";
import { ReviewCardProps } from "./ReviewCard.types";

const ReviewCard = (props: ReviewCardProps) => {
  return (
    <>
      <div className=" tw-w-[412px] tw-h-[243px] tw-p-5 tw-rounded-lg primary-gradient tw-flex-col tw-justify-start tw-items-start tw-gap-[9px] tw-inline-flex">
        <div className="tw-self-stretch tw-justify-start tw-items-center tw-gap-[9px] tw-inline-flex">
          <img
            className="tw-w-[58px] tw-h-[58px] tw-rounded-full"
            src="https://picsum.photos/58/58"
          />
          <div className="tw-grow tw-shrink tw-basis-0 tw-flex-col tw-justify-start tw-items-start tw-inline-flex">
            <p className="">John Smith</p>
            <div className="tw-self-stretch tw-justify-start tw-items-center tw-gap-2.5 tw-inline-flex">
              <span className="tw-text-body tw-text-xl tw-font-light tw-font-['Inter'tw-] tw-leading-[30px]">
                United States
              </span>
              <img
                className="tw-w-5 tw-h-4"
                src="https://picsum.photos/20/16"
              />
            </div>
          </div>
        </div>
        <div className="tw-justify-start tw-items-center tw-inline-flex tw-gap-2">
          <div className="tw-bg-orange-200 tw-w-8 tw-h-8 tw-justify-center tw-items-center tw-flex" />
          <div className="tw-bg-orange-200 tw-w-8 tw-h-8 tw-justify-center tw-items-center tw-flex" />
          <div className="tw-bg-orange-200 tw-w-8 tw-h-8 tw-justify-center tw-items-center tw-flex" />
          <div className="tw-bg-orange-200 tw-w-8 tw-h-8 tw-justify-center tw-items-center tw-flex" />
          <div className="tw-bg-orange-200 tw-w-8 tw-h-8 tw-justify-center tw-items-center tw-flex" />
        </div>
        <p className="tw-self-stretch tw-h-[82px] tw-text-text-body tw-text-xl tw-font-normal tw-font-['Inter'tw-] tw-leading-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dos
        </p>
      </div>
    </>
  );
};

export default ReviewCard;
