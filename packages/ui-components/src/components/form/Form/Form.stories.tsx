import { StoryObj, Meta } from "@storybook/react";
import Form from "./Form";
import { ComponentProps } from "react";
import React from "react";
import { InputType } from "./Form.types";

export default {
  title: "burneeble-website-components/form/Form",
  component: Form,
} as Meta<typeof Form>;

type Story = StoryObj<ComponentProps<typeof Form>>;

export const baseForm: Story = {
  render: () => {
    return (
      <Form
        fields={[
          {
            key: "your-name",
            label: "Name",
            placeholder: "Your name...",
            description: "This is your name.",
            inputType: InputType.text,
          },
          {
            key: "your-last-name",
            label: "Last name",
            placeholder: "Your last name...",
            description: "This is your lastname.",
            disabled: true,
            inputType: InputType.text,
          },
          {
            key: "your-bio",
            label: "Bio",
            placeholder: "Write something about you...",
            description: "This is your bio.",
            inputType: InputType.textarea,
          },
          {
            key: "terms-codition",
            label: "Terms",
            // description: "This is your bio.",
            inputType: InputType.checkbox,
          },
        ]}
        onSubmit={(values) => {
          console.log(values);
        }}
      />
    );
  },
};
