"use client";

import { SkillModel } from "./models";
import { SkillService } from "./SkillService";
import { SkillServiceProviderProps } from "./SkillService.types";
import { skillServiceContext } from "./SkillServiceContext";

const SkillServiceProvider = (props: SkillServiceProviderProps) => {
  //Methods
  const getSkills = async (): Promise<Array<SkillModel>> => {
    return await SkillService.instance.getSkills();
  };

  return (
    <skillServiceContext.Provider value={{ getSkills }}>
      {props.children}
    </skillServiceContext.Provider>
  );
};

export default SkillServiceProvider;
