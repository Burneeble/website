"use client";

import { Button, useClientInfoService } from "@burneeble/ui-components";
import Image from "next/image";
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
          main-section cs-section-structure tw-flex tw-items-center
          tw-justify-center tw-gap-[20px] tw-flex-col-reverse tw-py-[10rem]
          tw-relative tw-z-10

          lg:tw-flex-row
        `}
      >
        <div
          className={`
            texts tw-max-w-[690px] tw-flex tw-items-start tw-flex-col
            tw-justify-center tw-gap-[20px]
          `}
        >
          <h1
            className={`
              title tw-text-center

              lg:!tw-leading-[6rem] lg:tw-text-start
            `}
          >
            <span className="cs-text-color-primary-gradient">Sorry!</span> This
            page isn’t available.
          </h1>
          <p
            className={`
              text tw-font-[500] tw-text-center p-default

              lg:tw-leading-[40px] lg:tw-text-start
            `}
          >
            The page you were looking for couldn’t be found. Go to other
            sections to discover more about <strong>BURNEEBLE</strong>
          </p>
          <div
            className={`
              ctas tw-mt-[20px] tw-flex tw-items-center tw-justify-start
              tw-gap-[20px] tw-flex-col tw-w-full

              lg:tw-max-w-[unset]

              sm:tw-flex-row sm:tw-max-w-[390px] sm:tw-mx-auto
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
        <Image
          src={"/img/not-found/404.png"}
          alt={"404"}
          width={590}
          height={272}
          className={`
            tw-max-w-[430px] tw-w-full

            lg:tw-max-w-[unset]
          `}
        />
      </section>
      <div
        className={`
          tw-bottom-shape tw-absolute tw-bottom-0 tw-left-1/2 tw-w-[120vw]
          tw-translate-y-1/2 -tw-translate-x-1/2 tw-aspect-square
          tw-bg-[radial-gradient(circle,var(--secondary-darker),rgba(0,0,0,0)_60%)]
        `}
      />
    </div>
  );
}
