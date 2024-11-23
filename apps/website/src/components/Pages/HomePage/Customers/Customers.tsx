"use client";

import {
  CountryCode,
  CustomScrollbar,
  NotificationHandler,
  ReviewCard,
  ReviewCardProps,
  ReviewCardSkeleton,
  useClientInfoService,
} from "@burneeble/ui-components";
import { CustomersProps } from "./Customers.types";
import { useEffect, useState } from "react";
import { useReviewService } from "@/services/ReviewService";

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
  const [canShowShadows, setCanShowShadows] = useState<boolean>(false);

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
        customers cs-website-horizontal-padding cs-website-vertical-padding
        cs-gap-between-content tw-flex tw-items-center tw-justify-center
        tw-flex-col tw-relative tw-z-[2]
      `}
    >
      <h2
        className={`
          cs-website-horizontal-padding cs-website-max-width title
          tw-text-center

          md:tw-px-[31px]

          xl:tw-px-[20px]
        `}
      >
        {screen !== "sm" && "What "}
        <span className="cs-text-color-primary-gradient">
          {screen !== "sm" ? "o" : "O"}ur customers
        </span>{" "}
        say...
      </h2>
      <div className="wrapper tw-relative tw-max-w-full">
        {canShowShadows && (
          <>
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
          </>
        )}
        <CustomScrollbar
          onScroll={(hProgress: number) => {
            setScrollProgress(Math.ceil(hProgress));
            const clampedValue = Math.max(0, Math.min(100, hProgress));
            setPhraseIndex(Math.round((clampedValue / 100) * 6));
          }}
          readHThumbWidth={(hThumbWidth: number) => {
            setCanShowShadows(hThumbWidth < 100);
          }}
        >
          <div className="wrapper tw-w-fit tw-overflow-visible tw-py-[20px]">
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
                  <div className="review-row">
                    {reviews.map((review, i) => {
                      return <ReviewCard key={i} {...review} />;
                    })}
                  </div>
                </>
              )
            ) : (
              <>
                <div className="review-row">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <ReviewCardSkeleton key={i} />
                  ))}
                </div>
              </>
            )}
          </div>
        </CustomScrollbar>
      </div>
      <p
        className={`
          sentences tw-py-2 cs-website-horizontal-padding tw-text-end
          tw-font-inter tw-text-body tw-block tw-w-full tw-text-xl tw-relative
          tw-max-w-screen-xl

          md:tw-text-2xl

          xl:tw-text-3xl xl:tw-whitespace-nowrap
        `}
      >
        {sentences.map((phrase, i) => {
          return (
            <span
              key={i}
              className={`
                sentence tw-transition-all tw-duration-200 tw-ease-in-out
                tw-absolute tw-top-[.5rem] tw-right-0 tw-text-end

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
