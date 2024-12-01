"use client";

import { useEffect, useState } from "react";
import { ContactPopupProps } from "./ContactPopup.types";
import { useScrollLock } from "@burneeble/ui-components";

const ContactPopup = (props: ContactPopupProps) => {
  //States
  const [isContactPopupOpen, setIsContactPopupOpen] = useState<boolean>(false);
  const [isFirstRender, setFirstRender] = useState<boolean>(true);

  //Hooks
  const { lockScroll, unlockScroll } = useScrollLock();
  // const { screen } = useClientInfoService();

  useEffect(() => {
    if (isFirstRender) setFirstRender(false);
    else {
      if (isContactPopupOpen) lockScroll();
      else unlockScroll();
    }
  }, [isContactPopupOpen]);

  return (
    <>
      <div
        onClick={() => setIsContactPopupOpen(false)}
        className={`
          contact-popup-wrapper tw-fixed tw-left-0 tw-top-0 tw-z-[15] tw-flex
          tw-h-screen tw-w-screen tw-items-center tw-justify-center
          tw-bg-[rgba(0,0,0,0.652)]
        `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            contact-popup tw-h-fit tw-p-5 tw-w-[700px] tw-min-w-[500px]
            tw-bg-gradient-to-b secondary-gradient-to-custom tw-rounded-lg
            tw-border tw-border-[#483a32] tw-flex-col tw-justify-start
            tw-items-center tw-gap-5 tw-inline-flex
          `}
        >
          <div
            className={`
              contact-text-content-wrapper tw-flex tw-h-[150px] tw-flex-col
              tw-items-start tw-justify-start tw-gap-2.5 tw-self-stretch
            `}
          >
            <div
              className={`
                contact-popup-title tw-inline-flex tw-items-center
                tw-justify-center tw-gap-2.5 tw-self-stretch
              `}
            >
              <h2 className={`contact-popup-title tw-text-center`}>
                Get in Touch 🔥
              </h2>
            </div>
            <div
              className={`
                contact-paragraph-content tw-self-stretch tw-text-center
              `}
            >
              <p className={`p-small`}>
                You can reach us by filling out this form or contacting us via
                our email:{" "}
                <a
                  href="mailto:burneeble@example.com"
                  className={`
                    p-small tw-font-extrabold tw-transition-colors

                    hover:tw-text-action hover:tw-underline
                  `}
                >
                  burneeble@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPopup;
