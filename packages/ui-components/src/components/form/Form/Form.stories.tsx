import { StoryObj, Meta } from "@storybook/react";
import Form from "./Form";
import { ComponentProps } from "react";
import React from "react";

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
            placeholder: "your name...",
            description: "This is your name.",
          },
          {
            key: "your-email",
            label: "Email",
            placeholder: "your email...",
            description: "This is your email",
          },
          {
            key: "your-subject",
            label: "Subject",
            placeholder: "your subject...",
            description: "This is your subject.",
          },
          {
            key: "your-message",
            label: "Message",
            placeholder: "your message...",
            description: "This is your message",
          },
        ]}
        onSubmit={(values) => {
          console.log(values);
        }}
      />
    );
  },
};
