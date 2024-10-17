"use client";

import { useContext } from "react";
import { projectServiceContext } from "./ProjectServiceContext";

export const useProjectService = () => {
  const context = useContext(projectServiceContext);

  if (!context) {
    throw new Error(
      "`useProjectService` must be used within a `ProjectServiceProvider`"
    );
  }

  return context;
};
