import React, { useEffect, useState } from "react";
import { FooterProps } from "./Footer.types";
import { useClientInfoService } from "@/services";
import gsap from "gsap";

const Footer = (props: FooterProps) => {
  //States
  const [isBottom, setIsBottom] = useState<boolean>(false);

  //Hooks
  const { scrollPos, isClient } = useClientInfoService();

  //Effects
  useEffect(() => {
    if (
      Math.ceil(scrollPos + window.innerHeight + 1) >=
      document.documentElement.scrollHeight
    ) {
      if (!isBottom) {
        setIsBottom(true);
      }
    } else {
      if (isBottom) {
        setIsBottom(false);
      }
    }
  }, [scrollPos]);

  useEffect(() => {
    let tl = gsap.timeline();

    tl.kill();

    if (isBottom && isClient) {
      tl = gsap.timeline();

      tl.to(
        ".gradient-three",
        {
          duration: 0.2,
          height: "95px",
          ease: "power2.out",
        },
        "-=0.1"
      )
        .to(
          ".gradient-two",
          {
            duration: 0.2,
            height: "110px",
            ease: "power2.out",
          },
          "-=0.1"
        )
        .to(
          ".gradient-one",
          {
            duration: 0.2,
            height: "125px",
            ease: "power2.out",
          },
          "-=0.1"
        );
    } else {
      tl = gsap.timeline();

      tl.to(".gradient-one", {
        duration: 0.2,
        height: "80px",
        ease: "power2.in",
      })
        .to(
          ".gradient-two",
          {
            duration: 0.2,
            height: "80px",
            ease: "power2.in",
          },
          "-=0.1"
        )
        .to(
          ".gradient-three",
          {
            duration: 0.2,
            height: "80px",
            ease: "power2.in",
          },
          "-=0.1"
        );
    }

    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, [isBottom, isClient]);

  return (
    <>
      <div className="footer tw-relative tw-h-[80px]">
        <div
          className={`
            gradient gradient-one tw-h-[80px] tw-bg-[var(--primary-lighest)]
          `}
        />
        <div
          className={`
            gradient gradient-two tw-h-[80px] tw-bg-[var(--primary-lighter)]
          `}
        />
        <div
          className={`
            gradient gradient-three tw-h-[80px] tw-bg-[var(--primary-light)]
          `}
        />
        <div
          className={`
            footer-content gradient tw-z-10 tw-flex tw-h-[80px] tw-items-center
            tw-justify-center tw-bg-[var(--primary-default)] tw-transition-all
          `}
        >
          <h2
            className={`
              tw-relative tw-text-center tw-font-bowlby-one tw-text-xs
              tw-font-normal tw-text-headings

              md:tw-text-lg

              xl:tw-text-xl
            `}
          >
            © COPYRIGHT 2024 - BURNEEBLE SRL
          </h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
