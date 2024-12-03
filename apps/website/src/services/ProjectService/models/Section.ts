import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ImageLayoutModel } from "./ImageLayoutModel";

export interface ISectionModel {
  layout: string;
  title: string;
  text: string;
  imageLayout: ImageLayoutModel;
  buttonText?: string;
  buttonUrl?: string;
}

@JsonObject()
export class SectionModel implements ISectionModel {
  @JsonProperty()
  layout: string;

  @JsonProperty()
  title: string;

  @JsonProperty()
  text: string;

  @JsonProperty()
  imageLayout: ImageLayoutModel;

  @JsonProperty()
  buttonText?: string;

  @JsonProperty()
  buttonUrl?: string;

  constructor(obj?: Partial<ISectionModel>) {
    this.layout = obj?.layout ?? "";
    this.title = obj?.title ?? "";
    this.text = obj?.text ?? "";
    this.imageLayout = obj?.imageLayout || new ImageLayoutModel();
    this.buttonText = obj?.buttonText;
    this.buttonUrl = obj?.buttonUrl;
  }
}
