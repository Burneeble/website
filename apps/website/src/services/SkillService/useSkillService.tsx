"use client";

import { useContext } from "react";
import { skillServiceContext } from "./SkillServiceContext";

export const useSkillService = () => {
  const context = useContext(skillServiceContext);

  if (!context) {
    throw new Error(
      "`useSkillService` must be used within a `SkillServiceProvider`"
    );
  }

  return context;
};
