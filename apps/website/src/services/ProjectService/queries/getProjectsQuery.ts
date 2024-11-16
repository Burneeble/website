/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_PROJECTS_QUERY = gql(/* GraphQL */ `
  query GetProjectsQuery($limit: Int, $offset: String) {
    projects(first: $limit, after: $offset) {
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
