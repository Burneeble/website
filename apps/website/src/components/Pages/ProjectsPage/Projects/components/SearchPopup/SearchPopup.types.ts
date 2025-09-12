import { PopupLogic } from "@burneeble/ui-components";
import { Dispatch, SetStateAction } from "react";

export interface SearchPopupProps {
  categories: string[];
  activeCategories: string[];
  setActiveCategories: Dispatch<SetStateAction<string[]>>;
  popupLogic: PopupLogic;
}
