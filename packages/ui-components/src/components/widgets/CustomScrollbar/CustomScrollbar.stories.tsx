import { StoryObj, Meta } from "@storybook/react";
import CustomScrollbar from "./CustomScrollbar";
import { CustomScrollbarProps } from "./CustomScrollbar.types";
import React from "react";

export default {
  title: "burneeble-website-components/widget/CustomScrollbar",
  component: CustomScrollbar,
} as Meta<typeof CustomScrollbar>;

type Story = StoryObj<CustomScrollbarProps>;

export const simpleCustomScrollbar: Story = {
  args: {
    children: (
      <div
        className="tw-h-[10rem] tw-w-[200vw]"
        style={{ border: "1px solid red" }}
      ></div>
    ),
  },
  render: (props) => {
    return (
      <div className="tw-mx-auto tw-flex tw-h-[20rem] tw-w-[60rem] tw-justify-center">
        <CustomScrollbar {...props} />
      </div>
    );
  },
};
