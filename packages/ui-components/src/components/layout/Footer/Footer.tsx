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
      Math.ceil(scrollPos + window.innerHeight) >=
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
    if (isBottom && isClient) {
      const tl = gsap.timeline();
      console.log("timeline", tl);

      tl.to(".gradient-three", {
        duration: 0.2,
        height: "95px",
        ease: "power2.out",
      })
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
      const tl = gsap.timeline();

      tl.to(".gradient-one", {
        duration: 0.2,
        height: "0px",
        ease: "power2.in",
      })
        .to(
          ".gradient-two",
          {
            duration: 0.2,
            height: "0px",
            ease: "power2.in",
          },
          "-=0.1"
        )
        .to(
          ".gradient-three",
          {
            duration: 0.2,
            height: "0px",
            ease: "power2.in",
          },
          "-=0.1"
        );
    }
  }, [isBottom, isClient]);

  return (
    <>
      <div className="footer tw-relative tw-h-[125px]">
        <div
          className={`
            gradient gradient-one tw-h-[0px] tw-bg-[var(--primary-lighest)]
          `}
        />
        <div
          className={`
            gradient gradient-two tw-h-[0px] tw-bg-[var(--primary-lighter)]
          `}
        />
        <div
          className={`
            gradient gradient-three tw-h-[0px] tw-bg-[var(--primary-light)]
          `}
        />
        <div
          className={`
            content gradient tw-z-10 tw-flex tw-h-[80px] tw-items-center
            tw-justify-center tw-bg-gradient-to-t tw-from-[#FF5C01]
            tw-to-[var(--primary-default)]
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
