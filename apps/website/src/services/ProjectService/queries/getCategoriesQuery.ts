/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_CATEGORIES_QUERY = gql(/* GraphQL */ `
  query getCategoriesQuery {
    projectCategories {
      edges {
        node {
          name
        }
      }
    }
  }
`);
