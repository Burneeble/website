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
    spinner tw-relative tw-block

    after:tw-absolute after:tw-inset-0
    after:tw-animate-[rotate-spinner_2s_linear_infinite] after:tw-rounded-full
    after:tw-shadow-[inset_0_2px_0_var(--primary-base)] after:tw-content-['']

    before:tw-absolute before:tw-inset-0 before:tw-rounded-full
    before:tw-shadow-[inset_0_0_10px_2px_rgba(0,0,0,0.3)] before:tw-content-['']
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
