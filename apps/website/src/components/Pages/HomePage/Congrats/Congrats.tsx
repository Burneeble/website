"use client";

import { Button } from "@burneeble/ui-components";
import { CongratsProps } from "./Congrats.types";

const Congrats = (props: CongratsProps) => {
  return (
    <section className="congrats cs-section-structure tw-h-[314px] !tw-min-h-[unset] tw-flex-col tw-justify-center tw-items-center tw-gap-[10px] tw-flex">
      <div className="tw-self-stretch tw-text-center tw-font-bowlby-one tw-text-2xl">
        <p className="text-color-primary-gradient">
          Congrats,
          <br />
        </p>
        <p className="tw-text-headings">you reached the end.</p>
      </div>
      <p className="tw-self-stretch tw-text-center tw-text-body tw-text-xl tw-font-normal tw-font-inter tw-leading-[30px]">
        So...What are you going to do? We are available to work with you ;)
      </p>
      <Button size="lg">Start Building</Button>
    </section>
  );
};

export default Congrats;
