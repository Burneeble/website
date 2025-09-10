"use client";

import { Footer, Navbar } from "@burneeble/ui-components";
import { LayoutWrapperProps } from "./LayoutWrapper.types";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { SkeletonTheme } from "react-loading-skeleton";
import Image from "next/image";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { NavbarProvider, useNavbar } from "@/contexts/NavbarContext";

const LayoutWrapperContent = (props: LayoutWrapperProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isNavbarVisible } = useNavbar();

  //Every time the page is loaded, the scroll is set to the top to avoid scrolling bug
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll listener for dynamic navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Trigger after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TODO add a Suspense component */}
      <header
        className={`
          tw-fixed tw-top-0 tw-z-50 tw-w-full tw-transition-all tw-duration-300

          ${isScrolled ? 'tw-py-1 tw-backdrop-blur-md' : 'tw-py-2'}
          ${!isNavbarVisible ? 'tw-opacity-0 -tw-translate-y-full' : `
            tw-opacity-100
          `}
        `}
        style={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
          pointerEvents: !isNavbarVisible ? 'none' : 'auto'
        }}
      >
        <div className={`
          cs-website-max-width cs-website-horizontal-padding tw-mx-auto
        `}>
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
                {
                  title: "Portfolio",
                  href: "/portfolio",
                  description:
                    "Discover our exclusive portfolio of custom projects",
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
        </div>
      </header>
      <main 
        className={`
          tw-relative tw-min-h-screen tw-transition-all tw-duration-300
        `}
      >
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

const LayoutWrapper = (props: LayoutWrapperProps) => {
  return (
    <NavbarProvider>
      <LayoutWrapperContent {...props} />
    </NavbarProvider>
  );
};

export default LayoutWrapper;
