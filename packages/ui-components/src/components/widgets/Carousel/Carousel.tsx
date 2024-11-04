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

const Carousel = (props: CarouselProps) => {
  return (
    <div className="carousel-wrapper tw-w-full tw-h-screen tw-overflow-hidden tw-max-w-full">
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
        className="carousel tw-w-[80%] tw-h-auto tw-overflow-visible max-sm:tw-w-full"
        loopAdditionalSlides={2}
        lazyPreloadPrevNext={1}
      >
        {props.images.map((image, i) => {
          return (
            <SwiperSlide key={i}>
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

        <div className="custom-next carousel-button tw-right-0">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="custom-prev carousel-button tw-left-0">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
