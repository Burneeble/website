"use client";

import {
  Form,
  InputType,
  useClientInfoService,
} from "@burneeble/ui-components";
import { StayTunedProps } from "./StayTuned.types";
import { cn } from "@/lib/utils";

const StayTuned = (props: StayTunedProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <section
      className={`
        stay-tuned cs-website-vertical-padding tw-flex tw-flex-col
        cs-gap-between-content tw-items-center tw-justify-center tw-min-h-screen
        tw-relative
      `}
    >
      <div
        className={`
          shape tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-y-1/2
          -tw-translate-x-1/2 tw-w-screen tw-h-[180px] tw-bg-gradient-to-b
          primary-gradient
        `}
      />
      <div
        className={`
          content no-scrollbar tw-h-fit tw-max-h-[80%] tw-p-5 tw-w-[790px]
          tw-overflow-scroll tw-max-w-[100%] tw-bg-gradient-to-b
          secondary-gradient-to-custom tw-rounded-lg tw-border
          tw-border-[#483a32] tw-flex-col tw-justify-start tw-items-center
          tw-gap-5 tw-inline-flex tw-z-[2]
          tw-shadow-[0_0_100px_0px_rgba(242,163,7,.3)]
        `}
      >
        <h2 className="title tw-text-center">Stay Tuned!</h2>
        <p className="text p-small tw-text-center">
          Stay up to date with new articles and videos to learn more about
          Development with AI, and get{" "}
          <strong>first access to special courses and content</strong>.
        </p>
        <Form
          className={cn(
            !["sm", "md"].includes(screen) &&
              `
                tw-grid tw-grid-cols-2 tw-grid-rows-auto tw-gap-x-5 tw-gap-y-2
                tw-space-y-0
              `
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
              key: "last",
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
          ]}
          onSubmit={async () => {}}
        />
      </div>
    </section>
  );
};

export default StayTuned;
