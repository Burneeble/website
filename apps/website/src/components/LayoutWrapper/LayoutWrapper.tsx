"use client";

import { Footer, Navbar } from "@burneeble/ui-components";
import { LayoutWrapperProps } from "./LayoutWrapper.types";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { SkeletonTheme } from "react-loading-skeleton";
import Image from "next/image";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
const LayoutWrapper = (props: LayoutWrapperProps) => {
  //Every time the page is loaded, the scroll is set to the top to avoid scrolling bug
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* TODO add a Suspense component */}
      <header
        className={`
          cs-website-max-width cs-website-horizontal-padding tw-absolute
          tw-left-2/4 tw-top-0 tw-z-50 -tw-translate-x-2/4
        `}
      >
        <Navbar
          logo={{
            svg: (
              <Image
                className="navbar-logo tw-w-10 tw-h-10"
                src={"/img/logos/burneeble-logo-one-letter.webp"}
                alt={"burneeble-log"}
                width={100}
                height={100}
              />
            ),
            url: "/",
          }}
          dropdowns={[
            {
              title: "Showcase",
              icon: faReact,
              primaryItem: {
                title: "Gallery",
                href: "/gallery",
                description:
                  "Find out what we have developed over time. Each project is custom-developed to offer powerful and innovative features, without technological limitations.",
                svg: (
                  <FontAwesomeIcon
                    icon={faReact}
                    className="tw-text-white tw-h-6 tw-w-6"
                  />
                ),
              },
              items: [
                {
                  title: "Reviews",
                  href: "/homepage#reviews",
                  description: "We have a high satisfaction rate",
                },
                {
                  title: "Abilities",
                  href: "/homepage#abilities",
                  description: "We develop projects in all categories",
                },
                {
                  title: "Some Examples",
                  href: "/homepage#showcase",
                  description: "Check out some of our projects",
                },
              ],
            },
          ]}
          links={[
            {
              title: "Blog",
              href: "/blog",
              icon: faGlobe,
            },
            {
              title: "Youtube",
              href: "https://youtube.com/@burneeble?feature=shared",
              icon: faYoutube,
            },
          ]}
        />
      </header>
      <main className="tw-min-h-screen tw-relative">
        <SkeletonTheme baseColor="rgba(43,43,43,1)" highlightColor="#322923">
          {props.children}
        </SkeletonTheme>
      </main>
      <div
        className={`
          footer-wrapper tw-relative tw-left-0 tw-top-[calc(100%-45px)]
          tw-w-full
        `}
      >
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default LayoutWrapper;
