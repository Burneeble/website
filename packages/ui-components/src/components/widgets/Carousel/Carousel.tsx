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
import Image from "next/image";
import { Button } from "@/components/ui";

const Carousel = (props: CarouselProps) => {
  return (
    <div
      className={`
        carousel-wrapper tw-h-screen tw-w-full tw-max-w-full tw-overflow-hidden
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
                tw-duration-400 tw-flex tw-aspect-[1920/1080] tw-items-center
                tw-justify-center tw-border-4 tw-border-solid tw-border-primary
                tw-bg-black tw-transition-transform tw-ease-in-out
              `}
              key={i}
            >
              <Image
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
          size={"icon"}
          className="custom-next carousel-button tw-right-0"
          rounded={"circle"}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
        <Button
          size={"icon"}
          rounded={"circle"}
          className="custom-prev carousel-button tw-left-0"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
      </Swiper>
    </div>
  );
};

export default Carousel;
