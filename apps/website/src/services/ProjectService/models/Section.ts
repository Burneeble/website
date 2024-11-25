import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface ISectionModel {
  slug: string;
  title: string;
  text: string;
}

@JsonObject()
export class SectionModel implements ISectionModel {
  @JsonProperty()
  slug: string;

  @JsonProperty()
  title: string;

  @JsonProperty()
  text: string;

  constructor(obj?: Partial<ISectionModel>) {
    this.slug = obj?.slug ?? "";
    this.title = obj?.title ?? "";
    this.text = obj?.text ?? "";
  }
}
