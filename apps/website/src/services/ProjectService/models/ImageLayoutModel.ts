import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ScreenImagesLayoutModel } from "./ScreenImageLayoutModel";

export interface IImageLayout {
  slug: string;
  imagesLayoutSm: ScreenImagesLayoutModel;
  imagesLayoutMd: ScreenImagesLayoutModel;
  imagesLayoutXl: ScreenImagesLayoutModel;
}

@JsonObject()
export class ImageLayoutModel implements IImageLayout {
  @JsonProperty()
  slug: string;

  @JsonProperty()
  imagesLayoutSm: ScreenImagesLayoutModel;

  @JsonProperty()
  imagesLayoutMd: ScreenImagesLayoutModel;

  @JsonProperty()
  imagesLayoutXl: ScreenImagesLayoutModel;

  constructor(obj?: Partial<IImageLayout>) {
    this.slug = obj?.slug || "";
    this.imagesLayoutSm = obj?.imagesLayoutSm || new ScreenImagesLayoutModel();
    this.imagesLayoutMd = obj?.imagesLayoutMd || new ScreenImagesLayoutModel();
    this.imagesLayoutXl = obj?.imagesLayoutXl || new ScreenImagesLayoutModel();
  }
}
