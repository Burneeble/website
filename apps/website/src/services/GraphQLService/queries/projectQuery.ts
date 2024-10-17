import gql from "graphql-tag";

export const projectQuery = gql`
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
`;
