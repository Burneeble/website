import { ProjectLogoProps } from "./ProjectLogo.types";

const ProjectLogo = (props: ProjectLogoProps) => {
  //Methods

  const adjustRGBColor = (inputColor: string): string => {
    const rgbRegex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
    const match = inputColor.match(rgbRegex);

    if (!match) {
      throw new Error("Invalid input.");
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
        cs-section-structure tw-flex tw-flex-col tw-justify-center
        tw-items-center tw-gap-[10px] tw-max-w-full tw-h-[688px]
        !tw-min-h-[unset]

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