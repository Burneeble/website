/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_REVIEWS_QUERY = gql(/* GraphQL */ `
  query getReviewsQuery {
    reviews {
      nodes {
        reviewFields {
          countryCode
          review
          userAvatar {
            node {
              guid
            }
          }
          projectUrl
          u
        }
        title
      }
    }
  }
`);
