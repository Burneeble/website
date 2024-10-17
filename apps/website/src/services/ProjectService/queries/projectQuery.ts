/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_PROJECT_QUERY = gql(/* GraphQL */ `
  query GetProjectQuery($id: ID!) {
    projectBy(id: $id) {
      id
      title
      projectFields {
        description
        fieldGroupName
        projectUrl
        thumbnail {
          node {
            sourceUrl
          }
        }
        category {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
`);
