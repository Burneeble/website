import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { PROJECT_QUERY } from "./queries";
export class GraphQLService {
  private static _instance: GraphQLService;

  private static _client: ApolloClient<NormalizedCacheObject>;

  public static get instance(): GraphQLService {
    if (!this._instance) {
      this._instance = new GraphQLService();
    }
    return this._instance;
  }

  public get client(): ApolloClient<NormalizedCacheObject> {
    return GraphQLService._client;
  }

  public async getProject() {
    const { data } = await GraphQLService._client.query({
      query: PROJECT_QUERY,
    });
    console.log("[getProject] Data:", JSON.stringify(data, null, 2));

    return data;
  }

  private constructor() {
    GraphQLService._client = new ApolloClient({
      uri: "http://test01.local/graphql",
      cache: new InMemoryCache(),
    });
  }
}
