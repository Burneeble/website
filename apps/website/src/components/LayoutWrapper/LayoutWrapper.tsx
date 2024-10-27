"use client";

import { LayoutWrapperProps } from "./LayoutWrapper.types";
import { ToastContainer } from "react-toastify";

const LayoutWrapper = (props: LayoutWrapperProps) => {
  return (
    <>
      <header>{/* navbar */}</header>
      <main>{props.children}</main>

      <ToastContainer />
    </>
  );
};

export default LayoutWrapper;
