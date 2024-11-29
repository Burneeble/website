"use client";

import { Bars } from "@burneeble/ui-components";
import Layout from "./components/Layout";
import { SectionProps } from "./Section.types";

const Section = (props: SectionProps) => {
  return (
    <>
      <section
        className={`
          section cs-section-structure tw-flex tw-items-center tw-justify-center
        `}
      >
        <Layout {...props} />
      </section>
      {props.enableBars && <Bars />}
    </>
  );
};

export default Section;
