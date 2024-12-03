"use client";

import { Label } from "@burneeble/ui-components";
import { SkillProps } from "./Skill.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const Skill = (props: SkillProps) => {
  return (
    <div className="skill tw-flex tw-flex-col tw-gap-[10px]">
      <h2
        className={`
          title tw-text-headings tw-font-bowlby-one tw-flex tw-items-center
          tw-justify-start tw-gap-[.5rem]
        `}
      >
        <FontAwesomeIcon
          icon={faFire}
          className={`fontawesome-gradient-icon tw-text-3xl`}
        />
        {props.title}
      </h2>
      <div className="categories">
        {props.categories.map((category, index) => {
          return <Label key={index} text={category} />;
        })}
      </div>
    </div>
  );
};

export default Skill;
