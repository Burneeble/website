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
  const [scrollPos, setScrollPos] = useState<number>(0);

  //Hooks
  const widthRef = useRef<number | null>(null);
  const scrollPosRef = useRef<number>(0);

  //Effects
  useEffect(() => {
    setIsClient(true);
  }, []);

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
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (scrollPosRef.current !== currentScrollPos) {
        scrollPosRef.current = currentScrollPos;
        setScrollPos(currentScrollPos);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
      if (width <= screen.width) {
        return screen.key as Screen;
      }
    }

    return "2xl";
  };

  return (
    <clientInfoServiceContext.Provider
      value={{ width, screen, isClient, scrollPos, evaluateScreen }}
    >
      {props.children}
    </clientInfoServiceContext.Provider>
  );
};

export default ClientInfoServiceProvider;
