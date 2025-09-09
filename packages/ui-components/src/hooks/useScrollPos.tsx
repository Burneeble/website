import { useEffect, useRef, useState } from "react";

export const useScrollPos = () => {
  const [scrollPos, setScrollPos] = useState<number>(0);

  const scrollPosRef = useRef<number>(0);

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

  return { scrollPos };
};
