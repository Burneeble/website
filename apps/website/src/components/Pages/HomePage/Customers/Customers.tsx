"use client";

import { CustomersProps } from "./Customers.types";
import { Scrollbars } from "react-custom-scrollbars-2";

const Customers = (props: CustomersProps) => {
  return (
    <section className="customers">
      <Scrollbars autoHide={false} style={{ width: "100vw", height: "30rem" }}>
        <div
          className="tw-h-[10rem] tw-w-[200vw]"
          style={{ border: "1px solid red" }}
        ></div>
      </Scrollbars>
    </section>
  );
};

export default Customers;
