import { useState } from "react";
import { PopupLogic } from "./Popup.types";

export const usePopup = (): PopupLogic => {
  //States
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  //Methods

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return {
    isPopupOpen,
    openPopup,
    closePopup,
  };
};
