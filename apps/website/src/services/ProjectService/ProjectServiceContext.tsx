"use client";

import { createContext } from "react";
import { ProjectModel } from "./models";

export interface ProjectServiceContent {
  getProject: (id: string) => Promise<ProjectModel | null>;
}

export const projectServiceContext = createContext<ProjectServiceContent>({
  getProject: async () => null,
});
