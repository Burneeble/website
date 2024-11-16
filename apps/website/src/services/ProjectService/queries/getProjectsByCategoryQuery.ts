/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_PROJECTS_BY_CATEGORY_QUERY = gql(/* GraphQL */ `
  query getProjectsByCategoryQuery($categories: [String!]!) {
    projects(
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
    }
  }
`);
