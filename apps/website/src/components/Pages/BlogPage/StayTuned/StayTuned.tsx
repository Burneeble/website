"use client";

import {
  Form,
  InputType,
  NotificationHandler,
  Spinner,
  useClientInfoService,
} from "@burneeble/ui-components";
import { StayTunedProps } from "./StayTuned.types";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { z } from "zod";

const StayTuned = (props: StayTunedProps) => {
  //States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //Hooks
  const { screen } = useClientInfoService();

  //Methods
  const onSubmit = async (values: Record<string, string>) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("your-name", `${values.firstName} ${values.lastName}`);
      formData.append("your-subject", "Newsletter Subscription");
      formData.append("your-email", values.yourEmail);
      formData.append("_wpcf7_unit_tag", "wpcf7-f20-o1");

      await fetch(
        `https://burneeble.com/wp-json/contact-form-7/v1/contact-forms/632/feedback`,
        {
          method: "POST",
          body: formData,
        }
      );

      setIsSubmitted(true);
      // NotificationHandler.instance.success("Form submitted successfully!");
    } catch (err) {
      console.log(err);
      NotificationHandler.instance.error(
        "An error occurred while submitting the form. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  }, [isSubmitted]);

  return (
    <section
      className={`
        stay-tuned cs-website-vertical-padding tw-relative tw-flex tw-flex-col
        cs-gap-between-content tw-items-center tw-justify-center
      `}
    >
      <div
        className={`
          shape tw-absolute tw-left-1/2 tw-top-1/2 tw-h-[180px] tw-w-screen
          -tw-translate-x-1/2 -tw-translate-y-1/2 tw-bg-gradient-to-b
          primary-gradient
        `}
      />
      <div
        className={`
          content no-scrollbar tw-relative tw-z-[2] tw-inline-flex tw-h-fit
          tw-max-h-[80%] tw-w-[790px] tw-max-w-full tw-flex-col tw-items-center
          tw-justify-start tw-gap-5 tw-overflow-scroll tw-rounded-lg tw-border
          tw-border-[#483a32] tw-bg-gradient-to-b tw-p-5
          secondary-gradient-to-custom
          tw-shadow-[0_0_100px_0px_rgba(242,163,7,.3)]
        `}
      >
        {isSubmitting && (
          <div
            className={`
              tw-absolute loading-screen tw-left-1/2 tw-top-1/2 tw-z-[25]
              tw-flex tw-h-[calc(100%+2.50rem)] tw-w-[calc(100%+2.50rem)]
              -tw-translate-x-1/2 -tw-translate-y-1/2 tw-items-center
              tw-justify-center tw-bg-[rgba(0,0,0,.6)]
            `}
          >
            <Spinner size="default" />
          </div>
        )}
        <h2 className="title tw-text-center">Stay Tuned!</h2>
        <p className="text p-small tw-text-center">
          Stay up to date with new articles and videos to learn more about
          Development with AI, and get{" "}
          <strong>first access to special courses and content</strong>.
        </p>
        <Form
          className={cn(
            !["sm", "md", "lg"].includes(screen) &&
              `
                tw-grid tw-grid-cols-2 tw-grid-rows-auto tw-gap-x-5 tw-gap-y-2
                tw-space-y-0
              `
          )}
          fields={[
            {
              key: "firstName",
              label: "",
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
              label: "",
              placeholder: "Last Name",
              inputType: InputType.text,
              className: "tw-content-end tw-col-[2] tw-row-[1]",
              validation: z
                .string()
                .min(2, "Must be at least 2 characters")
                .regex(/^[a-zA-Z]+$/, "Can only contain letters"),
            },
            {
              key: "yourEmail",
              label: "",
              placeholder: "Your Email",
              inputType: InputType.text,
              className: "tw-content-end tw-col-[1/span_2] tw-row-[2]",
              validation: z.string().email("Invalid email"),
            },
          ]}
          onSubmit={onSubmit}
          showSuccessButton={isSubmitted}
        />
      </div>
    </section>
  );
};

export default StayTuned;
