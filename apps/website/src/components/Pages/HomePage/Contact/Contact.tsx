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
        contact-section cs-section-structure tw-flex tw-items-center
        tw-justify-center tw-gap-5 tw-flex-col tw-relative
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
          contact-text-content tw-w-full tw-flex-col tw-justify-center
          tw-items-center tw-gap-2.5 tw-inline-flex
        `}
      >
        <h2
          className={`
            tw-w-fit tw-mx-auto contact-text-content-title tw-self-stretch
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
            contact-text-content-paragraph tw-self-stretch tw-text-center
            tw-text-body tw-font-normal tw-font-inter tw-text-xl tw-leading-7

            lg:tw-text-3xl lg:tw-leading-10

            md:tw-text-2xl md:tw-leading-9
          `}
        >
          Contact us to talk about your project, we are ready to show you that
          everything is possible with{" "}
          <strong
            className={`
              tw-text-body tw-font-inter tw-text-xl tw-leading-7

              lg:tw-text-3xl lg:tw-leading-10

              md:tw-text-2xl md:tw-leading-9
            `}
          >
            Burneeble
          </strong>
        </p>
      </div>
      <div
        className={`
          contact-cards tw-justify-center tw-items-center tw-gap-4
          tw-inline-flex tw-flex-col tw-w-full

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
