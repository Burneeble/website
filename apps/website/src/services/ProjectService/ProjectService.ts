// singleton of ProjectService class

import { GraphQLService } from "../GraphQLService";
import {
  GET_CATEGORIES_QUERY,
  GET_PROJECT_QUERY,
  GET_PROJECTS_QUERY,
} from "./queries";
import { IProjectModel, ProjectModel } from "./models";
import { JsonSerializer } from "typescript-json-serializer";

const serializer = new JsonSerializer();
export class ProjectService {
  private static _instance: ProjectService;

  private constructor() {}

  public static get instance(): ProjectService {
    if (!this._instance) {
      this._instance = new ProjectService();
    }

    return this._instance;
  }

  public async getProject(id: string): Promise<ProjectModel | null> {
    const { data } = await GraphQLService.instance.client.query({
      query: GET_PROJECT_QUERY,
      variables: { id },
    });

    if (!data) return null;

    const projectInfo: IProjectModel = {
      title: data.projectBy?.title || "",
      description: data.projectBy?.projectFields?.description || "",
      projectUrl: data.projectBy?.projectFields?.projectUrl || "",
      thumbnailUrl:
        data.projectBy?.projectFields?.thumbnail?.node.sourceUrl || "",
      categories: data.projectBy?.projectFields?.category?.edges
        .map((c) => c.node.name)
        .filter((c) => {
          return typeof c === "string";
        }) || ["Dapp"],
    };

    const project =
      serializer.deserializeObject<ProjectModel>(projectInfo, ProjectModel) ||
      null;

    return project;
  }

  public async getProjects(): Promise<Array<ProjectModel>> {
    const { data } = await GraphQLService.instance.client.query({
      query: GET_PROJECTS_QUERY,
    });

    if (!data) return [];

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

  public async getCategories(): Promise<Array<string>> {
    const { data } = await GraphQLService.instance.client.query({
      query: GET_CATEGORIES_QUERY,
    });

    if (!data) return [];

    const categories: string[] = data.projectCategories
      ? data.projectCategories?.edges
          .map((edge) => {
            return edge.node.name || "";
          })
          .filter((c) => c !== "")
      : [];

    return categories;
  }
}
