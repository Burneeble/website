import React from "react";
import { ReviewCardProps } from "./ReviewCard.types";
import { useClientInfoService } from "@/services";
import { Rating } from "./components";

const ReviewCard = (props: ReviewCardProps) => {
  //Hooks
  const { width } = useClientInfoService();

  return (
    <>
      <div className="review-card card tw-w-[325px] tw-h-[177.40px]  md:tw-w-[325px] md:tw-h-[200px] lg:tw-w-[412px] lg:tw-h-[259px] tw-p-5 tw-rounded-lg tw-flex-col tw-justify-start tw-items-start tw-gap-2 tw-inline-flex">
        <div className="review-card-user tw-self-stretch tw-justify-start tw-items-center tw-gap-[9px] tw-inline-flex">
          {/* TODO create an avatar component */}
          <img
            className="review-card-user-avatar tw-w-[52px] tw-h-[52px] md:tw-w-[58px] md:tw-h-[58px] tw-rounded-full"
            src="https://picsum.photos/58/58"
          />
          <div className="review-card-user-info tw-grow tw-shrink tw-basis-0 tw-flex-col tw-justify-start tw-items-start tw-inline-flex">
            <div className="review-card-user-name-country tw-self-stretch tw-justify-start tw-items-center tw-gap-2.5 tw-inline-flex">
              <p className="review-card-user-name tw-self-stretch tw-text-headings tw-text-2xl tw-font-black tw-font-inter tw-leading-[35px]">
                {props.user.name}
              </p>
              {width <= 992 && (
                <>
                  {/* TODO create a flag component */}
                  <img
                    className="review-card-country-flag tw-w-5 tw-h-4"
                    src="https://picsum.photos/20/16"
                  />
                </>
              )}
            </div>
            {width <= 992 ? (
              <Rating ratingValue={props.rating} />
            ) : (
              <div className="review-card-user-country tw-self-stretch tw-justify-start tw-items-center tw-gap-2.5 tw-inline-flex">
                <div className="review-card-country-name tw-text-body tw-text-xl tw-font-light tw-font-inter tw-leading-[30px]">
                  United States
                </div>
                {/* TODO create a flag component */}

                <img
                  className="review-card-country-flag tw-w-5 tw-h-4"
                  src="https://picsum.photos/20/16"
                />
              </div>
            )}
          </div>
        </div>
        {width > 992 && <Rating ratingValue={props.rating} />}

        <div className="review-card-review tw-self-stretch tw-text-body tw-text-base md:tw-text-lg  lg:tw-text-xl tw-font-normal tw-font-inter tw-leading-[25px] md:tw-leading-7 lg:tw-leading-[30px] tw-line-clamp-3">
          So I started to walk into the water. I won't lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers a
          strange calm came over me. I don't know if it was divine intervention
          or the kinship of all living things but I tell you Jerry at that
          moment, I was a marine biologist.
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
