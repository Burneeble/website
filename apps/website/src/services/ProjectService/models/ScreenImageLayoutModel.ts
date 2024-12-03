import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IScreenImageLayoutModel {
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

@JsonObject()
export class ScreenImagesLayoutModel implements IScreenImageLayoutModel {
  @JsonProperty()
  image1: string;

  @JsonProperty()
  image2?: string;

  @JsonProperty()
  image3?: string;

  @JsonProperty()
  image4?: string;

  constructor(obj?: Partial<IScreenImageLayoutModel>) {
    this.image1 = obj?.image1 ?? "";
    this.image2 = obj?.image2;
    this.image3 = obj?.image3;
    this.image4 = obj?.image4;
  }
}
