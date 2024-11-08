import { createContext } from "react";

export interface ClientInfoServiceContent {
  width: number | null;
}

export const clientInfoServiceContext = createContext<ClientInfoServiceContent>(
  { width: null }
);
