"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { YoutubeProps } from "./Youtube.types";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  Button,
  useClientInfoService,
  YoutubePreview,
  YoutubePreviewSkeleton,
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
    if (["sm", "md", "lg"].includes(screen)) {
      let videoIndex = 0;
      interval = setInterval(() => {
        if (videoIndex == 2) videoIndex = 0;
        else videoIndex++;
        setVideoIndex(videoIndex);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [screen]);

  //TODO probably need to move this to a service
  // useEffect(() => {
  //   fetchVideos();
  // }, []);

  //Methods

  return (
    <section
      className={cn(
        `
          youtube cs-website-vertical-padding tw-relative tw-flex tw-flex-col
          cs-gap-between-content tw-items-center tw-justify-center
        `,
        props.className && props.className
      )}
    >
      <div
        className={`
          bg tw-absolute tw-left-1/2 tw-top-1/2 tw-z-[-1] tw-h-full tw-w-screen
          -tw-translate-x-1/2 -tw-translate-y-1/2 tw-border-t tw-border-solid
          tw-border-white
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

            after:tw-absolute after:tw-left-1/2 after:tw-top-1/2 after:tw-z-[-1]
            after:tw-block after:tw-h-[20px] after:tw-w-[20px]
            after:-tw-translate-x-1/2 after:-tw-translate-y-1/2
            after:tw-rounded-full after:tw-bg-white
          `}
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className={`tw-max-w-[52.15px] tw-text-[52.15px] tw-text-[#ff0000]`}
          />
        </div>
        <h2 className="title tw-text-center">
          <span className="cs-text-color-primary-gradient">Watch our</span>{" "}
          Videos!
        </h2>
        <p className="description p-default tw-text-center tw-text-headings">
          Videos focused on developing with AI, from online and local tools,
          creating new ones and much more. Have fun and learn at the same time.
          🔥
        </p>
      </div>
      <div
        className={`
          videos tw-relative tw-flex tw-aspect-[560/400] tw-w-full tw-gap-[21px]

          lg:tw-aspect-auto
        `}
      >
        {[0, 1, 2].map((index) => {
          return (
            <div
              key={index}
              className={cn(
                `
                  video-wrapper

                  lg:tw-flex-1
                `,
                ["sm", "md", "lg"].includes(screen) &&
                  `
                    tw-absolute tw-left-1/2 tw-top-1/2 tw-w-full
                    -tw-translate-x-1/2 -tw-translate-y-1/2 tw-transition-all
                    tw-duration-500 tw-ease-in-out

                    ${
                      index === videoIndex
                        ? `tw-pointer-events-auto tw-opacity-100`
                        : `tw-pointer-events-none tw-opacity-0`
                    }
                  `
              )}
            >
              {props.video && props.video[index] ? (
                <YoutubePreview
                  thumbnail={props.video[index].thumbnail}
                  title={props.video[index].title}
                  url={props.video[index].url}
                />
              ) : (
                <YoutubePreviewSkeleton />
              )}
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
