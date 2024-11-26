import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ScreenImagesLayoutModel } from "./ScreenImageLayoutModel";

export interface IImageLayout {
  imagesLayoutSm: ScreenImagesLayoutModel;
  imagesLayoutMd: ScreenImagesLayoutModel;
  imagesLayoutLg: ScreenImagesLayoutModel;
}

@JsonObject()
export class ImageLayoutModel implements IImageLayout {
  @JsonProperty()
  imagesLayoutSm: ScreenImagesLayoutModel;

  @JsonProperty()
  imagesLayoutMd: ScreenImagesLayoutModel;

  @JsonProperty()
  imagesLayoutLg: ScreenImagesLayoutModel;

  constructor(obj?: Partial<IImageLayout>) {
    this.imagesLayoutSm = obj?.imagesLayoutSm || new ScreenImagesLayoutModel();
    this.imagesLayoutMd = obj?.imagesLayoutMd || new ScreenImagesLayoutModel();
    this.imagesLayoutLg = obj?.imagesLayoutLg || new ScreenImagesLayoutModel();
  }
}
