import { JsonSerializer } from "typescript-json-serializer";
import { GraphQLService } from "../GraphQLService";
import {
  ArticleModel,
  CategoryModel,
  IArticleModel,
  ICategoryModel,
} from "./models";
import {
  GET_ARTICLE_QUERY,
  GET_ARTICLES_BY_CATEGORY_QUERY,
  GET_ARTICLES_QUERY,
  GET_ARTICLES_QUERY_WITH_LIMIT,
  GET_CATEGORY_QUERY,
  GET_RELATED_ARTICLES_QUERY,
} from "./queries";

const serializer = new JsonSerializer();

export class ArticleService {
  private static _instance: ArticleService;

  private constructor() {}

  contentCharactersLimit = 200;

  private htmlToPlainText(html: string): string {
    const withoutTags = html.replace(/<\/?[^>]+(>|$)/g, "");

    const decodedText = withoutTags
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&hellip;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&#(\d+);/g, (_, code) =>
        String.fromCharCode(parseInt(code, 10))
      )
      .replace(/&#x([a-fA-F0-9]+);/g, (_, code) =>
        String.fromCharCode(parseInt(code, 16))
      );

    return decodedText;
  }

  public static get instance(): ArticleService {
    if (!this._instance) {
      this._instance = new ArticleService();
    }
    return this._instance;
  }

  public async getArticlesWithLimit(limit: number): Promise<ArticleModel[]> {
    console.log("test3");

    const { data } = await GraphQLService.instance.client.query({
      query: GET_ARTICLES_QUERY_WITH_LIMIT,
      variables: { limit },
    });

    if (!data) return [];

    return (data.posts?.nodes || []).map((node: any) => {
      const article = new ArticleModel();

      article.title = node.title || "";

      const plainTextContent = this.htmlToPlainText(node.content || "");
      article.content =
        plainTextContent !== ""
          ? plainTextContent.slice(0, this.contentCharactersLimit)
          : "";

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

  public async getArticles(category?: string): Promise<Array<ArticleModel>> {
    console.log("test1");
    const { data } = await GraphQLService.instance.client.query(
      category
        ? {
            query: GET_ARTICLES_BY_CATEGORY_QUERY,
            variables: { category },
          }
        : { query: GET_ARTICLES_QUERY }
    );

    if (!data) return [];

    const articlesInfo: IArticleModel[] | null = data.posts
      ? data.posts?.nodes.map((node) => {
          const plainTextContent = this.htmlToPlainText(node.content || "");
          const truncatedContent =
            plainTextContent !== ""
              ? plainTextContent.slice(0, this.contentCharactersLimit)
              : "";

          return {
            title: node.title || "",
            id: node.id || "",
            content: truncatedContent,
            slug: node.slug || "",
            categories:
              node.categories?.nodes.map((category: any) => {
                return { name: category.name || "", slug: category.slug || "" };
              }) || [],

            thumbnail: node.featuredImage?.node.guid || "",
          };
        })
      : null;

    if (!articlesInfo) return [];

    const articles = (serializer.deserializeObjectArray<ArticleModel>(
      articlesInfo,
      ArticleModel
    ) || []) as Array<ArticleModel>;

    return articles;
  }

  public async getCategory(slug: string): Promise<CategoryModel | null> {
    const { data } = await GraphQLService.instance.client.query({
      query: GET_CATEGORY_QUERY,
      variables: { slug },
    });

    if (!data) return null;

    const categoryInfo: ICategoryModel | null = data.category
      ? {
          name: data.category.name || "",
          slug: data.category.slug || "",
          description: data.category.description || "",
        }
      : null;

    if (!categoryInfo) return null;

    const category = serializer.deserializeObject<CategoryModel>(
      categoryInfo,
      CategoryModel
    ) as CategoryModel;

    return category;
  }

  public async getArticle(slug: string): Promise<ArticleModel | null> {
    console.log("test2");
    const { data } = await GraphQLService.instance.client.query({
      query: GET_ARTICLE_QUERY,
      variables: { slug },
    });

    if (!data) return null;

    const articleInfo: IArticleModel | null = data.post
      ? {
          title: data.post.title || "",
          id: data.post.id || "",
          content: data.post.content || "",
          slug: data.post.slug || "",
          categories:
            data.post.categories?.nodes.map((category: any) => {
              return { name: category.name || "", slug: category.slug || "" };
            }) || [],
          thumbnail: data.post.featuredImage?.node.guid || "",
          date: data.post.date || "",
          description: this.htmlToPlainText(data.post.excerpt || ""),
        }
      : null;

    if (!articleInfo) return null;

    const article = serializer.deserializeObject<ArticleModel>(
      articleInfo,
      ArticleModel
    ) as ArticleModel;

    return article;
  }

  getRelatedArticles = async (
    articleId: string,
    categorySlug: string,
    limit: number
  ): Promise<Array<ArticleModel> | null> => {
    const { data } = await GraphQLService.instance.client.query({
      query: GET_RELATED_ARTICLES_QUERY,
      variables: { category: categorySlug, articleId: [articleId], limit },
    });

    if (!data) return [];

    const articlesInfo = data.posts
      ? data.posts?.nodes.map((node: any) => {
          const plainTextContent = this.htmlToPlainText(node.content || "");
          const truncatedContent =
            plainTextContent !== ""
              ? plainTextContent.slice(0, this.contentCharactersLimit)
              : "";

          return {
            title: node.title || "",
            id: node.id || "",
            content: truncatedContent,
            slug: node.slug || "",
            categories:
              node.categories?.nodes.map((category: any) => {
                return { name: category.name || "", slug: category.slug || "" };
              }) || [],

            thumbnail: node.featuredImage?.node.guid || "",
          };
        })
      : null;

    if (!articlesInfo) return [];

    const articles = (serializer.deserializeObjectArray<ArticleModel>(
      articlesInfo,
      ArticleModel
    ) || []) as Array<ArticleModel>;

    return articles;
  };
}
