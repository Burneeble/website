import React from "react";
import { CTAProps, CTAVariants } from "./CTA.types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CTA = (props: CTAProps) => {
  return (
    <Link
      href={props.projectUrl}
      className={CTAVariants({ size: props.size })}
      target={props.target}
    >
      <span className="cta tw-relative tw-z-[2] tw-font-bowlby-one tw-px-[15px]">
        {props.text}
      </span>
      <div
        className={cn(
          `
          background-effect tw-absolute tw-left-0 tw-top-0 tw-inline-flex
          tw-h-full tw-items-center tw-justify-start tw-gap-2.5
          tw-rounded-full tw-border tw-border-[#f28307]/70 tw-bg-[#ff5c01]/70
          tw-transition-all tw-duration-300 tw-ease-in-out

          group-hover:tw-w-full group-hover:tw-border-[#f28307]/100
          group-hover:tw-bg-[#ff5c01]/100
        `,
          !props.size || props.size === "default"
            ? "tw-w-[58px]"
            : "tw-w-[35px]"
        )}
      />
    </Link>
  );
};

export default CTA;
