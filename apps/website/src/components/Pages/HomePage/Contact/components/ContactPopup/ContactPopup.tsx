"use client";

import { useEffect, useState } from "react";
import { ContactPopupProps } from "./ContactPopup.types";
import {
  Form,
  InputType,
  useClientInfoService,
  useScrollLock,
} from "@burneeble/ui-components";
import { cn } from "@/lib/utils";

const ContactPopup = (props: ContactPopupProps) => {
  //States
  const [isContactPopupOpen, setIsContactPopupOpen] = useState<boolean>(false);
  const [isFirstRender, setFirstRender] = useState<boolean>(true);

  //Hooks
  const { lockScroll, unlockScroll } = useScrollLock();
  const { width } = useClientInfoService();

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
          contact-popup-wrapper tw-fixed tw-left-0 tw-top-0 tw-flex tw-h-screen
          tw-w-screen tw-items-center tw-justify-center
          tw-bg-[rgba(0,0,0,0.652)] tw-z-[55]
        `}
      >
        <div
          // onClick={(e) => e.stopPropagation()}
          className={`
            contact-popup no-scrollbar tw-h-fit tw-max-h-[80%] tw-p-5
            tw-w-[700px] tw-overflow-scroll tw-max-w-[90%] tw-bg-gradient-to-b
            secondary-gradient-to-custom tw-rounded-lg tw-border
            tw-border-[#483a32] tw-flex-col tw-justify-start tw-items-center
            tw-gap-5 tw-inline-flex
          `}
        >
          <div
            className={`
              contact-text-content-wrapper tw-flex tw-flex-col tw-items-center
              tw-justify-center tw-gap-2.5 tw-self-stretch
            `}
          >
            <h2
              className={`
                contact-popup-title tw-text-center tw-inline-flex
                tw-items-center tw-justify-center tw-gap-2.5 tw-self-stretch
              `}
            >
              Get in Touch 🔥
            </h2>
            <p
              className={`
                p-small contact-paragraph-content tw-self-stretch tw-text-center
              `}
            >
              You can reach us by filling out this form or contacting us via our
              email:{" "}
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
            <Form
              className={cn(
                width &&
                  width > 600 &&
                  `
                    tw-grid tw-grid-cols-2 tw-grid-rows-auto tw-gap-x-5
                    tw-gap-y-2 tw-space-y-0
                  `,
                `tw-w-full`
              )}
              fields={[
                {
                  key: "name",
                  label: "",
                  placeholder: "First Name",
                  inputType: InputType.text,
                  className: "tw-content-end tw-col-[1] tw-row-[1]",
                },
                {
                  key: "lastName",
                  label: "",
                  placeholder: "Last Name",
                  inputType: InputType.text,
                  className: "tw-content-end tw-col-[2] tw-row-[1]",
                },
                {
                  key: "email",
                  label: "",
                  placeholder: "Your Email",
                  inputType: InputType.text,
                  className: "tw-content-end tw-col-[1/span_2] tw-row-[2]",
                },
                {
                  key: "interest",
                  label: "What are you interested in?",
                  placeholder: "Select your interest",
                  inputType: InputType.select,
                  className: "tw-content-end tw-col-[1] tw-row-[3]",
                  attributes: {
                    items: [
                      { label: "Web Development", value: "web-development" },
                      {
                        label: "Mobile Development",
                        value: "mobile-development",
                      },
                      { label: "UI/UX Design", value: "ui-ux-design" },
                      {
                        label: "Digital Marketing",
                        value: "digital-marketing",
                      },
                    ],
                  },
                },
                {
                  key: "budget",
                  label: "Project Budget",
                  placeholder: "Select your budget",
                  inputType: InputType.select,
                  className: "tw-content-end tw-col-[2] tw-row-[3]",
                  attributes: {
                    items: [
                      { label: "Less than $500", value: "less-than-500" },
                      { label: "$500 - $1000", value: "500-1000" },
                      { label: "$1000 - $5000", value: "1000-5000" },
                      { label: "$5000 - $10000", value: "5000-10000" },
                      { label: "More than $10000", value: "more-than-10000" },
                    ],
                  },
                },
                {
                  key: "textarea",
                  label: "",
                  placeholder: "Tell us more about your project",
                  inputType: InputType.textarea,
                  className: "tw-content-end tw-col-[1/span_2] tw-row-[4]",
                },
              ]}
              onSubmit={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPopup;
