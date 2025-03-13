import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface ICategoryModel {
  name: string;
  slug: string;
  description: string;
}

@JsonObject()
export class CategoryModel implements ICategoryModel {
  @JsonProperty()
  name: string;

  @JsonProperty()
  slug: string;

  @JsonProperty()
  description: string;

  constructor(obj?: Partial<ICategoryModel>) {
    this.slug = obj?.slug || "";
    this.name = obj?.name || "";
    this.description = obj?.description || "";
  }
}
