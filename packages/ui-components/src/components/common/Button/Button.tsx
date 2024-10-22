import React from "react";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return (
    <>
      <button className="button tw-bg-button-primary">{props.text}</button>
      <button className="button tw-bg-button-warning">{props.text}</button>
      <p className="tw-text-headings">ciao</p>
      <p className="tw-text-body">ciao</p>
    </>
  );
};

export default Button;
