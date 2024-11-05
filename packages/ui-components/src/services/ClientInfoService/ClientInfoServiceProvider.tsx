import { ClientInfoServiceProviderProps } from "./ClientInfoService.types";
import { clientInfoServiceContext } from "./ClientInfoServiceContext";
import React, { useEffect, useRef, useState } from "react";

const ClientInfoServiceProvider = (props: ClientInfoServiceProviderProps) => {
  //States
  //TODO create a custom state for get the type of device instead of width, to avoid the use of hardcoded numbers in the components
  //exmaples: mobile, tablet, desktop
  const [width, setWidth] = useState<number>(0);

  //Hooks
  const widthRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (widthRef.current !== currentWidth) {
        widthRef.current = currentWidth;
        setWidth(currentWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <clientInfoServiceContext.Provider value={{ width }}>
      {props.children}
    </clientInfoServiceContext.Provider>
  );
};

export default ClientInfoServiceProvider;
