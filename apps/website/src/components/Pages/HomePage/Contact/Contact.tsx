"use client";

// import { useClientInfoService } from "@burneeble/ui-components";
import { ContactProps } from "./Contact.types";

const Contact = (props: ContactProps) => {
  //States

  //Hooks
  // const { screen } = useClientInfoService();

  return (
    <section
      className={`
        contact-section tw-px-5 tw-py-[50px] tw-flex tw-items-center
        tw-justify-center tw-gap-[20px] tw-flex-col tw-relative
      `}
    >
      <div
        className={`
          contact-text-content tw-w-full tw-h-40 tw-flex-col tw-justify-center
          tw-items-center tw-gap-2.5 tw-inline-flex
        `}
      >
        <div
          className={`contact-text-content-title tw-self-stretch tw-text-center`}
        >
          <h2 className={`tw-w-fit tw-mx-auto`}>
            Your Project {""}
            <span className="text-color-primary-gradient">
              is just a click away.
            </span>{" "}
          </h2>
        </div>
        <div
          className={`
            contact-text-content-paragraph tw-self-stretch tw-text-center
          `}
        >
          <p
            className={`
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
      </div>
    </section>
  );
};

export default Contact;
