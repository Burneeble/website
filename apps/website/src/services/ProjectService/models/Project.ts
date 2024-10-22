import { JsonObject, JsonProperty } from "typescript-json-serializer";

export enum ProjectCategory {
  Dapp = "Dapp",
}

export interface IProjectModel {
  title: string;
  description: string;
  projectUrl: string;
  thumbnailUrl: string;
  category: ProjectCategory;
}

@JsonObject()
export class ProjectModel implements IProjectModel {
  @JsonProperty()
  title: string;

  @JsonProperty()
  description: string;

  @JsonProperty()
  projectUrl: string;

  @JsonProperty()
  thumbnailUrl: string;

  @JsonProperty()
  category: ProjectCategory;

  constructor(obj?: Partial<IProjectModel>) {
    this.title = obj?.title ?? "";
    this.description = obj?.description ?? "";
    this.projectUrl = obj?.projectUrl ?? "";
    this.thumbnailUrl = obj?.thumbnailUrl ?? "";
    this.category = obj?.category ?? ProjectCategory.Dapp;
  }
}
