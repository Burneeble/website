/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_PROJECTS_BY_CATEGORIES_QUERY = gql(/* GraphQL */ `
  query GetProjectsByCategoriesQuery(
    $categories: [String]!
    $limit: Int
    $offset: String
  ) {
    projects(
      first: $limit
      after: $offset
      where: {
        taxQuery: {
          taxArray: {
            taxonomy: PROJECTCATEGORY
            terms: $categories
            field: NAME
          }
        }
      }
    ) {
      edges {
        node {
          title
          projectFields {
            description
            category {
              edges {
                node {
                  name
                }
              }
            }
            projectUrl
            thumbnail {
              node {
                guid
              }
            }
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
