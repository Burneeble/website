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
