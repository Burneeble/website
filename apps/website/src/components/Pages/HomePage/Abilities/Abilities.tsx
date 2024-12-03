import { AbilitiesProps } from "./Abilities.types";
import { SkillsParallax } from "./components";

const Abilities = (props: AbilitiesProps) => {
  return (
    <section className="abilities-section cs-section-structure tw-relative">
      <div
        className={`
          tw-w-[700px] tw-h-[700px]
          tw-bg-[radial-gradient(circle,var(--primary-light)_0%,_rgba(0,0,0,0)_70%)]
          tw-rounded-full tw-blur-[100px] tw-opacity-[.5] tw-absolute tw-top-0
          tw-left-0 -tw-translate-x-1/2
        `}
      />
      <SkillsParallax />
    </section>
  );
};

export default Abilities;
