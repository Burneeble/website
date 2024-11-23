"use client";

import { Footer, Navbar } from "@burneeble/ui-components";
import { LayoutWrapperProps } from "./LayoutWrapper.types";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { SkeletonTheme } from "react-loading-skeleton";
import Image from "next/image";
const LayoutWrapper = (props: LayoutWrapperProps) => {
  return (
    <>
      {/* tw-pb-2.5
    tw-pt-5 tw-px-5 */}
      <header
        className={`
          cs-website-max-width cs-website-horizontal-padding tw-absolute
          tw-top-0 tw-left-2/4 tw-z-50 -tw-translate-x-2/4
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
                title: "shadcn/ui",
                href: "/",
                description:
                  "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
                svg: (
                  <FontAwesomeIcon
                    icon={faReact}
                    className="tw-text-white tw-h-6 tw-w-6"
                  />
                ),
              },
              items: [
                {
                  title: "Introduction",
                  href: "/",
                  description:
                    "Re-usable components built using Radix UI and Tailwind CSS.",
                },
                {
                  title: "Installation",
                  href: "/",
                  description:
                    "How to install dependencies and structure your app.",
                },
                {
                  title: "Typography",
                  href: "/",
                  description: "Styles for headings, paragraphs, lists...etc",
                },
              ],
            },
          ]}
          links={[
            {
              title: "Blog",
              href: "/",
              icon: faReact,
            },
            {
              title: "About",
              href: "/",
              icon: faReact,
            },
          ]}
        />
      </header>
      <main>
        <SkeletonTheme baseColor="rgba(43,43,43,1)" highlightColor="#322923">
          {props.children}
        </SkeletonTheme>
      </main>
      <div
        className={`
          footer-wrapper tw-absolute tw-top-[calc(100%-45px)] tw-left-0
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
