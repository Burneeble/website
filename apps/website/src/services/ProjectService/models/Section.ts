import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ImageLayoutModel } from "./ImageLayoutModel";

export interface ISectionModel {
  slug: string;
  title: string;
  text: string;
  imageLayout: ImageLayoutModel;
}

@JsonObject()
export class SectionModel implements ISectionModel {
  @JsonProperty()
  slug: string;

  @JsonProperty()
  title: string;

  @JsonProperty()
  text: string;

  @JsonProperty()
  imageLayout: ImageLayoutModel;

  constructor(obj?: Partial<ISectionModel>) {
    this.slug = obj?.slug ?? "";
    this.title = obj?.title ?? "";
    this.text = obj?.text ?? "";
    this.imageLayout = obj?.imageLayout || new ImageLayoutModel();
  }
}
