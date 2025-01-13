"use client";

import { createContext } from "react";
import { SkillModel } from "./models";

export interface SkillServiceContent {
  getSkills: () => Promise<Array<SkillModel>>;
}

export const skillServiceContext = createContext<SkillServiceContent>({
  getSkills: async () => [],
});
