import React from "react";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return <button>{props.text}</button>;
};

export default Button;
