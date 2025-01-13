import { PopupLogic } from "@burneeble/ui-components";
import { Dispatch, SetStateAction } from "react";

export interface FilterPopupProps {
  popupLogic: PopupLogic;
  categories: string[];
  activeCategories: string[];
  setActiveCategories: Dispatch<SetStateAction<string[]>>;
}
