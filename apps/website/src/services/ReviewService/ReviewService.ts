import { JsonSerializer } from "typescript-json-serializer";
import { GraphQLService } from "../GraphQLService";
import { IReviewModel, ReviewModel } from "./models";
import { GET_REVIEWS_QUERY } from "./queries";

const serializer = new JsonSerializer();

export class ReviewService {
  private static _instance: ReviewService;

  private constructor() {}

  public static get instance(): ReviewService {
    if (!this._instance) {
      this._instance = new ReviewService();
    }

    return this._instance;
  }

  public async getReviews(): Promise<Array<ReviewModel>> {
    const { data } = await GraphQLService.instance.client.query({
      query: GET_REVIEWS_QUERY,
    });

    if (!data) return [];

    const reviewsInfo: IReviewModel[] = data.reviews
      ? data.reviews?.nodes.map((review) => {
          return {
            title: review.title || "",
            review: review.reviewFields?.review || "",
            username: review.reviewFields?.username || "",
            userAvatar: review.reviewFields?.userAvatar?.node.guid || "",
            countryCode: review.reviewFields?.countryCode || "US",
            projectUrl: review.reviewFields?.projectUrl || null,
          };
        })
      : [];

    const reviews = (serializer.deserializeObjectArray<ReviewModel>(
      reviewsInfo,
      ReviewModel
    ) || []) as ReviewModel[];

    return reviews;
  }
}
