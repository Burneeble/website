"use client";

import { createContext } from "react";
import { ProjectModel } from "./models";

export interface ProjectServiceContent {
  getProject(id: string): Promise<ProjectModel | null>;
  getProjects(categories?: string[]): Promise<Array<ProjectModel>>;
  getCategories(): Promise<Array<string>>;
}

export const projectServiceContext = createContext<ProjectServiceContent>({
  getProject: async () => null,
  getProjects: async () => [],
  getCategories: async () => [],
});
