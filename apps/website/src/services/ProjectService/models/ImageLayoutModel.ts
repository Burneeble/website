import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { ScreenImagesLayoutModel } from "./ScreenImageLayoutModel";

export interface IImageLayout {
  slug: string;
  imagesLayoutSm: ScreenImagesLayoutModel;
  imagesLayoutMd: ScreenImagesLayoutModel;
  imagesLayoutLg: ScreenImagesLayoutModel;
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
  imagesLayoutLg: ScreenImagesLayoutModel;

  constructor(obj?: Partial<IImageLayout>) {
    this.slug = obj?.slug || "";
    this.imagesLayoutSm = obj?.imagesLayoutSm || new ScreenImagesLayoutModel();
    this.imagesLayoutMd = obj?.imagesLayoutMd || new ScreenImagesLayoutModel();
    this.imagesLayoutLg = obj?.imagesLayoutLg || new ScreenImagesLayoutModel();
  }
}
