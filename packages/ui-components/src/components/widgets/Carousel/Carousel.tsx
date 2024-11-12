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

const Carousel = (props: CarouselProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  //Methods
  const getButtonSize = () => {
    switch (screen) {
      case "md":
        return "icon-lg";
      default:
        return "icon";
    }
  };

  return (
    <div
      className={`
        carousel-wrapper tw-h-[calc((80vw*1080/1920)+90px)] tw-max-h-[43rem]
        tw-max-w-full
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
        loop={true}
        modules={[Pagination, Navigation]}
        className={`
          carousel tw-h-auto tw-w-4/5 tw-overflow-visible

          max-sm:tw-w-full
        `}
        loopAdditionalSlides={2}
        lazyPreloadPrevNext={1}
      >
        {props.images.map((image, i) => {
          return (
            <SwiperSlide
              className={`
                tw-duration-400 tw-flex tw-aspect-[1920/1080] !tw-w-full
                tw-items-center tw-justify-center tw-border-4 tw-border-solid
                tw-border-primary tw-bg-black tw-transition-transform
                tw-ease-in-out
              `}
              key={i}
            >
              <img
                src={image}
                alt={""}
                width={1920}
                height={1080}
                className="tw-h-full tw-w-auto"
                loading="lazy"
              />
            </SwiperSlide>
          );
        })}
        <Button
          size={getButtonSize()}
          className="custom-next carousel-button tw-right-0"
          rounded={"circle"}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={`!tw-h-3/5 !tw-w-3/5`}
          />
        </Button>
        {props.cta && (
          <Button
            {...{
              ...props.cta,
              ...{
                className: cn(
                  props.cta.className,
                  `carousel-button tw-left-1/2 -tw-translate-x-1/2`
                ),
              },
            }}
          />
        )}
        <Button
          size={getButtonSize()}
          rounded={"circle"}
          className="custom-prev carousel-button tw-left-0"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="!tw-h-3/5 !tw-w-3/5"
          />
        </Button>
      </Swiper>
    </div>
  );
};

export default Carousel;
