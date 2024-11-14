import { useRef } from "react";

export const useScrollLock = () => {
  //Hooks
  const scrollPosition = useRef<number>(0);

  const lockScroll = () => {
    scrollPosition.current = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition.current}px`;
    document.body.style.width = "100%";
  };

  const unlockScroll = () => {
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollPosition.current);
  };

  return { lockScroll, unlockScroll };
};
