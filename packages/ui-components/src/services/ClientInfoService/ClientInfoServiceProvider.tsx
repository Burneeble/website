import {
  ClientInfoServiceProviderProps,
  Screen,
} from "./ClientInfoService.types";
import { clientInfoServiceContext } from "./ClientInfoServiceContext";
import React, { useEffect, useRef, useState } from "react";
import tailwindConfig from "../../../tailwind.config";

const ClientInfoServiceProvider = (props: ClientInfoServiceProviderProps) => {
  //States
  const [width, setWidth] = useState<number | null>(null);
  const [screen, setScreen] = useState<Screen>("2xl");
  const [isClient, setIsClient] = useState<boolean>(false);

  //Hooks
  const widthRef = useRef<number | null>(null);

  //Effects
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = document.documentElement.clientWidth;
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
  const evaluateScreen = (width: number | null): Screen => {
    if (!width) return "2xl";
    const screenWidths = Object.entries(tailwindConfig.theme.screens).map(
      ([key, value]) => ({
        key,
        width: parseInt(value, 10),
      })
    );

    const sortedScreens = screenWidths.sort((a, b) => a.width - b.width);

    for (const screen of sortedScreens) {
      if (width < screen.width) {
        return screen.key as Screen;
      }
    }

    return "2xl";
  };

  return (
    <clientInfoServiceContext.Provider value={{ width, screen, isClient }}>
      <svg className="svg-gradient">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "rgba(255, 92, 1, 1)", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "rgba(242, 163, 7, 1)", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="triangle-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#2B2B2B", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#73503D", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      {props.children}
    </clientInfoServiceContext.Provider>
  );
};

export default ClientInfoServiceProvider;
