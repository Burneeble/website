/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_PROJECTS_WITH_EXCLUSION_QUERY = gql(/* GraphQL */ `
  query GetProjectsWithExclusionQuery(
    $includeCategories: [String]
    $excludeCategories: [String]
    $limit: Int
    $offset: String
    $search: String
  ) {
    projects(
      first: $limit
      after: $offset
      where: {
        taxQuery: {
          relation: AND
          taxArray: [
            {
              taxonomy: PROJECTCATEGORY
              terms: $includeCategories
              field: NAME
              operator: IN
              includeChildren: false
            }
            {
              taxonomy: PROJECTCATEGORY
              terms: $excludeCategories
              field: NAME
              operator: NOT_IN
              includeChildren: false
            }
          ]
        }
        search: $search
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