/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_RELATED_ARTICLES_QUERY = gql(/* GraphQL */ `
  query getRelatedArticles($category: String!, $slug: [ID], $limit: Int!) {
    posts(where: { categoryName: $category, notIn: $slug }, first: $limit) {
      nodes {
        featuredImage {
          node {
            guid
          }
        }
        content
        title
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`);
