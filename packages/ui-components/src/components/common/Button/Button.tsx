import React from "react";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return <button className="button bg-red-400">{props.text}</button>;
};

export default Button;
