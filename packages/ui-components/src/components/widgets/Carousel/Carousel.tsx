"use client";

import { CarouselProps } from "./Carousel.types";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useClientInfoService } from "@/services";
import { Label } from "@/components/common";

const Carousel = (props: CarouselProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  //Methods
  const getButtonSize = (isIcon: boolean) => {
    if (isIcon) {
      switch (screen) {
        case "md":
          return "icon-lg";
        default:
          return "icon";
      }
    } else {
      switch (screen) {
        case "md":
          return "lg";
        default:
          return "default";
      }
    }
  };

  const getLabelSize = () => {
    switch (screen) {
      case "sm":
      case "md":
        return "sm";
      default:
        return "default";
    }
  };

  return (
    <div
      className={`
        carousel-wrapper tw-h-full tw-w-full tw-max-w-[100vw] tw-pb-[5.5rem]

        lg:sm:tw-pb-[5.6rem]

        sm:tw-pb-[6.5rem]
      `}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={props.infinite || false}
        modules={[Pagination, Navigation]}
        className={`
          carousel tw-h-auto tw-w-4/5 tw-overflow-visible

          max-sm:tw-w-full
        `}
        loopAdditionalSlides={1}
        lazyPreloadPrevNext={2}
      >
        {props.items.map((item, i) => {
          return (
            <SwiperSlide
              className={cn(
                `
                  corousel-slide tw-duration-400 tw-relative tw-mr-[30px]
                  tw-flex !tw-w-full tw-flex-col tw-items-center
                  tw-justify-center tw-gap-[20px] tw-transition-transform
                  tw-ease-in-out
                `,
                props.raiseInactiveSlides && "raise-inactive-slides"
              )}
              key={i}
            >
              {props.labels && (
                <div
                  className={`
                    labels tw-inline-flex tw-items-center tw-justify-center
                    tw-gap-3 tw-transition-all tw-duration-500 tw-ease-in-out
                  `}
                >
                  {props.labels[i].map((label, j) => {
                    return <Label key={j} text={label} size={getLabelSize()} />;
                  })}
                </div>
              )}
              {item}
            </SwiperSlide>
          );
        })}
        <div
          className={`
            carousel-buttons-wrapper tw-flex tw-w-full tw-items-center
            tw-justify-between
          `}
        >
          <Button
            size={getButtonSize(true)}
            rounded={"circle"}
            className={cn(
              "custom-prev carousel-button",
              props.arrowsBackground && `tw-border-white`
            )}
            style={{ background: props.arrowsBackground }}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="prev-icon !tw-h-3/5 !tw-w-3/5"
            />
          </Button>
          {props.cta && (
            <Button
              size={getButtonSize(false)}
              {...{
                ...props.cta,
                ...{
                  className: cn(
                    props.cta.className,
                    `carousel-button custom-button`
                  ),
                },
              }}
            />
          )}
          <Button
            size={getButtonSize(true)}
            className={cn(
              "custom-next carousel-button",
              props.arrowsBackground && `tw-border-white`
            )}
            rounded={"circle"}
            style={{ background: props.arrowsBackground }}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`next-icon !tw-h-3/5 !tw-w-3/5`}
            />
          </Button>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
