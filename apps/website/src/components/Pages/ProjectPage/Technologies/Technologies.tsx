import { Technology } from "./components";
import { TechnologiesProps } from "./Technologies.types";

const Technologies = (props: TechnologiesProps) => {
  return (
    <section
      className={`
        technologies-section cs-section-structure
        tw-bg-[radial-gradient(circle,_rgba(255,92,1,0.23)_4px,_transparent_4px)]
        tw-bg-center tw-flex tw-items-center tw-justify-center tw-min-h-0
        tw-max-w-full

        xl:tw-py-[100px] xl:tw-px-[103px]
      `}
    >
      <div
        className={`
          content tw-flex tw-flex-col tw-items-center tw-justify-center
          tw-gap-[10px]
          tw-bg-[radial-gradient(rgba(255,92,1,0.5)_0%,transparent_80%)]
        `}
      >
        <h2 className="tw-text-center">
          <span className={`cs-text-color-primary-gradient`}>Technologies</span>
          <span> Used.</span>
        </h2>
        <div
          className={`
            technologies tw-flex tw-flex-wrap tw-items-center tw-justify-center
            tw-gap-[20px] tw-relative
          `}
        >
          {props.technologies.map((technology, i) => {
            return <Technology key={i} {...technology} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
