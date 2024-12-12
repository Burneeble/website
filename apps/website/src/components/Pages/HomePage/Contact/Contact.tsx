"use client";

import { ContactCard } from "@burneeble/ui-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ContactProps } from "./Contact.types";

const Contact = (props: ContactProps) => {
  //States

  //Hooks
  // const { screen } = useClientInfoService();

  return (
    <section
      className={`
        contact-section cs-section-structure cs-gap-between-content tw-flex
        tw-items-center tw-justify-center tw-flex-col tw-relative
      `}
    >
      <div
        className={`
          contact-shape tw-absolute tw-top-[50%] tw-left-[50%]
          -tw-translate-x-[50%] -tw-translate-y-[50%] tw-w-[80rem] tw-h-[40rem]
          tw-bg-[radial-gradient(_rgba(115,80,61,1)_10%,_#000_80%)]
          tw-opacity-[.5] tw-blur-[100px]
        `}
      ></div>

      <div
        className={`
          contact-text-content cs-gap-between-text tw-w-full tw-flex-col
          tw-justify-center tw-items-center tw-inline-flex tw-z-[2]
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
            contact-text-content-paragraph p-default tw-self-stretch
            tw-text-center tw-text-body tw-font-normal
          `}
        >
          Contact us to talk about your project, we are ready to show you that
          everything is possible with{" "}
          <strong className={`p-default tw-text-body`}>Burneeble</strong>
        </p>
      </div>
      <div
        className={`
          contact-cards tw-justify-center tw-items-center tw-gap-4
          tw-inline-flex tw-flex-col tw-w-full tw-z-[2]

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
          onClick={() => {}}
        />{" "}
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
