import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
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

  private constructor() {
    const httpLink = new HttpLink({
      uri: "https://burneeble.com/graphql",
      fetch,
    });

    const loggerLink = new ApolloLink((operation, forward) => {
      const { operationName, variables } = operation;

      console.log("Request:", {
        operationName,
        variables,
        headers: operation.getContext().headers,
      });

      return forward(operation).map((response) => {
        console.log("Response:", {
          operationName,
          data: response.data,
          errors: response.errors,
        });

        return response;
      });
    });

    GraphQLService._client = new ApolloClient({
      link: ApolloLink.from([loggerLink, httpLink]),
      cache: new InMemoryCache(),
    });
  }
}
