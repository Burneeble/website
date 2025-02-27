"use client";

import { Button, useClientInfoService } from "@burneeble/ui-components";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogHero = () => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <section
      className={`
        blog-hero cs-section-structure tw-relative tw-z-[2] tw-flex tw-flex-col
        tw-items-center tw-justify-center cs-gap-between-content
      `}
    >
      <div
        className={`
          blog-hero-bg tw-absolute tw-left-1/2 tw-top-1/2 tw-z-[-1] tw-h-full
          tw-w-screen -tw-translate-x-1/2 -tw-translate-y-1/2 tw-bg-cover
        `}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`fontawesome-gradient-icon tw-max-w-[47px] tw-text-[47px]`}
      />
      <div
        className={`
          text-wrapper tw-flex tw-flex-col tw-items-center tw-justify-center
          cs-gap-between-text
        `}
      >
        <h1 className="title tw-text-center tw-text-3xl">Burneeble News</h1>
        <p className="text p-default tw-text-center tw-text-headings">
          Welcome to Burneeble News. Take a look at our articles and videos
          content to learn more about integrated AI in development!{" "}
          <strong>News, Tutorial and more, with Burneeble</strong>.
        </p>
      </div>
      <div
        className={`
          buttons-wrapper tw-flex tw-w-full tw-flex-col tw-items-center
          tw-justify-center

          sm:tw-flex-row sm:tw-gap-[20px]
        `}
      >
        <Button
          size="lg"
          className="tw-mt-[20px]"
          variant={"secondary"}
          fit={screen === "sm" ? "full" : "inline"}
        >
          Discover Articles
        </Button>
        <Button
          size="lg"
          className="tw-mt-[20px]"
          fit={screen === "sm" ? "full" : "inline"}
        >
          About Burneeble
        </Button>
      </div>
    </section>
  );
};

export default BlogHero;
