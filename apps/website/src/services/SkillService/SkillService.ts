import { JsonSerializer } from "typescript-json-serializer";
import { GraphQLService } from "../GraphQLService";
import { ISkillModel, SkillModel } from "./models";
import { GET_SKILLS_QUERY } from "./queries";

const serializer = new JsonSerializer();

export class SkillService {
  private static _instance: SkillService;

  private constructor() {}

  public static get instance(): SkillService {
    if (!this._instance) {
      this._instance = new SkillService();
    }

    return this._instance;
  }

  public async getSkills(): Promise<Array<SkillModel>> {
    const { data } = await GraphQLService.instance.client.query({
      query: GET_SKILLS_QUERY,
    });

    if (!data) return [];

    const skillsInfo: ISkillModel[] = data.skills
      ? data.skills?.nodes.map((review) => {
          return {
            title: review.title || "",
            sm: {
              description: review.skillFields?.descriptionSm || "",
              extendedTitle: review.skillFields?.extendedTitleSm || "",
              labels: review.skillFields?.labelsSm?.split("_") || [],
            },
            md: {
              description: review.skillFields?.descriptionMd || "",
              extendedTitle: review.skillFields?.extendedTitleMd || "",
              labels: review.skillFields?.labelsMd?.split("_") || [],
            },
            xl: {
              description: review.skillFields?.descriptionXl || "",
              extendedTitle: review.skillFields?.extendedTitleXl || "",
              labels: review.skillFields?.labelsXl?.split("_") || [],
            },
          };
        })
      : [];

    const skills = (serializer.deserializeObjectArray<SkillModel>(
      skillsInfo,
      SkillModel
    ) || []) as SkillModel[];

    return skills;
  }
}
