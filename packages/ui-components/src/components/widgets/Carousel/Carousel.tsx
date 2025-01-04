"use client";

import { CarouselProps } from "./Carousel.types";
import React, { useEffect, useRef, useState } from "react";
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
  //States
  const [aspectRatio, setAspectRatio] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  //Hooks
  const { screen, width } = useClientInfoService();
  const wrapperRef = useRef<HTMLDivElement>(null);

  //Effects
  useEffect(() => {
    if (wrapperRef.current) {
      const heights = [];
      for (let i = 0; i < wrapperRef.current.children[0].children.length; i++) {
        heights.push(wrapperRef.current.children[0].children[i].clientHeight);
      }

      setAspectRatio({
        width:
          wrapperRef.current.children[0].children[0].children[0].clientWidth,
        height: Math.max(...heights),
      });
    }
  }, [wrapperRef.current, width]);

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
      ref={wrapperRef}
      className={`carousel-wrapper tw-w-full tw-max-w-[100vw]`}
      style={{
        height: `calc((80vw * ${aspectRatio.height} / ${
          aspectRatio.width
        }) + 105px ${props.labels ? "" : "- 50px"})`,
      }}
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
        {props.items.map((item, i) => {
          return (
            <SwiperSlide
              className={`
                corousel-slide tw-duration-400 tw-relative tw-flex !tw-w-full
                tw-flex-col tw-items-center tw-justify-center tw-gap-[20px]
                tw-transition-transform tw-ease-in-out
              `}
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
