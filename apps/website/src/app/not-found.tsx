"use client";

import TextCanvas from "@/components/TextCanvas";
import { Button, useClientInfoService } from "@burneeble/ui-components";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  //Hooks
  const router = useRouter();
  const { screen } = useClientInfoService();

  return (
    <div className={`not-found-page tw-relative tw-overflow-hidden`}>
      <section
        className={`
          main-section cs-website-vertical-padding tw-min-h-screen
          cs-website-max-width tw-flex tw-items-center tw-justify-center
          tw-flex-col-reverse tw-py-24 tw-relative tw-z-10

          lg:tw-flex-row lg:tw-justify-between lg:cs-website-horizontal-padding
        `}
      >
        <div
          className={`
            texts tw-w-full tw-flex tw-items-start tw-flex-col tw-justify-center
            tw-gap-[20px]

            lg:tw-w-[48%] lg:tw-mt-[unset]

            max-lg:cs-website-horizontal-padding
          `}
        >
          <h1
            className={`
              title tw-text-center tw-w-full

              lg:tw-text-start
            `}
          >
            <span className="cs-text-color-primary-gradient">Sorry!</span> This
            page isn’t available.
          </h1>
          <p
            className={`
              text tw-text-center tw-font-[500] p-default

              lg:tw-text-start
            `}
          >
            The page you were looking for couldn’t be found. Go to other
            sections to discover more about <strong>BURNEEBLE</strong>
          </p>
          <div
            className={`
              ctas tw-flex tw-items-center tw-justify-start tw-gap-[20px]
              tw-flex-col tw-w-full

              lg:tw-max-w-[unset]

              sm:tw-flex-row sm:tw-max-w-[90%] sm:tw-mx-auto
            `}
          >
            <Button
              fit={["sm", "md", "lg"].includes(screen) ? "full" : "inline"}
              size="lg"
              onClick={() => {
                router.push("/");
              }}
            >
              Homepage
            </Button>
            <Button
              fit={["sm", "md", "lg"].includes(screen) ? "full" : "inline"}
              size="lg"
              onClick={() => {
                router.push("/");
              }}
            >
              Blog
            </Button>
          </div>
        </div>
        <div
          className={`
            not-found-text tw-w-full tw-relative tw-flex tw-items-center
            tw-justify-center tw-h-fit

            lg:tw-w-[48%] lg:tw-h-[500px]
          `}
        >
          <TextCanvas />
        </div>
        {/* <Image
          src={"/img/not-found/404.png"}
          alt={"404"}
          width={590}
          height={272}
          className={`
            tw-w-full tw-max-w-[430px]

            lg:tw-max-w-[unset]
          `}
        /> */}
      </section>
      <div
        className={`
          tw-bottom-shape tw-absolute tw-bottom-0 tw-left-1/2 tw-aspect-square
          tw-w-[120vw] -tw-translate-x-1/2 tw-translate-y-1/2
          tw-bg-[radial-gradient(circle,var(--secondary-darker),rgba(0,0,0,0)_60%)]
        `}
      />
    </div>
  );
}
