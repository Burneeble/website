import React from "react";
import { ReviewCardProps } from "./ReviewCard.types";
import { useClientInfoService } from "@/services";
import { Rating } from "./components";

const ReviewCard = (props: ReviewCardProps) => {
  //Hooks
  const { width } = useClientInfoService();

  return (
    <>
      <div className="secondary-gradient tw-bg-gradient-to-tr tw-w-[412px] tw-min-h-[243px] tw-p-5 tw-rounded-lg  tw-flex-col tw-justify-start tw-items-start tw-gap-[9px] tw-inline-flex">
        <div className="tw-self-stretch tw-justify-start tw-items-center tw-gap-[9px] tw-inline-flex">
          <img
            className="tw-w-[58px] tw-h-[58px] tw-rounded-full"
            src="https://picsum.photos/58/58"
          />
          <div className="tw-grow tw-shrink tw-basis-0 tw-flex-col tw-justify-start tw-items-start tw-inline-flex">
            <div className="h-7 justify-start items-center gap-2.5 tw-flex tw-flex-row tw-justify-center tw-items-center tw-gap-2.5">
              <p className="tw-self-stretch tw-text-headings tw-text-2xl tw-font-black tw-font-inter tw-leading-[35px]">
                John Smith
              </p>
              {width <= 992 && (
                <img
                  className="tw-w-5 tw-h-4"
                  src="https://picsum.photos/20/16"
                />
              )}
            </div>
            {width <= 992 ? (
              //STAR COMPONENT
              <Rating ratingValue={2} />
            ) : (
              <div className="tw-self-stretch tw-justify-start tw-items-center tw-gap-2.5 tw-inline-flex">
                <span className="tw-text-body tw-text-xl tw-font-light tw-font-inter tw-leading-[30px]">
                  United States
                </span>
                <img
                  className="tw-w-5 tw-h-4"
                  src="https://picsum.photos/20/16"
                />
              </div>
            )}
          </div>
        </div>
        {width > 992 && (
          //STAR COMPONENT
          <Rating ratingValue={1.5} />
        )}
        <p className="tw-self-stretch tw-text-body tw-font-inter tw-text-xl tw-leading-[30px]">
          So I started to walk into the water. I won\t lie to you boys, I was
          terrified. But I pressed on, and as I made...
        </p>
      </div>
    </>
  );
};

export default ReviewCard;
