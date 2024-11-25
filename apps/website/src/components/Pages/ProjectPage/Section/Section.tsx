"use client";

import Layout from "./components/Layout";
import { SectionProps } from "./Section.types";

const Section = (props: SectionProps) => {
  return (
    <section className="section cs-section-structure">
      <Layout {...props} />
    </section>
  );
};

export default Section;
