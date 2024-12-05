import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface ISkillModel {
  title: string;
  description: string;
  extendedTitle: string;
  labels: string[];
}

@JsonObject()
export class SkillModel implements ISkillModel {
  @JsonProperty()
  title: string;

  @JsonProperty()
  description: string;

  @JsonProperty()
  extendedTitle: string;

  @JsonProperty()
  labels: string[];

  constructor(obj?: Partial<ISkillModel>) {
    this.title = obj?.title ?? "";
    this.description = obj?.description ?? "";
    this.extendedTitle = obj?.extendedTitle ?? "";
    this.labels = obj?.labels ?? [];
  }
}
