import React from "react";
import { ReviewCardSkeletonProps } from "./ReviewCardSkeleton.types";
import Skeleton from "react-loading-skeleton";
import { reviewCardVariants } from "../ReviewCard.types";
import { cn } from "@/lib/utils";
import { useClientInfoService } from "@/services";
import { Rating } from "../components";

const ReviewCardSkeleton = (props: ReviewCardSkeletonProps) => {
  //Hooks
  const { width } = useClientInfoService();

  return (
    <div
      className={`
        review-card-skeleton tw-relative tw-h-[177.40px] tw-w-[325px]

        lg:tw-h-[259px] lg:tw-w-[412px]

        md:tw-h-[200px] md:tw-w-[325px]
      `}
    >
      <Skeleton className={`tw-block tw-h-full tw-w-full tw-rounded-lg`} />
      <div
        className={cn(
          reviewCardVariants({ variant: "default" }),
          `tw-absolute tw-left-0 tw-top-0`
        )}
      >
        <div
          className={cn(
            `
              review-card-user tw-inline-flex tw-items-center tw-justify-start
              tw-gap-[9px] tw-self-stretch
            `
          )}
        >
          <Skeleton
            className={cn(
              `review-card-user-avatar tw-rounded-full tw-object-cover`,
              `
                tw-h-[52px] tw-w-[52px]

                md:tw-h-[58px] md:tw-w-[58px]
              `
            )}
          />
          <div
            className={cn(
              `
                review-card-user-info tw-inline-flex tw-shrink tw-grow
                tw-basis-0 tw-flex-col
              `,
              `tw-items-start tw-justify-start`
            )}
          >
            <div
              className={`
                review-card-user-name-country tw-inline-flex tw-items-center
                tw-justify-start tw-gap-2.5
              `}
            >
              <Skeleton
                className={cn(
                  `
                    review-card-user-name tw-mb-[6px] tw-h-[25px] tw-w-[150px]
                    tw-self-stretch tw-font-inter tw-text-2xl tw-font-black
                    tw-leading-[35px] tw-text-headings

                    lg:tw-h-[30px] lg:tw-w-[305px]
                  `
                )}
              />
              {width && width <= 992 && (
                <>
                  <Skeleton
                    className={`
                      review-card-country-flag tw-mb-[6px] tw-h-[25px]
                      tw-w-[34.7px] tw-rounded-[.3rem] tw-object-cover
                    `}
                  />
                </>
              )}
            </div>
            <div
              className={cn(`
                tw-block

                lg:tw-hidden
              `)}
            >
              <Rating ratingValue={5} isSkeleton />
            </div>
            {(!width || width > 992) && (
              <div
                className={cn(
                  `
                    review-card-user-country tw-inline-flex tw-items-center
                    tw-gap-2.5 tw-self-stretch
                  `,
                  `tw-justify-start`
                )}
              >
                <Skeleton
                  className={`
                    review-card-country-name tw-h-[16px] tw-w-[116px]
                    tw-font-inter tw-text-xl tw-font-light tw-leading-[30px]
                    tw-text-body
                  `}
                />

                <Skeleton
                  className={`
                    review-card-country-flag tw-h-[.9rem] tw-w-5
                    tw-rounded-[.3rem] tw-object-cover
                  `}
                />
              </div>
            )}
          </div>
        </div>
        <div
          className={cn(`
            tw-hidden

            lg:tw-block
          `)}
        >
          <Rating ratingValue={5} isSkeleton />
        </div>
        <Skeleton
          className={`
            tw-h-[14px] tw-w-[285px] tw-rounded-lg

            lg:tw-h-[20px] lg:tw-w-[372px]
          `}
        />
        <Skeleton
          className={`
            tw-h-[14px] tw-w-[285px] tw-rounded-lg

            lg:tw-h-[20px] lg:tw-w-[372px]
          `}
        />
        <Skeleton
          className={`
            tw-h-[14px] tw-w-[285px] tw-rounded-lg

            lg:tw-h-[20px] lg:tw-w-[372px]
          `}
        />
        <Skeleton
          className={`
            tw-h-[14px] tw-w-[200px] tw-rounded-lg

            lg:tw-h-[20px] lg:tw-w-[253px]
          `}
        />
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
