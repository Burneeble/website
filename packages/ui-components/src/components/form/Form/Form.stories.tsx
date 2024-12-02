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
      />
    );
  },
};