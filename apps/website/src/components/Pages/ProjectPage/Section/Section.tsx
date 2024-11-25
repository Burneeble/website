"use client";

import Layout from "./components/Layout";
import { SectionProps } from "./Section.types";

const Section = (props: SectionProps) => {
  //Methods
  const getLayout = () => {
    switch (props.layoutType) {
      default:
        return <Layout imageLayoutType={0} />;
    }
  };

  return (
    <section className="section cs-section-structure">{getLayout()}</section>
  );
};

export default Section;
