/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_PROJECT_QUERY = gql(/* GraphQL */ `
  query GetProjectQuery($id: ID!) {
    project(id: $id, idType: SLUG) {
      title
      projectFields {
        description
        projectUrl
        thumbnail {
          node {
            guid
          }
        }
        sections {
          nodes {
            ... on Section {
              title
              sections {
                text
              }
            }
          }
        }
        category {
          edges {
            node {
              name
            }
          }
        }
        favicon {
          node {
            guid
          }
        }
        mainColor
      }
    }
  }
`);
