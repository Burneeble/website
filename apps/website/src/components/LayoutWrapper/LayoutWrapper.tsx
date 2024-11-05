"use client";

import { Navbar } from "@burneeble/ui-components";
import { LayoutWrapperProps } from "./LayoutWrapper.types";
import { ToastContainer } from "react-toastify";

const LayoutWrapper = (props: LayoutWrapperProps) => {
  return (
    <>
      <header>
        <Navbar
          logo={{
            svg: <></>,
            url: "",
          }}
          dropdowns={[]}
          links={[]}
        />
      </header>
      <main>hello{props.children}</main>
      <ToastContainer />
    </>
  );
};

export default LayoutWrapper;
