import { StoryObj, Meta } from "@storybook/react";
import Popup from "./Popup";
import { PopupProps, PopupType } from "./Popup.types";
import React from "react";
import { Button } from "../../ui";
import { usePopup } from "./usePopup";

export default {
  title: "burneeble-website-components/widget/Popup",
  component: Popup,
} as Meta<typeof Popup>;

type Story = StoryObj<PopupProps>;

export const simplePopup: Story = {
  render: () => {
    //Hooks
    const logic = usePopup();

    return (
      <>
        <Popup logic={logic}>
          <div>Hello World</div>
        </Popup>
        <Button
          onClick={() => {
            logic.openPopup();
          }}
        >
          Open Popup
        </Button>
      </>
    );
  },
};

export const absolutePopup: Story = {
  render: () => {
    //Hooks
    const logic = usePopup();

    return (
      <>
        <div className="container tw-relative">
          <Button
            onClick={() => {
              logic.openPopup();
            }}
          >
            Open Popup
          </Button>
          <Popup
            logic={logic}
            type={PopupType.Absolute}
            className="tw-top-full tw-left-0"
          >
            <div>Hello World</div>
          </Popup>
        </div>
      </>
    );
  },
};

export const secondaryPopup: Story = {
  render: () => {
    //Hooks
    const logic = usePopup();

    return (
      <>
        <Popup logic={logic} variant="secondary">
          <div>Hello World</div>
        </Popup>
        <Button
          onClick={() => {
            logic.openPopup();
          }}
        >
          Open Popup
        </Button>
      </>
    );
  },
};
