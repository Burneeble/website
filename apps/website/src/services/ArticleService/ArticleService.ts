import { GraphQLService } from "../GraphQLService";
import { ArticleModel } from "./models";
import { GET_ARTICLES_QUERY_WITH_LIMIT } from "./queries";

export class ArticleService {
  private static _instance: ArticleService;

  private constructor() {}

  public static get instance(): ArticleService {
    if (!this._instance) {
      this._instance = new ArticleService();
    }
    return this._instance;
  }

  public async getArticlesWithLimit(limit: number): Promise<ArticleModel[]> {
    const { data } = await GraphQLService.instance.client.query({
      query: GET_ARTICLES_QUERY_WITH_LIMIT,
      variables: { limit },
    });

    if (!data) return [];

    return (data.posts?.nodes || []).map((node: any) => {
      const article = new ArticleModel();
      article.title = node.title || "";
      article.content = node.content || "";
      article.slug = node.slug || "";
      article.categories = node.categories.nodes.map((category: any) => {
        return {
          name: category.name || "",
          slug: category.slug || "",
        };
      });
      article.thumbnail = node.featuredImage?.node.guid || "";

      return article;
    });
  }
}
