"use client";

import { Bars, useClientInfoService } from "@burneeble/ui-components";
import Layout from "./components/Layout";
import { SectionProps } from "./Section.types";

const Section = (props: SectionProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  //Methods
  const getButtonSize = () => {
    switch (screen) {
      case "sm":
        return "sm";
      case "md":
        return "default";
      default:
        return "lg";
    }
  };
  return (
    <>
      <section
        className={`
          section cs-section-structure tw-flex tw-items-center tw-justify-center
        `}
      >
        <Layout buttonSize={getButtonSize()} {...props} />
      </section>
      {props.enableBars && <Bars />}
    </>
  );
};

export default Section;
