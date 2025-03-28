"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { SmarthphoneImageLayoutProps } from "./SmarthphoneImageLayout.types";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { LayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const SmarthphoneImageLayout = (props: SmarthphoneImageLayoutProps) => {
  //States
  const mainAxis = props.mainAxis || "height";
  const [radius, setRadius] = useState<number>(0);

  //Hooks
  const { screen, width } = useClientInfoService();
  const layout = useRef<HTMLDivElement>(null);

  //Effects
  useEffect(() => {
    if (width && layout.current) {
      switch (screen) {
        case "sm":
          setRadius(8);
          break;
        case "md":
          setRadius(layout.current.clientHeight * 0.015);
          break;
        default:
          setRadius(layout.current.clientHeight * 0.065);
          break;
      }
    }
  }, [width, layout.current, screen]);

  return (
    <div
      ref={layout}
      className={cn(
        `
          images-layout smarthphone-image-layout tw-relative

          ${
            props.layoutType !== LayoutType.TextCenterCenterImageBackground
              ? `tw-max-h-[80vh]`
              : `tw-max-h-full`
          }

          tw-aspect-[350/228] tw-w-full

          ${
            props.layoutType !== LayoutType.TextCenterCenterImageBackground
              ? `sm:tw-max-w-[80vh]`
              : `sm:tw-max-w-full`
          }

          sm:tw-aspect-square
        `,
        mainAxis == "height" ? "sm:tw-h-full sm:tw-w-auto" : "sm:tw-w-full"
      )}
    >
      {!["sm", "md"].includes(screen) && (
        <img
          src="/img/project/sections/smartphone-base-layout.svg"
          className={cn(
            `
              tw-absolute tw-left-1/2 tw-top-1/2 tw-aspect-[224/462] tw-h-full
              -tw-translate-x-1/2 -tw-translate-y-1/2
            `
          )}
        />
      )}
      {["md"].includes(screen) && (
        <img
          src="/img/project/sections/tablet-layout.png"
          className={cn(
            `
              tw-absolute tw-left-1/2 tw-top-1/2 tw-aspect-[380/535] tw-h-full
              -tw-translate-x-1/2 -tw-translate-y-1/2
            `
          )}
        />
      )}
      <img
        src={props.image1}
        className={cn(`
          tw-absolute tw-left-1/2 tw-top-1/2 tw-aspect-[350/228] tw-w-full
          -tw-translate-x-1/2 -tw-translate-y-1/2 tw-rounded-lg tw-object-cover

          md:tw-top-1/2 md:tw-h-[95%] md:tw-w-[44%]

          sm:tw-top-[50.3%] sm:tw-aspect-[280/400] sm:tw-h-[94%] sm:tw-w-auto
        `)}
        style={{ borderRadius: `${radius}px` }}
      />
      {!["sm", "md"].includes(screen) && (
        <img
          src="/img/project/sections/smartphone-dock-layout.svg"
          className={`
            tw-absolute tw-left-1/2 tw-top-[2.2%] tw-w-[23.7%]
            -tw-translate-x-1/2
          `}
        />
      )}
    </div>
  );
};

export default SmarthphoneImageLayout;
