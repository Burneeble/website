"use client";

import { Navbar } from "@burneeble/ui-components";
import { LayoutWrapperProps } from "./LayoutWrapper.types";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const LayoutWrapper = (props: LayoutWrapperProps) => {
  return (
    <>
      <header
        className={`
          tw-absolute tw-top-0 tw-left-0 tw-z-50 tw-w-full tw-pb-2.5 tw-pt-5
          tw-px-5
        `}
      >
        <Navbar
          logo={{
            svg: <div>Logo</div>,
            url: "https://google.com",
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
      <main>{props.children}</main>
      <ToastContainer />
    </>
  );
};

export default LayoutWrapper;
