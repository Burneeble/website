"use client";

import { useQuery } from "@apollo/client";
import { IProjectModel, ProjectModel } from "./models";
import { ProjectService } from "./ProjectService";
import { ProjectServiceProviderProps } from "./ProjectService.types";
import { projectServiceContext } from "./ProjectServiceContext";
import { GET_PROJECTS_QUERY } from "./queries";
import { JsonSerializer } from "typescript-json-serializer";
import { useEffect } from "react";

const serializer = new JsonSerializer();

const ProjectServiceProvider = (props: ProjectServiceProviderProps) => {
  //Hooks
  const { data: init, fetchMore } = useQuery(GET_PROJECTS_QUERY, {
    variables: { limit: 1, offset: "0" },
  });

  //Methods
  const getProject = async (id: string): Promise<ProjectModel | null> => {
    return await ProjectService.instance.getProject(id);
  };

  const getProjects = async (
    categories?: string[],
    batchSize?: number,
    endCursor?: string
  ): Promise<Array<ProjectModel>> => {
    if (fetchMore) {
      const { data } = await fetchMore({
        variables: {
          categories,
          limit: batchSize,
          cursor: "0",
        },
      });

      console.log(data);

      const projectsInfo: IProjectModel[] | null = data.projects
        ? data.projects?.edges.map((edge) => {
            return {
              title: edge.node.title || "",
              description: edge.node.projectFields?.description || "",
              projectUrl: edge.node.projectFields?.projectUrl || "",
              thumbnailUrl: edge.node.projectFields?.thumbnail?.node.guid || "",
              categories: edge.node.projectFields?.category?.edges
                .map((c) => c.node.name)
                .filter((c) => {
                  return typeof c === "string";
                }) || ["Dapp"],
            };
          })
        : null;

      if (!projectsInfo) return [];

      const projects = (serializer.deserializeObjectArray<ProjectModel>(
        projectsInfo,
        ProjectModel
      ) || []) as Array<ProjectModel>;

      return projects;
    }
    return [];
  };

  const getCategories = async (): Promise<Array<string>> => {
    return await ProjectService.instance.getCategories();
  };

  useEffect(() => {
    console.log("INIT", init);
  }, [init]);

  return (
    <projectServiceContext.Provider
      value={{ getProject, getProjects, getCategories }}
    >
      {props.children}
    </projectServiceContext.Provider>
  );
};

export default ProjectServiceProvider;
