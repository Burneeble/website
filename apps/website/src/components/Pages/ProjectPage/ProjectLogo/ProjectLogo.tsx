import { ProjectLogoProps } from "./ProjectLogo.types";

const ProjectLogo = (props: ProjectLogoProps) => {
  //Methods

  const adjustRGBColor = (inputColor: string): string => {
    const rgbRegex =
      /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(?:,\s*(0|1|0?\.\d+))?\)$/;
    const match = inputColor.match(rgbRegex);
    if (!match) {
      throw new Error("Invalid input." + props.mainColor);
    }

    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);

    const adjustValue = (value: number, adjustment: number): number => {
      return Math.max(0, Math.min(255, value + adjustment));
    };

    const newR = adjustValue(r, 7);
    const newG = adjustValue(g, -23);
    const newB = adjustValue(b, -18);

    return `rgb(${newR}, ${newG}, ${newB})`;
  };

  return (
    <section
      className={`
        cs-section-structure tw-flex tw-h-[688px] !tw-min-h-[unset]
        tw-max-w-full tw-flex-col tw-items-center tw-justify-center
        tw-gap-[10px]

        lg:tw-h-[597px] lg:tw-min-h-0
      `}
      style={{
        background: `linear-gradient(180deg, #000000 10%, rgba(102, 102, 102, 0) 50%), linear-gradient(180deg, ${
          props.mainColor
        } 42.6%, ${adjustRGBColor(props.mainColor)} 100%)`,
      }}
    >
      <img
        className={`
          tw-w-[68px]

          md:tw-w-[93px]
        `}
        src={props.favicon}
      />
      <h1>{props.title}</h1>
    </section>
  );
};

export default ProjectLogo;
