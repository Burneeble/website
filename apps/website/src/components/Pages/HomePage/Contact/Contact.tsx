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
      <h2 className={`tw-w-fit tw-mx-auto`}>
        Your Project {""}
        <span className="text-color-primary-gradient">
          is just a click away.
        </span>{" "}
      </h2>
    </section>
  );
};

export default Contact;
