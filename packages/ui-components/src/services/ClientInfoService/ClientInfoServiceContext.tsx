import { createContext } from "react";
import { Screen } from "./ClientInfoService.types";

export interface ClientInfoServiceContent {
  width: number;
  screen: Screen;
}

export const clientInfoServiceContext = createContext<ClientInfoServiceContent>(
  { width: 0, screen: "2xl" }
);
