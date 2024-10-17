// singleton of ProjectService class

import { GraphQLService } from "../GraphQLService";
import { GET_PROJECT_QUERY } from "./queries";
import { ProjectModel } from "./models";
import { z } from "zod";

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

    const projectSchema = z.object({
      id: z.string(),
      name: z.string(),
      description: z.string().nullable(),
    });

    try {
      const project = projectSchema.parse(data.projectBy);
      //   @ts-ignore
      return project as ProjectModel;
    } catch (e) {
      console.error("Failed to parse project data", e);
      return null;
    }
  }
}
