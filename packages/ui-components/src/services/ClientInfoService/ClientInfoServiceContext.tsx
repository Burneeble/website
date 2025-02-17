import { createContext } from "react";
import { Screen } from "./ClientInfoService.types";

export interface ClientInfoServiceContent {
  width: number | null;
  height: number | null;
  screen: Screen;
  isClient: boolean;
  scrollPos: number;
}

export const clientInfoServiceContext = createContext<ClientInfoServiceContent>(
  {
    width: null,
    height: null,
    screen: "2xl",
    isClient: false,
    scrollPos: 0,
  }
);
