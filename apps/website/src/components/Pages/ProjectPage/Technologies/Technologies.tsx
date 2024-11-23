import { Technology } from "./components";
import { TechnologiesProps } from "./Technologies.types";

const Technologies = (props: TechnologiesProps) => {
  return (
    <section
      className={`
        technologies-section cs-section-structure
        tw-bg-[radial-gradient(circle,_#523424_4px,_transparent_4px)]
        tw-bg-center tw-flex tw-items-center tw-justify-center tw-min-h-0
        tw-max-w-full
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
            tw-gap-[20px]
          `}
        >
          {props.technologies.map((technology, i) => {
            return <Technology key={i} technology={technology} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
