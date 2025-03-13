"use client";

import { Spinner } from "@burneeble/ui-components";
import React from "react";

export default function Loading() {
  return (
    <>
      <section
        className={`
          loading-section cs-section-structure tw-flex tw-justify-center
          tw-items-center
        `}
      >
        <Spinner></Spinner>
      </section>
    </>
  );
}
