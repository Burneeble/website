"use client";

import { GraphQLService } from "./GraphQLService";
import { GraphQLServiceProviderProps } from "./GraphQLService.types";
import { graphQLServiceContext } from "./GraphQLServiceContext";
import { ApolloProvider } from "@apollo/client";

const GraphQLServiceProvider = (props: GraphQLServiceProviderProps) => {
  return (
    <graphQLServiceContext.Provider value={{}}>
      <ApolloProvider client={GraphQLService.instance.client}>
        {props.children}
      </ApolloProvider>
    </graphQLServiceContext.Provider>
  );
};

export default GraphQLServiceProvider;
