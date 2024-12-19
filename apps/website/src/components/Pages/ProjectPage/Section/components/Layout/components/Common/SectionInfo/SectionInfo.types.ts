import { cva } from "class-variance-authority";

export interface SectionInfoProps {
  title: string;
  text: string;
  buttonText?: string;
  buttonUrl?: string;
  buttonSize?: string;
  alignment?: keyof typeof alignment;
  textAlignment?: "left" | "center" | "right";
}

const alignment = {
  default: "tw-items-center",
  left: "lg:tw-max-w-[630px] lg:tw-flex-1 tw-items-start",
  right: "lg:tw-max-w-[630px] lg:tw-flex-1 tw-items-center",
};

// eslint-disable-next-line @burneeble/burneeble/camel-case-vars
export const SectionInfoVariants = cva(
  `info tw-flex tw-justify-center tw-flex-col cs-gap-between-text`,
  {
    variants: {
      alignment,
    },
    defaultVariants: {
      alignment: "default",
    },
  }
);
