/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_ARTICLES_QUERY_WITH_LIMIT = gql(/* GraphQL */ `
  query GetArticlesQueryWithLimit($limit: Int!) {
    posts(first: $limit) {
      nodes {
        slug
        title
        id
        content
        categories {
          nodes {
            slug
            name
          }
        }
        featuredImage {
          node {
            guid
          }
        }
      }
    }
  }
`);
