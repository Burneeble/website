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
import { Suspense, useEffect, useState } from "react";
import { useReviewService } from "@/services/ReviewService";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import CustomersCanvasContent from "./components/CustomersCanvasContent";

const CustomersCanvas = () => {
  return (
    <Suspense fallback={<>loading</>}>
      <Canvas
        gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}
        className={`customers-3d-canvas tw-h-full`}
      >
        <CustomersCanvasContent />
      </Canvas>
    </Suspense>
  );
};

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
      id={"reviews"}
      className={`
        customers cs-website-horizontal-padding cs-website-vertical-padding
        cs-gap-between-content tw-relative tw-z-[2] tw-flex tw-flex-col
        tw-items-center tw-justify-center
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
                  <div className="review-row">
                    <div
                      key={"canvas-1"}
                      className={`
                        tw-h-[177.40px] tw-w-[177px]

                        lg:tw-h-[259px]

                        md:tw-h-[200px]
                      `}
                    >
                      <CustomersCanvas />
                    </div>
                    {reviews.slice(0, reviews.length / 2).map((review, i) => {
                      return <ReviewCard key={i} {...review} />;
                    })}
                  </div>
                  <div className="review-row tw-mt-[20px]">
                    {reviews.slice(reviews.length / 2).map((review, i) => {
                      return <ReviewCard key={i} {...review} />;
                    })}
                    <div
                      key={"canvas-2"}
                      className={`
                        tw-h-[177.40px] tw-w-[177px]

                        lg:tw-h-[259px]

                        md:tw-h-[200px]
                      `}
                    >
                      <CustomersCanvas />
                    </div>
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
          sentences p-default tw-relative tw-py-2 cs-website-horizontal-padding
          tw-block tw-w-full tw-max-w-screen-xl tw-text-end tw-text-body

          xl:tw-whitespace-nowrap
        `}
      >
        {sentences.map((phrase, i) => {
          return (
            <span
              key={i}
              className={`
                sentence tw-absolute tw-right-0 tw-top-[.5rem] tw-text-end
                tw-transition-all tw-duration-200 tw-ease-in-out

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
