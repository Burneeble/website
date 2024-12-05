"use client";

import { SkillServiceProviderProps } from "./SkillService.types";
import { skillServiceContext } from "./SkillServiceContext";

const SkillServiceProvider = (props: SkillServiceProviderProps) => {
  return (
    <skillServiceContext.Provider value={{}}>
      {props.children}
    </skillServiceContext.Provider>
  );
};

export default SkillServiceProvider;
