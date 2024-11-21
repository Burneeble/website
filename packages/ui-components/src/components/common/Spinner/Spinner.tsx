import React from "react";
import { SpinnerProps, spinnerVariants } from "./Spinner.types";

const Spinner = (props: SpinnerProps) => {
  return <span className={spinnerVariants({ size: props.size })}></span>;
};

export default Spinner;
