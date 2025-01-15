"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { YoutubeProps } from "./Youtube.types";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  Button,
  useClientInfoService,
  YoutubePreview,
} from "@burneeble/ui-components";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Youtube = (props: YoutubeProps) => {
  //States
  const [videoIndex, setVideoIndex] = useState(0);

  //Hooks
  const { screen } = useClientInfoService();

  //Effects
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (["sm", "md"].includes(screen)) {
      let videoIndex = 0;
      interval = setInterval(() => {
        if (videoIndex == 2) videoIndex = 0;
        else videoIndex++;
        setVideoIndex(videoIndex);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [screen]);

  return (
    <section
      className={`
        youtube cs-website-vertical-padding tw-flex tw-flex-col
        cs-gap-between-content tw-items-center tw-justify-center tw-min-h-screen
        tw-relative tw-bottom-[-25px]
      `}
    >
      <div
        className={`
          bg
          tw-bg-[radial-gradient(rgba(0,0,0,0),rgba(0,0,0,1)_80%),url("/img/blog-page/youtube-bg.png")]
          tw-bg-center tw-bg-cover tw-absolute tw-top-1/2 tw-left-1/2
          tw-w-screen tw-h-full -tw-translate-x-1/2 -tw-translate-y-1/2
          tw-z-[-1] tw-border-t-[1px] tw-border-solid tw-border-white
        `}
      />
      <div
        className={`
          texts tw-flex tw-flex-col cs-gap-between-text tw-items-center
          tw-justify-center
        `}
      >
        <div
          className={`
            icon-wrapper tw-relative

            after:tw-block after:tw-absolute after:tw-top-1/2 after:tw-left-1/2
            after:-tw-translate-x-1/2 after:-tw-translate-y-1/2
            after:tw-bg-white after:tw-w-[20px] after:tw-h-[20px]
            after:tw-rounded-full after:tw-z-[-1]
          `}
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className={`tw-max-w-[52.15px] tw-text-[52.15px] tw-text-[#ff0033]`}
          />
        </div>
        <h2 className="title tw-text-center">
          <span className="cs-text-color-primary-gradient">Watch our</span>{" "}
          Videos!
        </h2>
        <p className="description tw-text-center tw-text-headings">
          Videos focused on developing with AI, from online and local tools,
          creating new ones and much more. Have fun and learn at the same time.
          🔥
        </p>
      </div>
      <div
        className={`
          videos tw-flex tw-gap-[21px] tw-relative tw-aspect-[335/270] tw-w-full

          md:tw-aspect-auto

          sm:tw-aspect-[560/400]
        `}
      >
        {[1, 2, 3].map((_, i) => {
          return (
            <div
              key={i}
              className={cn(
                "video-wrapper",
                ["sm", "md"].includes(screen) &&
                  `
                    tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2
                    -tw-translate-y-1/2 tw-transition-all tw-duration-500
                    tw-ease-in-out tw-w-full

                    ${
                      i === videoIndex
                        ? `tw-opacity-100 tw-pointer-events-auto`
                        : `tw-opacity-0 tw-pointer-events-none`
                    }
                  `
              )}
            >
              <YoutubePreview
                thumbnail={`https://picsum.photos/192${i}/108${i}`}
                title={`How to Install OpenDevin in ${i} Steps: Updated May Version`}
                url={"https://google.com"}
              />
            </div>
          );
        })}
      </div>
      <Button
        variant="youtube"
        size={["sm", "md"].includes(screen) ? "default" : "lg"}
        className="lg:tw-w-[380px]"
        fit={screen === "sm" ? "full" : "inline"}
        onClick={() => {
          window.open("https://www.youtube.com/@Burneeble");
        }}
      >
        Youtube Channel
      </Button>
    </section>
  );
};

export default Youtube;
