/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

// Simpler query that only excludes categories, doesn't filter by include
export const GET_PROJECTS_WITH_EXCLUSION_SIMPLE_QUERY = gql(/* GraphQL */ `
  query GetProjectsWithExclusionSimpleQuery(
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
          taxArray: [
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