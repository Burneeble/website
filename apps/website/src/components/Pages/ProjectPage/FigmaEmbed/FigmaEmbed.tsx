"use client";

import { FigmaEmbedProps } from "./FigmaEmbed.types";
import { useClientInfoService } from "@burneeble/ui-components";

const FigmaEmbed = (props: FigmaEmbedProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  //Methods
  const getEmbedUrlWithParams = (url: string) => {
    try {
      // Parse the URL to properly handle parameters
      const urlObj = new URL(url);
      
      // Fix the scaling parameter if it was changed
      if (urlObj.searchParams.get("scaling") === "min-zoom") {
        urlObj.searchParams.set("scaling", "scale-down-width");
      }
      
      // Add p=f parameter if missing (for full presentation mode)
      if (!urlObj.searchParams.has("p")) {
        urlObj.searchParams.set("p", "f");
      }
      
      // Add parameters only if they don't exist
      if (!urlObj.searchParams.has("hide-ui")) {
        urlObj.searchParams.set("hide-ui", "1");
      }

      if (!urlObj.searchParams.has("hotspot-hints")) {
        urlObj.searchParams.set("hotspot-hints", "0");
      }

      return urlObj.toString();
    } catch (error) {
      // Fallback for invalid URLs
      const hasParams = url.includes("?");
      const separator = hasParams ? "&" : "?";

      let finalUrl = url;
      if (!url.includes("hide-ui=")) {
        finalUrl += `${separator}hide-ui=1`;
      }
      if (!url.includes("hotspot-hints=")) {
        finalUrl += `${
          finalUrl.includes("hide-ui=") ? "&" : separator
        }hotspot-hints=0`;
      }

      return finalUrl;
    }
  };

  return (
    <section
      id={"figma-embed"}
      className={`
        figma-embed cs-section-structure cs-bottom-padding-for-footer
        tw-relative tw-z-[2] tw-flex tw-flex-col cs-gap-between-content
        tw-items-center tw-justify-center
      `}
    >
      <div
        className={`
          texts tw-flex tw-flex-col cs-gap-between-text tw-items-center
          tw-justify-center
        `}
      >
        <h2 className="title tw-text-center">
          Explore our{" "}
          <span className="cs-text-color-primary-gradient">Design</span> Process
        </h2>
        <p
          className={`
            description cs-max-width-text-content p-default tw-text-center
            tw-text-headings
          `}
        >
          Dive into our interactive Figma prototypes and see how we bring ideas
          to life through thoughtful design and user experience.
        </p>
      </div>

      <div
        className={`figma-container tw-relative tw-w-full tw-max-w-screen-xl`}
      >
        <img
          src="/img/project/sections/figma-icon.png"
          style={{ rotate: "12deg" }}
          className={`
            tw-absolute tw-right-[7%] tw-top-[-8%] tw-z-10 tw-w-[90px]

            md:tw-w-[120px]

            xl:tw-w-[170px]
          `}
          alt=""
        />
        <img
          src="/img/project/sections/figma-icon.png"
          style={{ rotate: "-15deg" }}
          className={`
            tw-absolute tw-bottom-[-5%] tw-left-[4%] tw-z-10 tw-w-[100px]

            md:tw-w-[155px]

            xl:tw-w-[130px]
          `}
          alt=""
        />
        <div
          className={`
            iframe-wrapper tw-relative tw-w-full tw-overflow-hidden
            tw-rounded-lg tw-border tw-border-solid tw-border-white/10
            tw-bg-[#1e1e1e] tw-shadow-[0px_0px_100px_rgba(242,_163,_7,_.6)]

            ${screen === "sm" ? "tw-aspect-[9/16]" : "tw-aspect-video"}
          `}
        >
          <iframe
            className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full"
            style={{ border: "none" }}
            width="800px"
            height="450px"
            src={getEmbedUrlWithParams(
              screen === "sm" ? props.mobileEmbedUrl : props.desktopEmbedUrl
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default FigmaEmbed;
