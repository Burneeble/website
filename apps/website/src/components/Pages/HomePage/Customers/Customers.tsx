"use client";

import { CustomersProps } from "./Customers.types";

const Customers = (props: CustomersProps) => {
  return (
    <section className="customers">
      <div
        className="tw-h-[10rem] tw-w-[200vw]"
        style={{ border: "1px solid red" }}
      ></div>
    </section>
  );
};

export default Customers;
