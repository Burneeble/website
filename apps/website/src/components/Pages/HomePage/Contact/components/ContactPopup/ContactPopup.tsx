"use client";

import React, { useEffect, useState } from "react";
import { ContactPopupProps } from "./ContactPopup.types";
import {
  Button,
  Form,
  InputType,
  NotificationHandler,
  Spinner,
  useClientInfoService,
} from "@burneeble/ui-components";
import { cn } from "@/lib/utils";
import z from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const ContactPopup = (props: ContactPopupProps) => {
  //States
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  //Hooks
  const { width } = useClientInfoService();

  //Methods
  const onSubmit = async (values: Record<string, string>) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("your-name", `${values.firstName} ${values.lastName}`);
      formData.append("your-email", values.email);
      formData.append("your-subject", values.interest);
      formData.append("budget", values.budget.replaceAll("-", " "));
      formData.append("details", values.textarea.replaceAll("-", " "));
      formData.append("_wpcf7_unit_tag", "wpcf7-f20-o1");

      await fetch(
        `https://burneeble.com/wp-json/contact-form-7/v1/contact-forms/592/feedback`,
        {
          method: "POST",
          body: formData,
        }
      );

      setIsSubmitted(true);
    } catch (err) {
      console.log(err);
      NotificationHandler.instance.error(
        "An error occurred while submitting the form. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  //Effects
  useEffect(() => {
    if (!props.isContactPopupOpen) {
      setIsSubmitted(false);
    }
  }, [props.isContactPopupOpen]);

  return (
    <>
      <div
        onClick={() => props.setIsContactPopupOpen(false)}
        className={`
          contact-popup-wrapper tw-fixed tw-left-0 tw-top-0 tw-flex tw-h-screen
          tw-w-screen tw-items-center tw-justify-center
          tw-bg-[rgba(0,0,0,0.652)] tw-z-[55]
        `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            contact-popup no-scrollbar tw-h-fit tw-max-h-[80%] tw-p-5
            tw-w-[700px] tw-overflow-scroll tw-max-w-[90%] tw-bg-gradient-to-b
            secondary-gradient-to-custom tw-rounded-lg tw-border
            tw-border-[#483a32] tw-flex-col tw-justify-start tw-items-center
            tw-gap-5 tw-inline-flex
          `}
        >
          {isSubmitted ? (
            <>
              <div
                className={`
                  success tw-flex tw-flex-col tw-items-center tw-justify-center
                  tw-gap-[10px]
                `}
              >
                <p
                  className={`
                    confirm tw-text-success tw-text-center tw-font-inter
                    tw-font-[900] tw-flex tw-items-center tw-justify-center
                    tw-gap-[.5rem] p-small
                  `}
                >
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="tw-scale-[1.2]"
                  />
                  Your message has been successfully sent.
                </p>
                <h2 className="title tw-text-center">
                  {"We'll connect soon 🔥"}
                </h2>
                <p
                  className={`tw-text-center tw-text-body tw-font-inter p-small`}
                >
                  We will reply to you as soon as possible. If you have any
                  other questions or additional information to share with us, do
                  not hesitate to fill out another form or contact us via email:
                  <strong>burneeble@example.com</strong>
                </p>
                <Button
                  onClick={() => {
                    props.setIsContactPopupOpen(false);
                  }}
                  fit="full"
                >
                  Go back
                </Button>
              </div>
            </>
          ) : (
            <>
              {isSubmitting && (
                <div
                  className={`
                    tw-absolute loading-screen tw-top-0 tw-left-0 tw-w-full
                    tw-h-full tw-flex tw-items-center tw-justify-center
                    tw-bg-[rgba(0,0,0,.6)] tw-z-[5]
                  `}
                >
                  <Spinner size="default" />
                </div>
              )}

              <div
                className={`
                  contact-text-content-wrapper tw-flex tw-flex-col
                  tw-items-center tw-justify-center tw-gap-2.5 tw-self-stretch
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
                    p-small contact-paragraph-content tw-self-stretch
                    tw-text-center
                  `}
                >
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
                      key: "firstName",
                      label: "Your first name",
                      placeholder: "First Name",
                      inputType: InputType.text,
                      className: "tw-content-end tw-col-[1] tw-row-[1]",
                      validation: z
                        .string()
                        .min(2, "Must be at least 2 characters")
                        .regex(/^[a-zA-Z]+$/, "Can only contain letters"),
                    },
                    {
                      key: "lastName",
                      label: "Your last name",
                      placeholder: "Last Name",
                      inputType: InputType.text,
                      className: "tw-content-end tw-col-[2] tw-row-[1]",
                      validation: z
                        .string()
                        .min(2, "Must be at least 2 characters")
                        .regex(/^[a-zA-Z]+$/, "Can only contain letters"),
                    },
                    {
                      key: "email",
                      label: "Your Email",
                      placeholder: "Your Email",
                      inputType: InputType.text,
                      className: "tw-content-end tw-col-[1/span_2] tw-row-[2]",
                      validation: z.string().email("Invalid email"),
                    },
                    {
                      key: "interest",
                      label: "What are you interested in?",
                      placeholder: "Select your interest",
                      inputType: InputType.select,
                      className: "tw-content-end tw-col-[1] tw-row-[3]",
                      attributes: {
                        items: [
                          {
                            label: "Web Development",
                            value: "web-development",
                          },
                          {
                            label: "Mobile Development",
                            value: "mobile-development",
                          },
                          { label: "UI/UX Design", value: "ui-ux-design" },
                          {
                            label: "Digital Marketing",
                            value: "digital-marketing",
                          },
                          {
                            label: "Other",
                            value: "other",
                          },
                        ],
                      },
                      validation: z.string().min(1, "Please select an option."),
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
                          {
                            label: "More than $10000",
                            value: "more-than-10000",
                          },
                        ],
                      },
                      validation: z.string().min(1, "Please select an option."),
                    },
                    {
                      key: "textarea",
                      label: "Talk about your project",
                      placeholder: "Tell us more about your project",
                      inputType: InputType.textarea,
                      className: "tw-content-end tw-col-[1/span_2] tw-row-[4]",
                      validation: z
                        .string()
                        .min(10, "Bio must be at least 10 characters"),
                    },
                  ]}
                  onSubmit={(values: Record<string, string>) => {
                    onSubmit(values);
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactPopup;
