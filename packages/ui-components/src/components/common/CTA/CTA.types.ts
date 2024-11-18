import { cva } from "class-variance-authority";
import { HTMLAttributeAnchorTarget } from "react";

export interface CTAProps {
  projectUrl: string;
  text: string;
  target?: HTMLAttributeAnchorTarget;
  size?: keyof typeof size;
}

//Variants
const size = {
  default: "tw-h-[58px] tw-text-2xl",
  sm: "tw-h-[35px] tw-text-lg",
};

export const CTAVariants = cva(
  `
      website-cta-wrapper tw-group tw-relative tw-flex tw-items-center tw-justify-center tw-font-bowlby-one
      tw-font-normal tw-text-button tw-w-fit
    `,
  {
    variants: {
      size,
    },
    defaultVariants: {
      size: "default",
    },
  }
);
