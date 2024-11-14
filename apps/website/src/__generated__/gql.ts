/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query GetProjectQuery($id: ID!) {\n    projectBy(id: $id) {\n      id\n      title\n      projectFields {\n        description\n        fieldGroupName\n        projectUrl\n        thumbnail {\n          node {\n            sourceUrl\n          }\n        }\n        category {\n          edges {\n            node {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProjectQueryDocument,
    "\n  query GetProjectsQuery {\n    projects {\n      edges {\n        node {\n          title\n          projectFields {\n            description\n            category {\n              edges {\n                node {\n                  name\n                }\n              }\n            }\n            projectUrl\n            thumbnail {\n              node {\n                guid\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProjectsQueryDocument,
    "\n  query getReviewsQuery {\n    reviews {\n      nodes {\n        reviewFields {\n          countryCode\n          review\n          userAvatar {\n            node {\n              guid\n            }\n          }\n          projectUrl\n          username\n        }\n        title\n      }\n    }\n  }\n": types.GetReviewsQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProjectQuery($id: ID!) {\n    projectBy(id: $id) {\n      id\n      title\n      projectFields {\n        description\n        fieldGroupName\n        projectUrl\n        thumbnail {\n          node {\n            sourceUrl\n          }\n        }\n        category {\n          edges {\n            node {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProjectQuery($id: ID!) {\n    projectBy(id: $id) {\n      id\n      title\n      projectFields {\n        description\n        fieldGroupName\n        projectUrl\n        thumbnail {\n          node {\n            sourceUrl\n          }\n        }\n        category {\n          edges {\n            node {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProjectsQuery {\n    projects {\n      edges {\n        node {\n          title\n          projectFields {\n            description\n            category {\n              edges {\n                node {\n                  name\n                }\n              }\n            }\n            projectUrl\n            thumbnail {\n              node {\n                guid\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProjectsQuery {\n    projects {\n      edges {\n        node {\n          title\n          projectFields {\n            description\n            category {\n              edges {\n                node {\n                  name\n                }\n              }\n            }\n            projectUrl\n            thumbnail {\n              node {\n                guid\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getReviewsQuery {\n    reviews {\n      nodes {\n        reviewFields {\n          countryCode\n          review\n          userAvatar {\n            node {\n              guid\n            }\n          }\n          projectUrl\n          username\n        }\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query getReviewsQuery {\n    reviews {\n      nodes {\n        reviewFields {\n          countryCode\n          review\n          userAvatar {\n            node {\n              guid\n            }\n          }\n          projectUrl\n          username\n        }\n        title\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;