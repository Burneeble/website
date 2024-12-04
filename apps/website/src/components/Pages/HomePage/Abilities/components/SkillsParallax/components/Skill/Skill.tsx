"use client";

import { Label, useClientInfoService } from "@burneeble/ui-components";
import { SkillProps } from "./Skill.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const Skill = (props: SkillProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  //Methods
  const getLabelSize = () => {
    switch (screen) {
      case "sm":
        return "sm";
      case "md":
        return "default";
      default:
        return "lg";
    }
  };

  return (
    <div className="skill tw-flex tw-flex-col tw-gap-[10px]">
      <h3
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
      </h3>
      <div className="categories tw-flex tw-flex-wrap tw-gap-[10px]">
        {props.categories.map((category, index) => {
          return <Label key={index} text={category} size={getLabelSize()} />;
        })}
      </div>
    </div>
  );
};

export default Skill;
