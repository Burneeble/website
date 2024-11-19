import React, { useEffect, useRef } from "react";
import { PopupProps, PopupType } from "./Popup.types";
import { cn } from "@/lib/utils";

const Popup = (props: PopupProps) => {
  //States
  const type = props.type || PopupType.Fixed;

  const PopupComponent = (props: PopupProps) => {
    return (
      <div
        className={cn(
          `
            popup tw-flex tw-max-h-[80vh] tw-min-h-[30vh] tw-w-[30rem]
            tw-max-w-[90vw] tw-animate-cs-fade-in tw-items-center
            tw-justify-center tw-overflow-auto tw-rounded-lg tw-border-[1px]
            tw-border-[var(--secondary-lighter)] tw-bg-[var(--primary-bg-color)]
            tw-bg-gradient-to-b tw-p-[20px]
            tw-shadow-[0_5px_5px_rgba(0,0,0,0.26)] secondary-gradient-to-custom
            tw-border-solid tw-text-headings
          `,
          type === PopupType.Absolute
            ? "tw-absolute tw-z-[200]"
            : "tw-relative",
          props.className
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}
        ref={popup}
      >
        {props.children}
      </div>
    );
  };

  //Hooks
  const popup = useRef<HTMLDivElement>(null);

  //Effects
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (popup.current && !popup.current.contains(event.target)) {
        props.logic.closePopup();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popup]);

  return (
    <>
      {props.logic.isPopupOpen &&
        (type === PopupType.Fixed ? (
          <div
            className={`
              popup-wrapper tw-fixed tw-right-0 tw-top-0 tw-z-[99999] tw-flex
              tw-h-screen tw-w-full tw-items-center tw-justify-center
              tw-bg-[rgba(0,0,0,0.51)]
            `}
            onClick={() => {
              props.logic.closePopup();
            }}
          >
            <PopupComponent {...props} />
          </div>
        ) : (
          <PopupComponent {...props} />
        ))}
    </>
  );
};

export default Popup;
