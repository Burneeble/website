"use client";

import { Bars, useClientInfoService } from "@burneeble/ui-components";
import Layout from "./components/Layout";
import { LayoutType, SectionProps } from "./Section.types";
import { cn } from "@/lib/utils";

const Section = (props: SectionProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  //Methods
  const getButtonSize = () => {
    switch (screen) {
      case "sm":
      case "md":
        return "default";
      default:
        return "lg";
    }
  };
  return (
    <>
      <section
        className={cn(
          `
            section cs-section-structure tw-flex tw-items-center
            tw-justify-center

            lg:tw-max-h-[100vh]
          `,
          [
            LayoutType.TextTopStartFullImageBottomCenter,
            LayoutType.TextTopCenterFullImageBottomCenter,
          ].includes(props.layoutType) && `!tw-pb-0`
        )}
      >
        <Layout buttonSize={getButtonSize()} {...props} />
      </section>
      {(Array.isArray(props.enableBars)
        ? !props.enableBars.includes(screen)
        : props.enableBars) && <Bars />}
    </>
  );
};

export default Section;