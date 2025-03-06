import { StoryObj, Meta } from "@storybook/react";
import Form from "./Form";
import { ComponentProps } from "react";
import React from "react";
import { InputType } from "./Form.types";

import { z } from "zod";

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
            key: "first-name",
            label: "Name",
            placeholder: "Your name...",
            description: "This is your name.",
            inputType: InputType.text,
            validation: z
              .string()
              .min(2, "First Name must be at least 2 characters"),
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
            validation: z
              .string()
              .min(10, "Bio must be at least 10 characters")
              .max(20, "Bio must be at most 20 characters"),
          },
          {
            key: "terms-codition",
            label: "Terms",
            inputType: InputType.checkbox,
          },
          {
            key: "multiple-options",
            label: "choose one or more options",
            attributes: {
              items: [
                { label: "Option 1", value: "option-1" },
                { label: "Option 2", value: "option-2" },
                { label: "Option 3", value: "option-3" },
              ],
            },
            inputType: InputType.checkboxGroup,
          },
          {
            key: "option1-option2",
            label: "Options",
            attributes: {
              items: [
                { label: "Option 1", value: "option-1" },
                { label: "Option 2", value: "option-2" },
              ],
            },
            inputType: InputType.radioGroup,
          },
          {
            key: "languages",
            label: "Languages",
            attributes: {
              items: [
                { label: "Language 1", value: "language-1", disabled: true },
                { label: "Language 2", value: "language-2" },
              ],
            },
            inputType: InputType.select,
          },
        ]}
        onSubmit={(values) => {
          console.log(values);
        }}
        showSuccessButton={true}
      />
    );
  },
};
