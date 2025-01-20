/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_ARTICLES_QUERY = gql(/* GraphQL */ `
  query GetArticlesQuery($limit: Int, $offset: String, $search: String) {
    posts(first: $limit, after: $offset, where: { search: $search }) {
      nodes {
        slug
        title
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`);
