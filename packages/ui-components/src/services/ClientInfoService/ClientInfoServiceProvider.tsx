import {
  ClientInfoServiceProviderProps,
  Screen,
} from "./ClientInfoService.types";
import { clientInfoServiceContext } from "./ClientInfoServiceContext";
import React, { useEffect, useRef, useState } from "react";
import tailwindConfig from "../../../tailwind.config";

const ClientInfoServiceProvider = (props: ClientInfoServiceProviderProps) => {
  //States
  const [width, setWidth] = useState<number>(0);
  const [screen, setScreen] = useState<Screen>("2xl");

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

  useEffect(() => {
    const eScreen = evaluateScreen(width);
    if (eScreen !== screen) {
      setScreen(eScreen);
    }
  }, [width]);

  //Methods
  const evaluateScreen = (width: number): Screen => {
    const screenWidths = Object.entries(tailwindConfig.theme.screens).map(
      ([key, value]) => ({
        key,
        width: parseInt(value, 10),
      })
    );

    const sortedScreens = screenWidths.sort((a, b) => a.width - b.width);

    for (const screen of sortedScreens) {
      if (width <= screen.width) {
        return screen.key as Screen;
      }
    }

    return "2xl";
  };

  return (
    <clientInfoServiceContext.Provider value={{ width, screen }}>
      {props.children}
    </clientInfoServiceContext.Provider>
  );
};

export default ClientInfoServiceProvider;
