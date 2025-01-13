import { cva } from "class-variance-authority";

export interface SpinnerProps {
  size?: keyof typeof size;
}

const size = {
  default: "tw-h-[75px] tw-w-[75px]", //small
  sm: "tw-h-[50px] tw-w-[50px]", //smaller
  lg: "tw-h-[100px] tw-w-[100px]", //default
};

export const spinnerVariants = cva(
  `
    spinner tw-box-border tw-inline-block
    tw-animate-[rotate-spinner_1s_linear_infinite] tw-rounded-full
    tw-bg-[linear-gradient(0deg,_rgba(255,255,255,0.2)_33%,_#fff_100%)]
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
