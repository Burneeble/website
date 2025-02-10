import React from "react";
import { RatingProps } from "./Rating.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

const Rating = (props: RatingProps) => {
  const roundedRating = Math.round(props.ratingValue * 2) / 2;

  const stars = Array.from({ length: 5 }, (_, i) => {
    const starIndex = i + 1;
    if (starIndex <= roundedRating) {
      return (
        <FontAwesomeIcon
          className={cn(
            `
              tw-h-5 tw-w-5

              lg:tw-h-8 lg:tw-w-8
            `,
            props.isSkeleton ? "skeleton-gradient" : "fontawesome-gradient-icon"
          )}
          key={starIndex}
          icon={faStar}
          style={{ color: "#ffce00" }}
        />
      );
    } else if (starIndex - 0.5 === roundedRating) {
      return (
        <div
          className={`
            tw-relative tw-h-5 tw-w-5

            lg:tw-h-8 lg:tw-w-8
          `}
          key={starIndex}
        >
          <FontAwesomeIcon
            className={`
              fontawesome-gradient-icon tw-absolute tw-left-2/4 tw-top-2/4
              tw-z-10 tw-h-5 tw-w-5 -tw-translate-x-2/4 -tw-translate-y-2/4

              lg:tw-h-8 lg:tw-w-8
            `}
            icon={faStarHalf}
            style={{}}
          />
          <FontAwesomeIcon
            className={`
              tw-absolute tw-left-2/4 tw-top-2/4 tw-z-0 tw-h-5 tw-w-5
              -tw-translate-x-2/4 -tw-translate-y-2/4

              lg:tw-h-8 lg:tw-w-8
            `}
            icon={faStar}
            style={{ color: "var(--secondary-darker)" }}
          />
        </div>
      );
    } else {
      return (
        <FontAwesomeIcon
          className={`
            tw-h-5 tw-w-5

            lg:tw-h-8 lg:tw-w-8
          `}
          key={starIndex}
          icon={faStar}
          style={{ color: "var(--secondary-darker)" }}
        />
      );
    }
  });

  return (
    <div className="tw-inline-flex tw-items-center tw-justify-start">
      {stars}
    </div>
  );
};

export default Rating;
