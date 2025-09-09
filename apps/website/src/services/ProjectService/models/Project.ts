import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { SectionModel } from "./Section";

export interface IProjectModel {
  title: string;
  description: string;
  projectUrl: string;
  thumbnailUrl: string;
  categories: string[];
  favicon?: string;
  mainColor?: string;
  backgroundVideo?: string;
  technologies?: {
    slug: string;
    name: string;
    description: string;
  }[];
  sections?: SectionModel[];
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
  categories: string[];

  @JsonProperty()
  favicon?: string;

  @JsonProperty()
  mainColor?: string;

  @JsonProperty()
  backgroundVideo?: string;

  @JsonProperty()
  technologies?: {
    slug: string;
    name: string;
    description: string;
  }[];

  @JsonProperty()
  sections?: SectionModel[];

  constructor(obj?: Partial<IProjectModel>) {
    this.title = obj?.title ?? "";
    this.description = obj?.description ?? "";
    this.projectUrl = obj?.projectUrl ?? "";
    this.thumbnailUrl = obj?.thumbnailUrl ?? "";
    this.categories = obj?.categories ?? [];
    this.favicon = obj?.favicon;
    this.mainColor = obj?.mainColor;
    this.backgroundVideo = obj?.backgroundVideo;
    this.technologies = obj?.technologies;
    this.sections = obj?.sections;
  }
}
