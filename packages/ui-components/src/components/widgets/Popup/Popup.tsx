import React, { RefObject, useEffect, useRef } from "react";
import { PopupProps, PopupType, PopupVariants } from "./Popup.types";
import { cn } from "@/lib/utils";

const PopupComponent = (
  props: PopupProps & { ref: RefObject<HTMLDivElement> }
) => {
  //States
  const type = props.type || PopupType.Fixed;

  return (
    <div
      className={cn(
        PopupVariants({ variant: props.variant }),
        type === PopupType.Absolute ? "tw-absolute tw-z-[200]" : "tw-relative",
        props.className
      )}
      onClick={(e) => {
        e.stopPropagation();
      }}
      ref={props.ref}
    >
      {props.children}
    </div>
  );
};

const Popup = (props: PopupProps) => {
  //States
  const type = props.type || PopupType.Fixed;

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
            <PopupComponent {...props} ref={popup} />
          </div>
        ) : (
          <PopupComponent {...props} ref={popup} />
        ))}
    </>
  );
};

export default Popup;
