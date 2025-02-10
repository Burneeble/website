"use client";

import { ContactCard, useScrollLock } from "@burneeble/ui-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ContactProps } from "./Contact.types";
import { useEffect, useState } from "react";
import { ContactPopup } from "./components";

const Contact = (props: ContactProps) => {
  //States
  const [isContactPopupOpen, setIsContactPopupOpen] = useState<boolean>(false);
  const [isFirstRender, setFirstRender] = useState<boolean>(true);

  //Hooks
  const { lockScroll, unlockScroll } = useScrollLock();

  //Effect
  useEffect(() => {
    if (isFirstRender) setFirstRender(false);
    else {
      if (isContactPopupOpen) lockScroll();
      else unlockScroll();
    }
  }, [isContactPopupOpen]);

  return (
    <section
      className={`
        contact-section cs-section-structure cs-gap-between-content tw-relative
        tw-flex tw-flex-col tw-items-center tw-justify-center
      `}
    >
      {isContactPopupOpen && (
        <ContactPopup
          isContactPopupOpen={isContactPopupOpen}
          setIsContactPopupOpen={setIsContactPopupOpen}
        />
      )}

      <div
        className={`
          contact-shape tw-absolute tw-left-1/2 tw-top-1/2 tw-h-[40rem]
          tw-w-[80rem] -tw-translate-x-1/2 -tw-translate-y-1/2
          tw-bg-[radial-gradient(_rgba(115,80,61,1)_10%,_#000_80%)]
          tw-opacity-[.5] tw-blur-[100px]
        `}
      ></div>

      <div
        className={`
          contact-text-content cs-gap-between-text tw-z-[2] tw-inline-flex
          tw-w-full tw-flex-col tw-items-center tw-justify-center
        `}
      >
        <h2
          className={`
            tw-mx-auto tw-w-fit contact-text-content-title tw-self-stretch
            tw-text-center
          `}
        >
          Your Project {""}
          <span className="cs-text-color-primary-gradient">
            is just a click away.
          </span>{" "}
        </h2>

        <p
          className={`
            contact-text-content-paragraph p-default tw-self-stretch
            tw-text-center tw-font-normal tw-text-body
          `}
        >
          Contact us to talk about your project, we are ready to show you that
          everything is possible with{" "}
          <strong className={`p-default tw-text-body`}>Burneeble</strong>
        </p>
      </div>
      <div
        className={`
          contact-cards tw-z-[2] tw-inline-flex tw-w-full tw-flex-col
          tw-items-center tw-justify-center tw-gap-4

          2lg:tw-h-[441px] 2lg:tw-flex-row
        `}
      >
        <ContactCard
          icon={"/img/logos/fiverr-logo.webp"}
          title="Fiverr"
          description="You can contact us by email, we will reply you as soon as possible."
          mainColor="#1DBF73"
          buttonText="Contact Us"
          onClick={() => {}}
        />
        <ContactCard
          icon={faEnvelope}
          title="Email"
          description="You can contact us by email, we will reply you as soon as possible."
          mainColor="#f28307"
          buttonText="Contact Us"
          onClick={() => {
            setIsContactPopupOpen(true);
          }}
        />
        <ContactCard
          icon={"/img/logos/upwork-logo.webp"}
          title="Upwork"
          description="You can contact us by email, we will reply you as soon as possible."
          mainColor="#179E00"
          buttonText="Contact Us"
          onClick={() => {}}
        />
      </div>
    </section>
  );
};

export default Contact;
