/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const PROJECT_QUERY = gql(`
  query Projects {
    projects {
      edges {
        cursor
        node {
          id
          slug
          title
          projectFields {
            category {
              nodes {
                id
                name
                link
                slug
                uri
              }
            }
            description
            fieldGroupName
            projectUrl
            thumbnail {
              node {
                uri
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`);
