"use client";

import React, { useEffect, useRef, useState } from "react";
import { ReviewCardProps, countryNames } from "./ReviewCard.types";
import { useClientInfoService } from "@/services";
import { Rating } from "./components";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ReviewCard = (props: ReviewCardProps) => {
  //States
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  //Hooks
  const { width } = useClientInfoService();
  const reviewPopupRef = useRef<HTMLDivElement>(null);

  //Effects
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        reviewPopupRef.current &&
        !reviewPopupRef.current.contains(event.target)
      ) {
        setIsPopupOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [reviewPopupRef]);

  return (
    <>
      {isPopupOpen && (
        <div
          className={`
            review-popup tw-fixed tw-left-1/2 tw-top-1/2 tw-z-10 tw-inline-flex
            tw-h-[482.26px] tw-w-[666px] -tw-translate-x-1/2 -tw-translate-y-1/2
            tw-cursor-pointer tw-flex-col tw-items-center tw-justify-center
            tw-gap-2 tw-rounded-lg tw-bg-gradient-to-tr tw-from-black
            tw-to-[#322923] tw-p-5
          `}
          ref={reviewPopupRef}
        >
          <img
            className={`
              review-card-user-avatar tw-h-[92.26px] tw-w-[92.26px]
              tw-rounded-full tw-object-cover
            `}
            src={
              props.user.avatar ||
              "https://fiverr-res.cloudinary.com/npm-assets/layout-service/favicon.52df53a.ico"
            }
          />
          <div className="tw-flex tw-flex-col">
            <div
              className={`
                tw-text-center tw-font-inter tw-text-2xl tw-font-black
                tw-leading-[35px] tw-text-headings
              `}
            >
              John Smith
            </div>
            <div
              className={`
                tw-flex tw-items-center tw-justify-center tw-gap-[10px]
              `}
            >
              <div
                className={`
                  tw-font-inter tw-text-xl tw-font-light tw-leading-[30px]
                  tw-text-body
                `}
              >
                {countryNames[props.user.countryCode]}
              </div>
              <img
                className={`
                  review-card-country-flag tw-h-[.9rem] tw-w-5
                  tw-rounded-[.3rem] tw-object-cover
                `}
                src={`https://flagsapi.com/${props.user.countryCode}/flat/64.png`}
              />
            </div>
          </div>
          <Rating ratingValue={props.rating} />
          <div
            className={cn(
              props.projectUrl && "tw-flex-1",
              `
                tw-text-center tw-font-inter tw-text-xl tw-font-normal
                tw-leading-[30px] tw-text-body
              `
            )}
          >
            {props.review}
          </div>
          {props.projectUrl && (
            <Link
              href={props.projectUrl}
              className={`
                tw-font-bowlby-one tw-text-2xl tw-font-normal tw-text-button
              `}
            >
              View Project
            </Link>
          )}
        </div>
      )}
      <div
        className={`
          review-card cs-card tw-inline-flex tw-h-[177.40px] tw-w-[325px]
          tw-flex-col tw-items-start tw-justify-start tw-gap-2 tw-rounded-lg
          tw-p-5

          lg:tw-h-[259px] lg:tw-w-[412px]

          md:tw-h-[200px] md:tw-w-[325px]
        `}
        onClick={() => {
          if (!isPopupOpen) setIsPopupOpen(true);
        }}
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
              tw-object-cover

              md:tw-h-[58px] md:tw-w-[58px]
            `}
            src={
              props.user.avatar ||
              "https://fiverr-res.cloudinary.com/npm-assets/layout-service/favicon.52df53a.ico"
            }
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
              {width && width <= 992 && (
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
            {width && width <= 992 ? (
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
        {width && width > 992 && <Rating ratingValue={props.rating} />}

        <div
          className={`
            review-card-review tw-line-clamp-3 tw-self-stretch tw-font-inter
            tw-text-base tw-font-normal tw-leading-[25px] tw-text-body

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
