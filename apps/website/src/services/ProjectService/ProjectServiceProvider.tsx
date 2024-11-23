"use client";

import { ProjectModel } from "./models";
import { ProjectService } from "./ProjectService";
import { ProjectServiceProviderProps } from "./ProjectService.types";
import { projectServiceContext } from "./ProjectServiceContext";

const ProjectServiceProvider = (props: ProjectServiceProviderProps) => {
  //Methods
  const getProject = async (id: string): Promise<ProjectModel | null> => {
    return await ProjectService.instance.getProject(id);
  };

  const getProjects = async (
    categories?: string[]
  ): Promise<Array<ProjectModel>> => {
    return await ProjectService.instance.getProjects(categories);
  };

  const getCategories = async (): Promise<Array<string>> => {
    return await ProjectService.instance.getCategories();
  };

  return (
    <projectServiceContext.Provider
      value={{ getProject, getProjects, getCategories }}
    >
      {props.children}
    </projectServiceContext.Provider>
  );
};

export default ProjectServiceProvider;
