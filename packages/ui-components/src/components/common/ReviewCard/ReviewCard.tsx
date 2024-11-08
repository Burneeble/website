"use client";

import React from "react";
import { ReviewCardProps, countryNames } from "./ReviewCard.types";
import { useClientInfoService } from "@/services";
import { Rating } from "./components";

const ReviewCard = (props: ReviewCardProps) => {
  //Hooks
  const { width } = useClientInfoService();

  return (
    <>
      <div
        className={`
          review-card card tw-inline-flex tw-h-[177.40px] tw-w-[325px]
          tw-flex-col tw-items-start tw-justify-start tw-gap-2 tw-rounded-lg
          tw-p-5

          lg:tw-h-[259px] lg:tw-w-[412px]

          md:tw-h-[200px] md:tw-w-[325px]
        `}
      >
        <div
          className={`
            review-card-user tw-inline-flex tw-items-center tw-justify-start
            tw-gap-[9px] tw-self-stretch
          `}
        >
          {/* TODO create an avatar component */}
          <img
            className={`
              review-card-user-avatar tw-h-[52px] tw-w-[52px] tw-rounded-full

              md:tw-h-[58px] md:tw-w-[58px]
            `}
            src="https://picsum.photos/58/58"
          />
          <div
            className={`
              review-card-user-info tw-inline-flex tw-shrink tw-grow tw-basis-0
              tw-flex-col tw-items-start tw-justify-start
            `}
          >
            <div
              className={`
                review-card-user-name-country tw-inline-flex tw-items-center
                tw-justify-start tw-gap-2.5 tw-self-stretch
              `}
            >
              <p
                className={`
                  review-card-user-name tw-self-stretch tw-font-inter
                  tw-text-2xl tw-font-black tw-leading-[35px] tw-text-headings
                `}
              >
                {props.user.name}
              </p>
              {width <= 992 && (
                <>
                  {/* TODO create a flag component */}
                  <img
                    className={`
                      review-card-country-flag tw-h-[.9rem] tw-w-5
                      tw-rounded-[.3rem] tw-object-cover
                    `}
                    src={`https://flagsapi.com/${props.user.countryCode}/flat/64.png`}
                  />
                </>
              )}
            </div>
            {width <= 992 ? (
              <Rating ratingValue={props.rating} />
            ) : (
              <div
                className={`
                  review-card-user-country tw-inline-flex tw-items-center
                  tw-justify-start tw-gap-2.5 tw-self-stretch
                `}
              >
                <div
                  className={`
                    review-card-country-name tw-font-inter tw-text-xl
                    tw-font-light tw-leading-[30px] tw-text-body
                  `}
                >
                  {countryNames[props.user.countryCode]}
                </div>
                {/* TODO create a flag component */}

                <img
                  className={`
                    review-card-country-flag tw-h-[.9rem] tw-w-5
                    tw-rounded-[.3rem] tw-object-cover
                  `}
                  src={`https://flagsapi.com/${props.user.countryCode}/flat/64.png`}
                />
              </div>
            )}
          </div>
        </div>
        {width > 992 && <Rating ratingValue={props.rating} />}

        <div
          className={`
            review-card-review tw-line-clamp-3 tw-self-stretch tw-font-inter
            tw-text-base tw-font-normal tw-leading-[25px] tw-text-body

            lg:tw-text-xl lg:tw-leading-[30px]

            md:tw-text-lg md:tw-leading-7
          `}
        >
          {props.review}
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
