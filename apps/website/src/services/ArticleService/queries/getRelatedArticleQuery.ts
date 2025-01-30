/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_RELATED_ARTICLES_QUERY = gql(/* GraphQL */ `
  query getRelatedArticles($category: String!, $articleId: [ID], $limit: Int!) {
    posts(
      where: { categoryName: $category, notIn: $articleId }
      first: $limit
    ) {
      nodes {
        featuredImage {
          node {
            guid
          }
        }
        content
        title
        id
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
