import React from "react";
import { RatingProps } from "./Rating.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const Rating = (props: RatingProps) => {
  const roundedRating = Math.round(props.ratingValue * 2) / 2;

  const stars = Array.from({ length: 5 }, (_, i) => {
    const starIndex = i + 1;
    if (starIndex <= roundedRating) {
      return (
        <FontAwesomeIcon
          className="fontawesome-gradient-icon  tw-w-8 tw-h-8"
          key={starIndex}
          icon={faStar}
          style={{ color: "#ffce00" }}
        />
      );
    } else if (starIndex - 0.5 === roundedRating) {
      return (
        <div className="tw-relative tw-w-8 tw-h-8" key={starIndex}>
          <FontAwesomeIcon
            className="fontawesome-gradient-icon tw-w-8 tw-h-8 tw-absolute tw-top-2/4 tw-left-2/4 -tw-translate-x-2/4 -tw-translate-y-2/4 tw-z-10"
            icon={faStarHalf}
            style={{}}
          />
          <FontAwesomeIcon
            className="tw-w-8 tw-h-8 tw-absolute tw-top-2/4 tw-left-2/4  -tw-translate-x-2/4 -tw-translate-y-2/4  tw-z-0"
            icon={faStar}
            style={{ color: "var(--secondary-darker)" }}
          />
        </div>
      );
    } else {
      return (
        <FontAwesomeIcon
          className=" tw-w-8 tw-h-8"
          key={starIndex}
          icon={faStar}
          style={{ color: "var(--secondary-darker)" }}
        />
      );
    }
  });

  return (
    <div className="tw-justify-start tw-items-center tw-inline-flex">
      {/* gradient to svg */}
      <svg className="svg-gradient">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "rgba(255, 92, 1, 1)", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "rgba(242, 163, 7, 1)", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      {stars}
    </div>
  );
};

export default Rating;
