import React from "react";
import { SpinnerProps, spinnerVariants } from "./Spinner.types";
import { cn } from "@/lib/utils";

const Spinner = (props: SpinnerProps) => {
  return <span className={cn(spinnerVariants({ size: props.size }))}></span>;
};

export default Spinner;
