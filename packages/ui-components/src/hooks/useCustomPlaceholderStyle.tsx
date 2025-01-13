import { useEffect, useRef } from "react";

export const useCustomPlaceholder = <
  T extends HTMLInputElement | HTMLTextAreaElement
>() => {
  const inputRef = useRef<T>(null);

  useEffect(() => {
    const handleInput = () => {
      if (inputRef.current) {
        if (inputRef.current.value === "") {
          inputRef.current.classList.add("custom-placeholder-border");
        } else {
          inputRef.current.classList.remove("custom-placeholder-border");
        }
      }
    };

    if (inputRef.current) {
      inputRef.current.addEventListener("input", handleInput);
      handleInput();
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("input", handleInput);
      }
    };
  }, []);

  return inputRef;
};
