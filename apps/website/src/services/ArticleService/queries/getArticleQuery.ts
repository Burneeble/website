/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_ARTICLE_QUERY = gql(/* GraphQL */ `
  query GetArticleQuery($slug: ID!) {
    post(id: $slug, idType: SLUG) {
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
      date
    }
  }
`);
