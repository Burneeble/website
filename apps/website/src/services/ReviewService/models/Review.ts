import { JsonObject, JsonProperty } from "typescript-json-serializer";

export interface IReviewModel {
  title: string;
  review: string;
  username: string;
  userAvatar: string;
  countryCode: string;
  projectUrl: string | null;
}

@JsonObject()
export class ReviewModel implements IReviewModel {
  @JsonProperty()
  title: string;

  @JsonProperty()
  review: string;

  @JsonProperty()
  username: string;

  @JsonProperty()
  userAvatar: string;

  @JsonProperty()
  countryCode: string;

  @JsonProperty()
  projectUrl: string | null;

  constructor(obj?: Partial<IReviewModel>) {
    this.title = obj?.title ?? "";
    this.review = obj?.review ?? "";
    this.username = obj?.username ?? "";
    this.userAvatar = obj?.userAvatar ?? "";
    this.countryCode = obj?.countryCode ?? "";
    this.projectUrl = obj?.projectUrl ?? null;
  }
}
