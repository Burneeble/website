import React from "react";
import { CTAProps } from "./CTA.types";
import Link from "next/link";

const CTA = (props: CTAProps) => {
  return (
    <Link
      href={props.projectUrl}
      className={`
        website-cta-wrapper tw-group tw-relative tw-flex tw-h-[58px]
        tw-w-[216px] tw-items-center tw-justify-center tw-font-bowlby-one
        tw-text-2xl tw-font-normal tw-text-button
      `}
      target={props.target}
    >
      <span className="cta tw-relative tw-z-[2] tw-font-bowlby-one">
        {props.text}
      </span>
      <div
        className={`
          background-effect tw-absolute tw-left-0 tw-top-0 tw-inline-flex
          tw-h-[58px] tw-w-[58px] tw-items-center tw-justify-start tw-gap-2.5
          tw-rounded-full tw-border tw-border-[#f28307]/70 tw-bg-[#ff5c01]/70
          tw-transition-all tw-duration-300 tw-ease-in-out

          group-hover:tw-w-full group-hover:tw-border-[#f28307]/100
          group-hover:tw-bg-[#ff5c01]/100
        `}
      />
    </Link>
  );
};

export default CTA;
