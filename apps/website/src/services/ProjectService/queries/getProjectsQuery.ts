/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_PROJECTS_QUERY = gql(/* GraphQL */ `
  query GetProjectsQuery($categories: [String], $limit: Int, $offset: String) {
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
        } @skip(if: !$categories)
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
