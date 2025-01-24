import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IArticleModel {
  title: string;
  content: string;
  slug: string;
  categories: {
    name: string;
    slug: string;
  }[];
  thumbnail: string;
  date?: string;
  description?: string;
}

@JsonObject()
export class ArticleModel implements IArticleModel {
  @JsonProperty()
  title: string;

  @JsonProperty()
  content: string;

  @JsonProperty()
  slug: string;

  @JsonProperty()
  categories: {
    name: string;
    slug: string;
  }[];

  @JsonProperty()
  thumbnail: string;

  @JsonProperty()
  date?: string;

  @JsonProperty()
  description?: string;

  constructor(obj?: Partial<IArticleModel>) {
    this.slug = obj?.slug || "";
    this.title = obj?.title || "";
    this.content = obj?.content || "";
    this.categories = obj?.categories || [];
    this.thumbnail = obj?.thumbnail || "";
    this.date = obj?.date || "";
    this.description = obj?.description || "";
  }
}
