"use client";

import { Form } from "@burneeble/ui-components";
import axios from "axios";

const FormPage = () => {
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
      onSubmit={async (values) => {
        try {
          console.log("[form] values", values);

          const data = { ...values, _wpcf7_unit_tag: "wpcf7-f20-o1" };
          const formData = new FormData();

          Object.keys(data).forEach((key) => {
            // @ts-ignore
            formData.append(key, data[key]);
          });

          console.log("[form] formData", formData);

          await axios.post(
            `http://test01.local/wp-json/contact-form-7/v1/contact-forms/34/feedback`,
            formData
          );
        } catch (e) {
          console.log(e);
        }
      }}
    />
  );
};

export default FormPage;
