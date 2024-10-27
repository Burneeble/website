// singleton of ProjectService class

import { GraphQLService } from "../GraphQLService";
import { GET_PROJECT_QUERY } from "./queries";
import { IProjectModel, ProjectCategory, ProjectModel } from "./models";
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
      category:
        // @ts-ignore
        ProjectCategory[
          data.projectBy?.projectFields?.category?.edges[0].node.name || "Dapp"
        ],
    };

    const project =
      serializer.deserializeObject<ProjectModel>(projectInfo, ProjectModel) ||
      null;

    return project;
  }
}
