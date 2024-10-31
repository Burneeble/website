import { createContext } from "react";

export interface ClientInfoServiceContent {
  width: number;
}

export const clientInfoServiceContext = createContext<ClientInfoServiceContent>(
  { width: window.innerWidth }
);
