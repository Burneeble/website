import { useContext } from "react";
import { clientInfoServiceContext } from "./ClientInfoServiceContext";

export const useClientInfoService = () => {
  const context = useContext(clientInfoServiceContext);

  if (!context) {
    throw new Error(
      "`useClientInfoService` must be used within a `ClientInfoServiceProvider`"
    );
  }

  return context;
};
