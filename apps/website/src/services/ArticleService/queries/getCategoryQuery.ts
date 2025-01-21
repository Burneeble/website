/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_CATEGORY_QUERY = gql(/* GraphQL */ `
  query GetCategoryQuery($slug: ID!) {
    category(idType: SLUG, id: $slug) {
      id
      name
      slug
      description
    }
  }
`);
