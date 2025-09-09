import { createContext } from "react";
import { Screen } from "./ClientInfoService.types";

export interface ClientInfoServiceContent {
  width: number | null;
  screen: Screen;
  isClient: boolean;
}

export const clientInfoServiceContext = createContext<ClientInfoServiceContent>(
  {
    width: null,
    screen: "2xl",
    isClient: false,
  }
);
