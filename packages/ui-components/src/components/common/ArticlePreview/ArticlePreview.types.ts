import { cva } from "class-variance-authority";

/**
 * ArticlePreview props
 */
export interface ArticlePreviewProps {
  thumbnail: string;
  title: string;
  category: string;
  categorySlug: string;
  slug: string;
  description: string;
  query?: string;
  variant?: "default" | "dark";
  className?: string;
}

//Variants
const variants = {
  variant: {
    default: ``,
    dark: ``,
  },
};

export const articlePreviewVariants = cva(
  `
    tw-group tw-inline-flex tw-w-full tw-flex-col tw-items-start
    tw-justify-start tw-gap-[20px] tw-rounded-lg
  `,
  {
    variants,
    defaultVariants: {
      variant: "default",
    },
  }
);
