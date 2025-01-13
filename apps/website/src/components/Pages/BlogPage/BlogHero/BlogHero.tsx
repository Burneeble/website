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
        blog-hero cs-section-structure tw-flex tw-flex-col tw-justify-center
        tw-items-center cs-gap-between-content tw-relative
      `}
    >
      <div
        className={`
          bg
          tw-bg-[linear-gradient(180deg,black_1%,rgba(0,0,0,0)_80%),url("/img/blog-page/hero-bg.png")]
          tw-bg-center tw-bg-cover tw-absolute tw-top-1/2 tw-left-1/2
          tw-w-screen tw-h-full -tw-translate-x-1/2 -tw-translate-y-1/2
          tw-z-[-1]
        `}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`fontawesome-gradient-icon tw-text-[47px]`}
      />
      <div
        className={`
          text-wrapper tw-flex tw-flex-col tw-justify-center tw-items-center
          cs-gap-between-text
        `}
      >
        <h1 className="title tw-text-3xl tw-text-center">Burneeble News</h1>
        <p className="text p-default tw-text-center tw-text-headings">
          Welcome to Burneeble News. Take a look at our articles and videos
          content to learn more about integrated AI in development!{" "}
          <strong>News, Tutorial and more, with Burneeble</strong>.
        </p>
      </div>
      <div
        className={`
          buttons-wrapper tw-w-full tw-flex tw-flex-col tw-items-center
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
