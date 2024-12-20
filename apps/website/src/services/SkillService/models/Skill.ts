import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface ScreenSkill {
  description: string;
  extendedTitle: string;
  labels: string[];
}
export interface ISkillModel {
  title: string;
  sm: ScreenSkill;
  md: ScreenSkill;
  xl: ScreenSkill;
}

@JsonObject()
export class SkillModel implements ISkillModel {
  @JsonProperty()
  title: string;

  @JsonProperty()
  sm: ScreenSkill;

  @JsonProperty()
  md: ScreenSkill;

  @JsonProperty()
  xl: ScreenSkill;

  constructor(obj?: Partial<ISkillModel>) {
    this.title = obj?.title ?? "";
    this.sm = obj?.sm ?? { description: "", extendedTitle: "", labels: [] };
    this.md = obj?.md ?? { description: "", extendedTitle: "", labels: [] };
    this.xl = obj?.xl ?? { description: "", extendedTitle: "", labels: [] };
  }
}
