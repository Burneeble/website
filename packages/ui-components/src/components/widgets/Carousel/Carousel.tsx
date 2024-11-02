import {
  CarouselComponent,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { CarouselProps } from "./Carousel.types";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Carousel = (props: CarouselProps) => {
  return (
    <CarouselComponent className="tw-w-full tw-max-w-xl">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} index={index}>
            <div className="tw-p-1">
              <Card>
                <CardContent className="tw-flex tw-aspect-[1920/1080] tw-items-center tw-justify-center tw-p-6">
                  <span className="tw-text-4xl tw-font-semibold">
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselComponent>
  );
};

export default Carousel;
