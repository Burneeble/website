"use client";

import {
  CountryCode,
  CustomScrollbar,
  NotificationHandler,
  ReviewCard,
  ReviewCardProps,
  useClientInfoService,
} from "@burneeble/ui-components";
import { CustomersProps } from "./Customers.types";
import { useEffect, useState } from "react";
import { useReviewService } from "@/services/ReviewService";
import Skeleton from "react-loading-skeleton";

const Customers = (props: CustomersProps) => {
  //States
  const sentences = [
    <></>,
    <>
      We have worked on several
      <br className="xl:tw-hidden" /> requests...
    </>,
    <>Gave advice and indicated the best way...</>,
    <>
      Worked hard, without stopping <br className="md:tw-hidden" /> and without
      <br
        className={`
          tw-hidden

          md:tw-block

          xl:tw-hidden
        `}
      />{" "}
      EVER saying no to
      <br className="md:tw-hidden" /> you.
    </>,
    <>We know, there are so many of them...</>,
    <>
      ...but it is only thanks to YOU
      <br className="xl:tw-hidden" /> that we can demonstrate
    </>,
    <>our passion and quality.</>,
  ];
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [reviews, setReviews] = useState<ReviewCardProps[] | null>(null);

  //Hooks
  const { screen } = useClientInfoService();
  const { getReviews } = useReviewService();

  //Effects
  useEffect(() => {
    fetchReviews();
  }, []);

  //Methods
  const fetchReviews = async () => {
    try {
      const res = await getReviews();

      if (res) {
        setReviews(
          res.map((review) => {
            return {
              user: {
                avatar: review.userAvatar,
                name: review.username,
                countryCode: review.countryCode as CountryCode,
              },
              rating: 5,
              review: review.review,
              projectUrl: review.projectUrl || undefined,
            };
          })
        );
      }
    } catch (e) {
      console.log(e);
      NotificationHandler.instance.error("Failed to fetch reviews");
    }
  };

  return (
    <section
      className={`
        customers tw-px-5 tw-py-[50px] tw-flex tw-items-center tw-justify-center
        tw-gap-[20px] tw-flex-col tw-relative
      `}
    >
      <h2
        className={`
          tw-w-fit tw-mx-auto tw-max-w-screen-xl tw-px-[20px] tw-text-center

          md:tw-px-[31px]

          xl:tw-px-[20px]
        `}
      >
        {screen !== "sm" && "What "}
        <span className="text-color-primary-gradient">
          {screen !== "sm" ? "o" : "O"}ur customers
        </span>{" "}
        say...
      </h2>
      <div className="tw-relative tw-max-w-full">
        <div
          className={`
            shadow tw-left-0

            ${scrollProgress === 0 ? "tw-opacity-0" : "tw-opacity-1"}
          `}
        />
        <div
          className={`
            shadow tw-right-0 tw-rotate-180

            ${scrollProgress === 100 ? "tw-opacity-0" : "tw-opacity-1"}
          `}
        />
        <CustomScrollbar
          onScroll={(hProgress: number) => {
            setScrollProgress(Math.ceil(hProgress));
            const clampedValue = Math.max(0, Math.min(100, hProgress));
            setPhraseIndex(Math.round((clampedValue / 100) * 6));
          }}
        >
          <div className="tw-py-[20px] tw-w-fit tw-overflow-visible">
            {reviews ? (
              screen == "sm" || screen == "md" ? (
                <>
                  <div className="review-row tw-pl-[177px]">
                    {reviews.slice(0, reviews.length / 2).map((review, i) => {
                      return <ReviewCard key={i} {...review} />;
                    })}
                  </div>
                  <div className="review-row tw-mt-[20px]">
                    {reviews.slice(reviews.length / 2).map((review, i) => {
                      return <ReviewCard key={i} {...review} />;
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div className="review-row tw-mt-[20px]">
                    {reviews.map((review, i) => {
                      return <ReviewCard key={i} {...review} />;
                    })}
                  </div>
                </>
              )
            ) : (
              <>
                <div className="review-row">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      className={`
                        tw-block tw-h-[177.40px] tw-w-[325px] tw-rounded-lg

                        lg:tw-h-[259px] lg:tw-w-[412px]

                        md:tw-h-[200px] md:tw-w-[325px]
                      `}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </CustomScrollbar>
      </div>
      <p
        className={`
          tw-py-[.5rem] tw-px-[20px] tw-text-end tw-font-inter tw-text-body
          tw-block tw-w-full tw-text-xl tw-relative tw-max-w-screen-xl

          md:tw-text-2xl md:tw-px-[31px]

          xl:tw-text-3xl xl:tw-px-[20px] xl:tw-whitespace-nowrap
        `}
      >
        {sentences.map((phrase, i) => {
          return (
            <span
              key={i}
              className={`
                tw-transition-all tw-duration-200 tw-ease-in-out tw-absolute
                tw-top-[.5rem] tw-right-[20px] tw-text-end

                md:tw-right-[31px]

                xl:tw-right-[20px]

                ${phraseIndex === i ? "tw-opacity-1" : "tw-opacity-0"}
              `}
            >
              {phrase}
            </span>
          );
        })}
      </p>
    </section>
  );
};

export default Customers;
