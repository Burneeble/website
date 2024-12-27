"use client";

import { Button } from "@burneeble/ui-components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  //Hooks
  const router = useRouter();

  return (
    <div
      className={`
        not-found-page tw-bg-gradient-to-b tw-from-[var(--secondary-base)_50%]
        tw-to-[var(--secondary-darker)_100%]
      `}
    >
      <section
        className={`
          main-section cs-section-structure tw-flex tw-items-center
          tw-justify-center tw-gap-[20px]
        `}
      >
        <div
          className={`
            texts tw-w-[690px] tw-flex tw-items-start tw-flex-col
            tw-justify-center tw-gap-[20px]
          `}
        >
          <h1 className="title !tw-leading-[6rem]">
            <span className="cs-text-color-primary-gradient">Sorry!</span> This
            page isn’t available
          </h1>
          <p className="text tw-text-3xl tw-font-[500] tw-leading-[40px]">
            The page you were looking for couldn’t be found. Go to other
            sections to discover more about <strong>BURNEEBLE</strong>
          </p>
          <div
            className={`
              ctas tw-mt-[20px] tw-flex tw-items-center tw-justify-start
              tw-gap-[20px]
            `}
          >
            <Button
              size="lg"
              onClick={() => {
                router.push("/");
              }}
            >
              Homepage
            </Button>
            <Button
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
        />
      </section>
    </div>
  );
}
