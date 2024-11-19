import { cva } from "class-variance-authority";

export enum PopupType {
  Fixed = 1,
  Absolute,
}

/**
 * Popup props
 */
export interface PopupProps {
  /**
   * Hook instance to handle popup
   */
  logic: PopupLogic;
  /**
   * Elements inside popup
   */
  children: any;
  /**
   * Class name for popup
   */
  className?: string;
  /**
   * Type of popup
   */
  type?: PopupType;
  /**
   * Variant of popup
   */
  variant?: keyof typeof variant;
}

/**
 * Popup Logic
 */
export interface PopupLogic {
  /**
   * Says if popup is open
   */
  isPopupOpen: boolean;
  /**
   * Function to open popup
   *
   * @returns
   */
  openPopup: () => void;
  /**
   * Function to close popup
   *
   * @returns
   */
  closePopup: () => void;
}

/**
 * Popup variants
 */

const variant = {
  default: "tw-bg-[var(--primary-bg-color)]",
  secondary: "",
};

// eslint-disable-next-line @burneeble/burneeble/camel-case-vars
export const PopupVariants = cva(
  `
    popup tw-flex tw-max-h-[80vh] tw-min-h-[30vh] tw-w-[30rem] tw-max-w-[90vw]
    tw-animate-cs-fade-in tw-items-center tw-justify-center tw-overflow-auto
    tw-rounded-lg tw-border-[1px] tw-border-[var(--secondary-lighter)]
    tw-bg-gradient-to-b tw-p-[20px] tw-shadow-[0_5px_5px_rgba(0,0,0,0.26)]
    secondary-gradient-to-custom tw-border-solid tw-text-headings
  `,
  {
    variants: {
      variant,
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
