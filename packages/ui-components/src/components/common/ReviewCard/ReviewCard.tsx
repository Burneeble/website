"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ReviewCardProps,
  countryNames,
  reviewCardVariants,
} from "./ReviewCard.types";
import { useClientInfoService } from "@/services";
import { Rating } from "./components";
import { cn } from "@/lib/utils";
import { useScrollLock } from "@/hooks/useScrollLock";
import CTA from "../CTA";

const ReviewCard = (props: ReviewCardProps) => {
  //States
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isFirstRender, setFirstRender] = useState<boolean>(true);

  //Hooks
  const { width } = useClientInfoService();
  const reviewPopupRef = useRef<HTMLDivElement>(null);
  const { lockScroll, unlockScroll } = useScrollLock();

  //Effects
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        reviewPopupRef.current &&
        !reviewPopupRef.current.contains(event.target) &&
        props.variant === "popup" &&
        props.setIsOpen
      ) {
        setIsClosing(true);

        setTimeout(() => {
          setIsClosing(false);
          props.setIsOpen!(false);
        }, 190);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [reviewPopupRef]);

  useEffect(() => {
    if (isFirstRender) setFirstRender(false);
    else {
      if (isPopupOpen) lockScroll();
      else unlockScroll();
    }
  }, [isPopupOpen]);

  const component = (
    <div
      className={cn(
        "review-card",
        reviewCardVariants({ variant: props.variant }),
        props.variant !== "popup" && isPopupOpen && `tw-pointer-events-none`,
        props.variant === "popup" && isClosing && `tw-animate-cs-fade-out`
      )}
      onClick={() => {
        if (!isPopupOpen && props.variant !== "popup") setIsPopupOpen(true);
      }}
      ref={reviewPopupRef}
    >
      <div
        className={cn(
          `
            review-card-user tw-inline-flex tw-items-center tw-justify-start
            tw-gap-[9px] tw-self-stretch
          `,
          props.variant === "popup" && "tw-flex-col"
        )}
      >
        {/* TODO create an avatar component */}
        <img
          className={cn(
            `review-card-user-avatar tw-rounded-full tw-object-cover`,
            props.variant === "popup"
              ? `tw-h-[92.26px] tw-w-[92.26px]`
              : `
                tw-h-[52px] tw-w-[52px]

                md:tw-h-[58px] md:tw-w-[58px]
              `
          )}
          // TODO create a platform props to show different placeholder
          src={
            props.user.avatar ||
            "https://fiverr-res.cloudinary.com/npm-assets/layout-service/favicon.52df53a.ico"
          }
        />
        <div
          className={cn(
            `
              review-card-user-info tw-inline-flex tw-shrink tw-grow tw-basis-0
              tw-flex-col
            `,
            props.variant === "popup"
              ? "tw-items-center tw-justify-center"
              : `tw-items-start tw-justify-start`
          )}
        >
          <div
            className={`
              review-card-user-name-country tw-inline-flex tw-items-center
              tw-justify-start tw-gap-2.5
            `}
          >
            <p
              className={cn(
                `
                  review-card-user-name p-small tw-self-stretch tw-font-black
                  tw-text-headings
                `,
                props.variant === "popup" && "tw-text-center"
              )}
            >
              {props.user.name}
            </p>
            {width && width <= 992 && props.variant !== "popup" && (
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
          {width && width <= 992 && props.variant !== "popup" ? (
            <Rating ratingValue={props.rating} />
          ) : (
            <div
              className={cn(
                `
                  review-card-user-country tw-inline-flex tw-items-center
                  tw-gap-2.5 tw-self-stretch
                `,
                props.variant === "popup"
                  ? "tw-justify-center"
                  : `tw-justify-start`
              )}
            >
              <p
                className={`
                  review-card-country-name p-smaller tw-font-light tw-text-body
                `}
              >
                {countryNames[props.user.countryCode]}
              </p>
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
      {((width && width > 992) || props.variant === "popup") && (
        <Rating ratingValue={props.rating} />
      )}

      <p
        className={cn(
          "review p-small",
          "tw-font-normal",
          props.variant === "popup"
            ? `
              tw-overflow-y-scroll no-scrollbar tw-max-h-[150px] tw-text-center
              tw-text-xl
            `
            : `review-card-review tw-line-clamp-3 tw-self-stretch`,
          props.variant === "popup" && props.projectUrl && "tw-mb-[16px]"
        )}
      >
        {props.review}
      </p>
      {props.variant === "popup" && props.projectUrl && (
        <CTA projectUrl={props.projectUrl} text={"View Project"} />
      )}
    </div>
  );

  return (
    <>
      {props.variant !== "popup" && (
        <ReviewCard
          {...{ ...props, ...{ variant: "popup" } }}
          isOpen={isPopupOpen}
          setIsOpen={setIsPopupOpen}
        />
      )}
      {((props.variant === "popup" && props.isOpen) ||
        props.variant !== "popup") && (
        <>
          {props.variant === "popup" ? (
            <div
              className={`
                review-popup-wrapper tw-fixed tw-left-0 tw-top-0 tw-z-[15]
                tw-flex tw-h-screen tw-w-screen tw-items-center
                tw-justify-center tw-bg-[rgba(0,0,0,0.652)]
              `}
            >
              {component}
            </div>
          ) : (
            component
          )}
        </>
      )}
    </>
  );
};

export default ReviewCard;
