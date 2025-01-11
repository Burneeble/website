import { createContext } from "react";
import { Screen } from "./ClientInfoService.types";

export interface ClientInfoServiceContent {
  width: number | null;
  screen: Screen;
  isClient: boolean;
  scrollPos: number;
  evaluateScreen(width: number | null): Screen;
}

export const clientInfoServiceContext = createContext<ClientInfoServiceContent>(
  {
    width: null,
    screen: "2xl",
    isClient: false,
    scrollPos: 0,
    evaluateScreen(_width: number | null): Screen {
      return "2xl";
    },
  }
);
