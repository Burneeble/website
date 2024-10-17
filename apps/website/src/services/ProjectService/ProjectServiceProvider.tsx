"use client";

import { ProjectService } from "./ProjectService";
import { ProjectServiceProviderProps } from "./ProjectService.types";
import { projectServiceContext } from "./ProjectServiceContext";

const ProjectServiceProvider = (props: ProjectServiceProviderProps) => {
  const getProject = async (id: string) => {
    return await ProjectService.instance.getProject(id);
  };

  return (
    <projectServiceContext.Provider value={{ getProject }}>
      {props.children}
    </projectServiceContext.Provider>
  );
};

export default ProjectServiceProvider;
