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
import { CTA, Label } from "@/components/common";

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
        carousel-wrapper tw-h-[calc((80vw*1080/1920)+160px)] tw-w-full
        tw-max-w-[100vw]
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
        loopAdditionalSlides={1}
        lazyPreloadPrevNext={2}
      >
        {props.projects.map((proj, i) => {
          return (
            <SwiperSlide
              className={`
                corousel-slide tw-duration-400 tw-relative tw-flex !tw-w-full
                tw-flex-col tw-items-center tw-justify-center tw-gap-[20px]
                tw-transition-transform tw-ease-in-out
              `}
              key={i}
            >
              <div
                className={`
                  labels tw-inline-flex tw-items-center tw-justify-center
                  tw-gap-3 tw-transition-all tw-duration-500 tw-ease-in-out
                `}
              >
                {(proj.categories.length <= 3
                  ? proj.categories
                  : proj.categories.slice(0, 3)
                ).map((category, i) => {
                  return (
                    <Label key={i} text={category} size={getLabelSize()} />
                  );
                })}
              </div>
              <div
                className={`
                  carousel-image-wrapper tw-relative tw-flex
                  tw-aspect-[1920/1080] tw-w-full tw-items-center
                  tw-justify-center tw-border-4 tw-border-solid
                  tw-border-primary tw-bg-black
                `}
              >
                <div
                  className={`
                    hover-layer tw-absolute tw-left-0 tw-top-0 tw-h-full
                    tw-w-full tw-bg-black/60 tw-opacity-0 tw-backdrop-blur-sm
                    tw-transition-all tw-duration-500 tw-ease-in-out

                    hover:tw-opacity-100
                  `}
                >
                  <div
                    className={`
                      content tw-mx-auto tw-flex tw-h-full tw-w-full
                      tw-max-w-[80%] tw-flex-col tw-items-center
                      tw-justify-center tw-gap-[20px]
                    `}
                  >
                    <h2
                      className={`
                        project-title tw-text-center tw-font-bowlby-one
                        tw-text-5xl tw-font-normal tw-text-headings
                      `}
                    >
                      {proj.title}
                    </h2>
                    <p
                      className={`
                        desc tw- tw-text-center tw-font-inter tw-text-2xl
                        tw-font-normal tw-leading-[35px] tw-text-body
                      `}
                    >
                      {proj.description}
                    </p>
                    <CTA
                      projectUrl={proj.projectUrl}
                      text={"View Details"}
                      target="_blank"
                    />
                  </div>
                </div>
                <img
                  src={proj.thumbnail}
                  alt={""}
                  width={1920}
                  height={1080}
                  className="carousel-image tw-h-full tw-w-auto"
                  loading="lazy"
                />
              </div>
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
            className={`next-icon !tw-h-3/5 !tw-w-3/5`}
          />
        </Button>
        {props.cta && (
          <Button
            {...{
              ...props.cta,
              ...{
                className: cn(
                  props.cta.className,
                  `
                    carousel-button custom-button tw-left-1/2
                    -tw-translate-x-1/2
                  `
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
            className="prev-icon !tw-h-3/5 !tw-w-3/5"
          />
        </Button>
      </Swiper>
    </div>
  );
};

export default Carousel;
