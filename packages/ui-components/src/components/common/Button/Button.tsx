import React from "react";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return (
    <>
      <button className="button tw-bg-button-primary">{props.text}</button>
    </>
  );
};

export default Button;
