/* eslint-disable @burneeble/burneeble/camel-case-vars */
import { gql } from "@/__generated__";

export const GET_SKILLS_QUERY = gql(/* GraphQL */ `
  query getSkillsQuery {
    skills {
      nodes {
        title
        skillFields {
          description
          extendedTitle
          labels
        }
      }
    }
  }
`);
