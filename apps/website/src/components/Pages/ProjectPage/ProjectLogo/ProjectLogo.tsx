import { ProjectLogoProps } from "./ProjectLogo.types";

const ProjectLogo = (props: ProjectLogoProps) => {
  return (
    <section
      className={`
        cs-section-structure tw-flex tw-flex-col tw-justify-center
        tw-items-center tw-gap-[10px] tw-max-w-full

        lg:tw-h-[597px] lg:tw-min-h-0
      `}
      style={{
        background: `linear-gradient(0deg, ${props.mainColor} 60%, rgba(0, 0, 0, 0) 100%)`,
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
