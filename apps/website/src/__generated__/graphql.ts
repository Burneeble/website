/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
  /** Indicates a G level avatar rating level. */
  G = 'G',
  /** Indicates a PG level avatar rating level. */
  Pg = 'PG',
  /** Indicates an R level avatar rating level. */
  R = 'R',
  /** Indicates an X level avatar rating level. */
  X = 'X'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfCategoryEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<CategoryToContentNodeConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryToContentNodeConnectionWhereArgsTaxArray = {
  field?: InputMaybe<CategoryToContentNodeConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<CategoryToContentNodeConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type CategoryToContentNodeConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<CategoryToContentNodeConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum CategoryToContentNodeConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum CategoryToContentNodeConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxQuery?: InputMaybe<CategoryToPostConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryToPostConnectionWhereArgsTaxArray = {
  field?: InputMaybe<CategoryToPostConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<CategoryToPostConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type CategoryToPostConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<CategoryToPostConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum CategoryToPostConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum CategoryToPostConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** The Type of Identifier used to fetch a single comment node. Default is "ID". To be used along with the "id" field. */
export enum CommentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** The status of the comment object. */
export enum CommentStatusEnum {
  /** Comments with the Approved status */
  Approve = 'APPROVE',
  /** Comments with the Unapproved status */
  Hold = 'HOLD',
  /** Comments with the Spam status */
  Spam = 'SPAM',
  /** Comments with the Bin status */
  Trash = 'TRASH'
}

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  /** Order by browser user agent of the commenter. */
  CommentAgent = 'COMMENT_AGENT',
  /** Order by approval status of the comment. */
  CommentApproved = 'COMMENT_APPROVED',
  /** Order by name of the comment author. */
  CommentAuthor = 'COMMENT_AUTHOR',
  /** Order by e-mail of the comment author. */
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  /** Order by IP address of the comment author. */
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  /** Order by URL address of the comment author. */
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  /** Order by the comment contents. */
  CommentContent = 'COMMENT_CONTENT',
  /** Order by date/time timestamp of the comment. */
  CommentDate = 'COMMENT_DATE',
  /** Order by GMT timezone date/time timestamp of the comment. */
  CommentDateGmt = 'COMMENT_DATE_GMT',
  /** Order by the globally unique identifier for the comment object */
  CommentId = 'COMMENT_ID',
  /** Order by the array list of comment IDs listed in the where clause. */
  CommentIn = 'COMMENT_IN',
  /** Order by the comment karma score. */
  CommentKarma = 'COMMENT_KARMA',
  /** Order by the comment parent ID. */
  CommentParent = 'COMMENT_PARENT',
  /** Order by the post object ID. */
  CommentPostId = 'COMMENT_POST_ID',
  /** Order by the the type of comment, such as 'comment', 'pingback', or 'trackback'. */
  CommentType = 'COMMENT_TYPE',
  /** Order by the user ID. */
  UserId = 'USER_ID'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Allowed Content Types */
export enum ContentTypeEnum {
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  ImagesLayout = 'IMAGES_LAYOUT',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST',
  /** The Type of Content object */
  Project = 'PROJECT',
  /** The Type of Content object */
  Review = 'REVIEW',
  /** The Type of Content object */
  ScreenImagesLayout = 'SCREEN_IMAGES_LAYOUT',
  /** The Type of Content object */
  Section = 'SECTION',
  /** The Type of Content object */
  Skill = 'SKILL'
}

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME'
}

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<ContentTypeToContentNodeConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ContentTypeToContentNodeConnectionWhereArgsTaxArray = {
  field?: InputMaybe<ContentTypeToContentNodeConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<ContentTypeToContentNodeConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type ContentTypeToContentNodeConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<ContentTypeToContentNodeConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum ContentTypeToContentNodeConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum ContentTypeToContentNodeConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Allowed Content Types of the Category taxonomy. */
export enum ContentTypesOfCategoryEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the ImagesLayoutValue taxonomy. */
export enum ContentTypesOfImagesLayoutValueEnum {
  /** The Type of Content object */
  ImagesLayout = 'IMAGES_LAYOUT'
}

/** Allowed Content Types of the PostFormat taxonomy. */
export enum ContentTypesOfPostFormatEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the ProjectCategory taxonomy. */
export enum ContentTypesOfProjectCategoryEnum {
  /** The Type of Content object */
  Project = 'PROJECT'
}

/** Allowed Content Types of the ProjectTechnology taxonomy. */
export enum ContentTypesOfProjectTechnologyEnum {
  /** The Type of Content object */
  Project = 'PROJECT'
}

/** Allowed Content Types of the SectionLayout taxonomy. */
export enum ContentTypesOfSectionLayoutEnum {
  /** The Type of Content object */
  Section = 'SECTION'
}

/** Allowed Content Types of the Tag taxonomy. */
export enum ContentTypesOfTagEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Input for the createCategory mutation. */
export type CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the category object to mutate */
  name: Scalars['String']['input'];
  /** The ID of the category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createComment mutation. */
export type CreateCommentInput = {
  /** The approval status of the comment. */
  approved?: InputMaybe<Scalars['String']['input']>;
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']['input']>;
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']['input']>;
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createImagesLayout mutation. */
export type CreateImagesLayoutInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** Set connections between the imagesLayout and imagesLayoutsValues */
  imagesLayoutsValues?: InputMaybe<ImagesLayoutImagesLayoutsValuesInput>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createImagesLayoutValue mutation. */
export type CreateImagesLayoutValueInput = {
  /** The slug that the images-layout-value will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the images-layout-value object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the images-layout-value object to mutate */
  name: Scalars['String']['input'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createMediaItem mutation. */
export type CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']['input']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']['input']>;
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']['input']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']['input']>;
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']['input']>;
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createPage mutation. */
export type CreatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createPostFormat mutation. */
export type CreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the post_format object to mutate */
  name: Scalars['String']['input'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createPost mutation. */
export type CreatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']['input']>;
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The ping status for the object */
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  /** URLs that have been pinged. */
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
  /** URLs queued to be pinged. */
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Input for the createProjectCategory mutation. */
export type CreateProjectCategoryInput = {
  /** The slug that the project-category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the project-category object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the project-category object to mutate */
  name: Scalars['String']['input'];
  /** The ID of the project-category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createProject mutation. */
export type CreateProjectInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Set connections between the project and projectCategories */
  projectCategories?: InputMaybe<ProjectProjectCategoriesInput>;
  /** Set connections between the project and projectTechnologies */
  projectTechnologies?: InputMaybe<ProjectProjectTechnologiesInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createProjectTechnology mutation. */
export type CreateProjectTechnologyInput = {
  /** The slug that the project-technology will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the project-technology object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the project-technology object to mutate */
  name: Scalars['String']['input'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createReview mutation. */
export type CreateReviewInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createScreenImagesLayout mutation. */
export type CreateScreenImagesLayoutInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createSection mutation. */
export type CreateSectionInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Set connections between the section and sectionLayouts */
  sectionLayouts?: InputMaybe<SectionSectionLayoutsInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createSectionLayout mutation. */
export type CreateSectionLayoutInput = {
  /** The slug that the section-layout will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the section-layout object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the section-layout object to mutate */
  name: Scalars['String']['input'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createSkill mutation. */
export type CreateSkillInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createTag mutation. */
export type CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the post_tag object to mutate */
  name: Scalars['String']['input'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the createUser mutation. */
export type CreateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']['input']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']['input']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']['input']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']['input']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']['input']>;
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A string that contains the user's username for logging in. */
  username: Scalars['String']['input'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']['input']>;
};

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']['input']>;
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']['input']>;
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** Filter the connection based on input */
export type DateQueryInput = {
  /** Nodes should be returned after this date */
  after?: InputMaybe<DateInput>;
  /** Nodes should be returned before this date */
  before?: InputMaybe<DateInput>;
  /** Column to query against */
  column?: InputMaybe<PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  compare?: InputMaybe<Scalars['String']['input']>;
  /** Day of the month (from 1 to 31) */
  day?: InputMaybe<Scalars['Int']['input']>;
  /** Hour (from 0 to 23) */
  hour?: InputMaybe<Scalars['Int']['input']>;
  /** For after/before, whether exact value should be matched or not */
  inclusive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Minute (from 0 to 59) */
  minute?: InputMaybe<Scalars['Int']['input']>;
  /** Month number (from 1 to 12) */
  month?: InputMaybe<Scalars['Int']['input']>;
  /** OR or AND, how the sub-arrays should be compared */
  relation?: InputMaybe<RelationEnum>;
  /** Second (0 to 59) */
  second?: InputMaybe<Scalars['Int']['input']>;
  /** Week of the year (from 0 to 53) */
  week?: InputMaybe<Scalars['Int']['input']>;
  /** 4 digit year (e.g. 2017) */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** Input for the deleteCategory mutation. */
export type DeleteCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the category to delete */
  id: Scalars['ID']['input'];
};

/** Input for the deleteComment mutation. */
export type DeleteCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  /** The deleted comment ID */
  id: Scalars['ID']['input'];
};

/** Input for the deleteImagesLayout mutation. */
export type DeleteImagesLayoutInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the imagesLayout to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for the deleteImagesLayoutValue mutation. */
export type DeleteImagesLayoutValueInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the imagesLayoutValue to delete */
  id: Scalars['ID']['input'];
};

/** Input for the deleteMediaItem mutation. */
export type DeleteMediaItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the mediaItem to delete */
  id: Scalars['ID']['input'];
};

/** Input for the deletePage mutation. */
export type DeletePageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the page to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for the deletePostFormat mutation. */
export type DeletePostFormatInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the postFormat to delete */
  id: Scalars['ID']['input'];
};

/** Input for the deletePost mutation. */
export type DeletePostInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the post to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for the deleteProjectCategory mutation. */
export type DeleteProjectCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the projectCategory to delete */
  id: Scalars['ID']['input'];
};

/** Input for the deleteProject mutation. */
export type DeleteProjectInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the project to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for the deleteProjectTechnology mutation. */
export type DeleteProjectTechnologyInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the projectTechnology to delete */
  id: Scalars['ID']['input'];
};

/** Input for the deleteReview mutation. */
export type DeleteReviewInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the review to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for the deleteScreenImagesLayout mutation. */
export type DeleteScreenImagesLayoutInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the screenImagesLayout to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for the deleteSection mutation. */
export type DeleteSectionInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the section to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for the deleteSectionLayout mutation. */
export type DeleteSectionLayoutInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the sectionLayout to delete */
  id: Scalars['ID']['input'];
};

/** Input for the deleteSkill mutation. */
export type DeleteSkillInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the skill to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for the deleteTag mutation. */
export type DeleteTagInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the tag to delete */
  id: Scalars['ID']['input'];
};

/** Input for the deleteUser mutation. */
export type DeleteUserInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the user you want to delete */
  id: Scalars['ID']['input'];
  /** Reassign posts and links to new User ID. */
  reassignId?: InputMaybe<Scalars['ID']['input']>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgsTaxArray = {
  field?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgsTaxArray = {
  field?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ImagesLayoutIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Set relationships between the imagesLayout to imagesLayoutsValues */
export type ImagesLayoutImagesLayoutsValuesInput = {
  /** If true, this will append the imagesLayoutValue to existing related imagesLayoutsValues. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<ImagesLayoutImagesLayoutsValuesNodeInput>>>;
};

/** List of imagesLayoutsValues to connect the imagesLayout to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ImagesLayoutImagesLayoutsValuesNodeInput = {
  /** The description of the imagesLayoutValue. This field is used to set a description of the imagesLayoutValue if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the imagesLayoutValue. If present, this will be used to connect to the imagesLayout. If no existing imagesLayoutValue exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the imagesLayoutValue. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the imagesLayoutValue. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Arguments for filtering the ImagesLayoutToImagesLayoutValueConnection connection */
export type ImagesLayoutToImagesLayoutValueConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the ImagesLayoutToTermNodeConnection connection */
export type ImagesLayoutToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ImagesLayoutValueIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the ImagesLayoutValueToContentNodeConnection connection */
export type ImagesLayoutValueToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfImagesLayoutValueEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<ImagesLayoutValueToContentNodeConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImagesLayoutValueToContentNodeConnectionWhereArgsTaxArray = {
  field?: InputMaybe<ImagesLayoutValueToContentNodeConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<ImagesLayoutValueToContentNodeConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type ImagesLayoutValueToContentNodeConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<ImagesLayoutValueToContentNodeConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum ImagesLayoutValueToContentNodeConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum ImagesLayoutValueToContentNodeConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the ImagesLayoutValueToImagesLayoutConnection connection */
export type ImagesLayoutValueToImagesLayoutConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<ImagesLayoutValueToImagesLayoutConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImagesLayoutValueToImagesLayoutConnectionWhereArgsTaxArray = {
  field?: InputMaybe<ImagesLayoutValueToImagesLayoutConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<ImagesLayoutValueToImagesLayoutConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type ImagesLayoutValueToImagesLayoutConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<ImagesLayoutValueToImagesLayoutConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum ImagesLayoutValueToImagesLayoutConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum ImagesLayoutValueToImagesLayoutConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The size of the media item object. */
export enum MediaItemSizeEnum {
  /** MediaItem with the hestia-blog size */
  HestiaBlog = 'HESTIA_BLOG',
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the mailpoet_newsletter_max size */
  MailpoetNewsletterMax = 'MAILPOET_NEWSLETTER_MAX',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the yarpp-thumbnail size */
  YarppThumbnail = 'YARPP_THUMBNAIL',
  /** MediaItem with the 1536x1536 size */
  '1536X1536' = '_1536X1536',
  /** MediaItem with the 2048x2048 size */
  '2048X2048' = '_2048X2048'
}

/** The status of the media item object. */
export enum MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuItemNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

/** Registered menu locations */
export enum MenuLocationEnum {
  /** Put the menu in the footer location */
  Footer = 'FOOTER',
  /** Put the menu in the primary location */
  Primary = 'PRIMARY',
  /** Put the menu in the top-bar-menu location */
  TopBarMenu = 'TOP_BAR_MENU'
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuNodeIdTypeEnum {
  /** Identify a menu node by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a menu node by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a menu node by the slug of menu location to which it is assigned */
  Location = 'LOCATION',
  /** Identify a menu node by its name */
  Name = 'NAME',
  /** Identify a menu node by its slug */
  Slug = 'SLUG'
}

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

/** The MimeType of the object */
export enum MimeTypeEnum {
  /** application/java mime type. */
  ApplicationJava = 'APPLICATION_JAVA',
  /** application/msword mime type. */
  ApplicationMsword = 'APPLICATION_MSWORD',
  /** application/octet-stream mime type. */
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  /** application/onenote mime type. */
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  /** application/oxps mime type. */
  ApplicationOxps = 'APPLICATION_OXPS',
  /** application/pdf mime type. */
  ApplicationPdf = 'APPLICATION_PDF',
  /** application/rar mime type. */
  ApplicationRar = 'APPLICATION_RAR',
  /** application/rtf mime type. */
  ApplicationRtf = 'APPLICATION_RTF',
  /** application/ttaf+xml mime type. */
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  /** application/vnd.apple.keynote mime type. */
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  /** application/vnd.apple.numbers mime type. */
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  /** application/vnd.apple.pages mime type. */
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  /** application/vnd.ms-access mime type. */
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  /** application/vnd.ms-excel mime type. */
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  /** application/vnd.ms-excel.addin.macroEnabled.12 mime type. */
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  /** application/vnd.ms-excel.sheet.binary.macroEnabled.12 mime type. */
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  /** application/vnd.ms-excel.sheet.macroEnabled.12 mime type. */
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  /** application/vnd.ms-excel.template.macroEnabled.12 mime type. */
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-powerpoint mime type. */
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  /** application/vnd.ms-powerpoint.addin.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.presentation.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.slideshow.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.slide.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.template.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-project mime type. */
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  /** application/vnd.ms-word.document.macroEnabled.12 mime type. */
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  /** application/vnd.ms-word.template.macroEnabled.12 mime type. */
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-write mime type. */
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  /** application/vnd.ms-xpsdocument mime type. */
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  /** application/vnd.oasis.opendocument.chart mime type. */
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  /** application/vnd.oasis.opendocument.database mime type. */
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  /** application/vnd.oasis.opendocument.formula mime type. */
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  /** application/vnd.oasis.opendocument.graphics mime type. */
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  /** application/vnd.oasis.opendocument.presentation mime type. */
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  /** application/vnd.oasis.opendocument.spreadsheet mime type. */
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  /** application/vnd.oasis.opendocument.text mime type. */
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  /** application/vnd.openxmlformats-officedocument.presentationml.presentation mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  /** application/vnd.openxmlformats-officedocument.presentationml.slide mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  /** application/vnd.openxmlformats-officedocument.presentationml.slideshow mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  /** application/vnd.openxmlformats-officedocument.presentationml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  /** application/vnd.openxmlformats-officedocument.spreadsheetml.sheet mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  /** application/vnd.openxmlformats-officedocument.spreadsheetml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  /** application/vnd.openxmlformats-officedocument.wordprocessingml.document mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  /** application/vnd.openxmlformats-officedocument.wordprocessingml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  /** application/wordperfect mime type. */
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  /** application/x-7z-compressed mime type. */
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  /** application/x-gzip mime type. */
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  /** application/x-tar mime type. */
  ApplicationXTar = 'APPLICATION_X_TAR',
  /** application/zip mime type. */
  ApplicationZip = 'APPLICATION_ZIP',
  /** audio/aac mime type. */
  AudioAac = 'AUDIO_AAC',
  /** audio/flac mime type. */
  AudioFlac = 'AUDIO_FLAC',
  /** audio/midi mime type. */
  AudioMidi = 'AUDIO_MIDI',
  /** audio/mpeg mime type. */
  AudioMpeg = 'AUDIO_MPEG',
  /** audio/ogg mime type. */
  AudioOgg = 'AUDIO_OGG',
  /** audio/wav mime type. */
  AudioWav = 'AUDIO_WAV',
  /** audio/x-matroska mime type. */
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  /** audio/x-ms-wax mime type. */
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  /** audio/x-ms-wma mime type. */
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  /** audio/x-realaudio mime type. */
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  /** image/avif mime type. */
  ImageAvif = 'IMAGE_AVIF',
  /** image/bmp mime type. */
  ImageBmp = 'IMAGE_BMP',
  /** image/gif mime type. */
  ImageGif = 'IMAGE_GIF',
  /** image/heic mime type. */
  ImageHeic = 'IMAGE_HEIC',
  /** image/heic-sequence mime type. */
  ImageHeicSequence = 'IMAGE_HEIC_SEQUENCE',
  /** image/heif mime type. */
  ImageHeif = 'IMAGE_HEIF',
  /** image/heif-sequence mime type. */
  ImageHeifSequence = 'IMAGE_HEIF_SEQUENCE',
  /** image/jpeg mime type. */
  ImageJpeg = 'IMAGE_JPEG',
  /** image/png mime type. */
  ImagePng = 'IMAGE_PNG',
  /** image/tiff mime type. */
  ImageTiff = 'IMAGE_TIFF',
  /** image/webp mime type. */
  ImageWebp = 'IMAGE_WEBP',
  /** image/x-icon mime type. */
  ImageXIcon = 'IMAGE_X_ICON',
  /** text/calendar mime type. */
  TextCalendar = 'TEXT_CALENDAR',
  /** text/css mime type. */
  TextCss = 'TEXT_CSS',
  /** text/csv mime type. */
  TextCsv = 'TEXT_CSV',
  /** text/plain mime type. */
  TextPlain = 'TEXT_PLAIN',
  /** text/richtext mime type. */
  TextRichtext = 'TEXT_RICHTEXT',
  /** text/tab-separated-values mime type. */
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  /** text/vtt mime type. */
  TextVtt = 'TEXT_VTT',
  /** video/3gpp mime type. */
  Video_3Gpp = 'VIDEO_3GPP',
  /** video/3gpp2 mime type. */
  Video_3Gpp2 = 'VIDEO_3GPP2',
  /** video/avi mime type. */
  VideoAvi = 'VIDEO_AVI',
  /** video/divx mime type. */
  VideoDivx = 'VIDEO_DIVX',
  /** video/mp4 mime type. */
  VideoMp4 = 'VIDEO_MP4',
  /** video/mpeg mime type. */
  VideoMpeg = 'VIDEO_MPEG',
  /** video/ogg mime type. */
  VideoOgg = 'VIDEO_OGG',
  /** video/quicktime mime type. */
  VideoQuicktime = 'VIDEO_QUICKTIME',
  /** video/webm mime type. */
  VideoWebm = 'VIDEO_WEBM',
  /** video/x-flv mime type. */
  VideoXFlv = 'VIDEO_X_FLV',
  /** video/x-matroska mime type. */
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  /** video/x-ms-asf mime type. */
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  /** video/x-ms-wm mime type. */
  VideoXMsWm = 'VIDEO_X_MS_WM',
  /** video/x-ms-wmv mime type. */
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  /** video/x-ms-wmx mime type. */
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

/** The cardinality of the connection order */
export enum OrderEnum {
  /** Sort the query result set in an ascending order */
  Asc = 'ASC',
  /** Sort the query result set in a descending order */
  Desc = 'DESC'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Arguments for filtering the PageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<PageToRevisionConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageToRevisionConnectionWhereArgsTaxArray = {
  field?: InputMaybe<PageToRevisionConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<PageToRevisionConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type PageToRevisionConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<PageToRevisionConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum PageToRevisionConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum PageToRevisionConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** The status of the WordPress plugin. */
export enum PluginStatusEnum {
  /** The plugin is currently active. */
  Active = 'ACTIVE',
  /** The plugin is a drop-in plugin. */
  DropIn = 'DROP_IN',
  /** The plugin is currently inactive. */
  Inactive = 'INACTIVE',
  /** The plugin is a must-use plugin. */
  MustUse = 'MUST_USE',
  /** The plugin is technically active but was paused while loading. */
  Paused = 'PAUSED',
  /** The plugin was active recently. */
  RecentlyActive = 'RECENTLY_ACTIVE',
  /** The plugin has an upgrade available. */
  Upgrade = 'UPGRADE'
}

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfPostFormatEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<PostFormatToContentNodeConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostFormatToContentNodeConnectionWhereArgsTaxArray = {
  field?: InputMaybe<PostFormatToContentNodeConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<PostFormatToContentNodeConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type PostFormatToContentNodeConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<PostFormatToContentNodeConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum PostFormatToContentNodeConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum PostFormatToContentNodeConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxQuery?: InputMaybe<PostFormatToPostConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostFormatToPostConnectionWhereArgsTaxArray = {
  field?: InputMaybe<PostFormatToPostConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<PostFormatToPostConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type PostFormatToPostConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<PostFormatToPostConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum PostFormatToPostConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum PostFormatToPostConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database. Null on unauthenticated requests. */
  Raw = 'RAW',
  /** Provide the field value as rendered by WordPress. Default. */
  Rendered = 'RENDERED'
}

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  /** The date the comment was created in local time. */
  Date = 'DATE',
  /** The most recent modification date of the comment. */
  Modified = 'MODIFIED'
}

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by the number of comments it has acquired */
  CommentCount = 'COMMENT_COUNT',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE'
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  field: PostObjectsConnectionOrderbyEnum;
  /** Possible directions in which to order a list of items */
  order: OrderEnum;
};

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the acf-disabled status */
  AcfDisabled = 'ACF_DISABLED',
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the flamingo-spam status */
  FlamingoSpam = 'FLAMINGO_SPAM',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the mapped status */
  Mapped = 'MAPPED',
  /** Objects with the needs_update status */
  NeedsUpdate = 'NEEDS_UPDATE',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** Set relationships between the post to tags */
export type PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<PostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the PostToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxQuery?: InputMaybe<PostToRevisionConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostToRevisionConnectionWhereArgsTaxArray = {
  field?: InputMaybe<PostToRevisionConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<PostToRevisionConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type PostToRevisionConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<PostToRevisionConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum PostToRevisionConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum PostToRevisionConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ProjectCategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the ProjectCategoryToContentNodeConnection connection */
export type ProjectCategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfProjectCategoryEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<ProjectCategoryToContentNodeConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectCategoryToContentNodeConnectionWhereArgsTaxArray = {
  field?: InputMaybe<ProjectCategoryToContentNodeConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<ProjectCategoryToContentNodeConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type ProjectCategoryToContentNodeConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<ProjectCategoryToContentNodeConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum ProjectCategoryToContentNodeConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum ProjectCategoryToContentNodeConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the ProjectCategoryToProjectCategoryConnection connection */
export type ProjectCategoryToProjectCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the ProjectCategoryToProjectConnection connection */
export type ProjectCategoryToProjectConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<ProjectCategoryToProjectConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectCategoryToProjectConnectionWhereArgsTaxArray = {
  field?: InputMaybe<ProjectCategoryToProjectConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<ProjectCategoryToProjectConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type ProjectCategoryToProjectConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<ProjectCategoryToProjectConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum ProjectCategoryToProjectConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum ProjectCategoryToProjectConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ProjectIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Set relationships between the project to projectCategories */
export type ProjectProjectCategoriesInput = {
  /** If true, this will append the projectCategory to existing related projectCategories. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<ProjectProjectCategoriesNodeInput>>>;
};

/** List of projectCategories to connect the project to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ProjectProjectCategoriesNodeInput = {
  /** The description of the projectCategory. This field is used to set a description of the projectCategory if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the projectCategory. If present, this will be used to connect to the project. If no existing projectCategory exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the projectCategory. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the projectCategory. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Set relationships between the project to projectTechnologies */
export type ProjectProjectTechnologiesInput = {
  /** If true, this will append the projectTechnology to existing related projectTechnologies. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<ProjectProjectTechnologiesNodeInput>>>;
};

/** List of projectTechnologies to connect the project to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ProjectProjectTechnologiesNodeInput = {
  /** The description of the projectTechnology. This field is used to set a description of the projectTechnology if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the projectTechnology. If present, this will be used to connect to the project. If no existing projectTechnology exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the projectTechnology. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the projectTechnology. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ProjectTechnologyIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the ProjectTechnologyToContentNodeConnection connection */
export type ProjectTechnologyToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfProjectTechnologyEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<ProjectTechnologyToContentNodeConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectTechnologyToContentNodeConnectionWhereArgsTaxArray = {
  field?: InputMaybe<ProjectTechnologyToContentNodeConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<ProjectTechnologyToContentNodeConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type ProjectTechnologyToContentNodeConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<ProjectTechnologyToContentNodeConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum ProjectTechnologyToContentNodeConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum ProjectTechnologyToContentNodeConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the ProjectTechnologyToProjectConnection connection */
export type ProjectTechnologyToProjectConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<ProjectTechnologyToProjectConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectTechnologyToProjectConnectionWhereArgsTaxArray = {
  field?: InputMaybe<ProjectTechnologyToProjectConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<ProjectTechnologyToProjectConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type ProjectTechnologyToProjectConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<ProjectTechnologyToProjectConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum ProjectTechnologyToProjectConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum ProjectTechnologyToProjectConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the ProjectToProjectCategoryConnection connection */
export type ProjectToProjectCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the ProjectToProjectTechnologyConnection connection */
export type ProjectToProjectTechnologyConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the ProjectToTermNodeConnection connection */
export type ProjectToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for the registerUser mutation. */
export type RegisterUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']['input']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']['input']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']['input']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']['input']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the user's username. */
  username: Scalars['String']['input'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']['input']>;
};

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  /** The logical AND condition returns true if both operands are true, otherwise, it returns false. */
  And = 'AND',
  /** The logical OR condition returns false if both operands are false, otherwise, it returns true. */
  Or = 'OR'
}

/** Input for the resetUserPassword mutation. */
export type ResetUserPasswordInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Password reset key */
  key?: InputMaybe<Scalars['String']['input']>;
  /** The user's login (username). */
  login?: InputMaybe<Scalars['String']['input']>;
  /** The new password. */
  password?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the restoreComment mutation. */
export type RestoreCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the comment to be restored */
  id: Scalars['ID']['input'];
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ReviewIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<RootQueryToContentNodeConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToContentNodeConnectionWhereArgsTaxArray = {
  field?: InputMaybe<RootQueryToContentNodeConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<RootQueryToContentNodeConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToContentNodeConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<RootQueryToContentNodeConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToContentNodeConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum RootQueryToContentNodeConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the RootQueryToImagesLayoutConnection connection */
export type RootQueryToImagesLayoutConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<RootQueryToImagesLayoutConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToImagesLayoutConnectionWhereArgsTaxArray = {
  field?: InputMaybe<RootQueryToImagesLayoutConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<RootQueryToImagesLayoutConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToImagesLayoutConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<RootQueryToImagesLayoutConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToImagesLayoutConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum RootQueryToImagesLayoutConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the RootQueryToImagesLayoutValueConnection connection */
export type RootQueryToImagesLayoutValueConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<RootQueryToMediaItemConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToMediaItemConnectionWhereArgsTaxArray = {
  field?: InputMaybe<RootQueryToMediaItemConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<RootQueryToMediaItemConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToMediaItemConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<RootQueryToMediaItemConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToMediaItemConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum RootQueryToMediaItemConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The menu location for the menu being queried */
  location?: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent menu object */
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<RootQueryToPageConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToPageConnectionWhereArgsTaxArray = {
  field?: InputMaybe<RootQueryToPageConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<RootQueryToPageConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToPageConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<RootQueryToPageConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToPageConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum RootQueryToPageConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the RootQueryToPluginConnection connection */
export type RootQueryToPluginConnectionWhereArgs = {
  /** Show plugin based on a keyword search. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve plugins where plugin status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PluginStatusEnum>>>;
  /** Show plugins with a specific status. */
  status?: InputMaybe<PluginStatusEnum>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxQuery?: InputMaybe<RootQueryToPostConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToPostConnectionWhereArgsTaxArray = {
  field?: InputMaybe<RootQueryToPostConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<RootQueryToPostConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToPostConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<RootQueryToPostConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToPostConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum RootQueryToPostConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the RootQueryToProjectCategoryConnection connection */
export type RootQueryToProjectCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the RootQueryToProjectConnection connection */
export type RootQueryToProjectConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<RootQueryToProjectConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToProjectConnectionWhereArgsTaxArray = {
  field?: InputMaybe<RootQueryToProjectConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<RootQueryToProjectConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToProjectConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<RootQueryToProjectConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToProjectConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum RootQueryToProjectConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the RootQueryToProjectTechnologyConnection connection */
export type RootQueryToProjectTechnologyConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the RootQueryToReviewConnection connection */
export type RootQueryToReviewConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<RootQueryToReviewConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToReviewConnectionWhereArgsTaxArray = {
  field?: InputMaybe<RootQueryToReviewConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<RootQueryToReviewConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToReviewConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<RootQueryToReviewConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToReviewConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum RootQueryToReviewConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the RootQueryToRevisionsConnection connection */
export type RootQueryToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<RootQueryToRevisionsConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToRevisionsConnectionWhereArgsTaxArray = {
  field?: InputMaybe<RootQueryToRevisionsConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<RootQueryToRevisionsConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToRevisionsConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<RootQueryToRevisionsConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToRevisionsConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum RootQueryToRevisionsConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the RootQueryToScreenImagesLayoutConnection connection */
export type RootQueryToScreenImagesLayoutConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<RootQueryToScreenImagesLayoutConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToScreenImagesLayoutConnectionWhereArgsTaxArray = {
  field?: InputMaybe<RootQueryToScreenImagesLayoutConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<RootQueryToScreenImagesLayoutConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToScreenImagesLayoutConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<RootQueryToScreenImagesLayoutConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToScreenImagesLayoutConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum RootQueryToScreenImagesLayoutConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the RootQueryToSectionConnection connection */
export type RootQueryToSectionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<RootQueryToSectionConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToSectionConnectionWhereArgsTaxArray = {
  field?: InputMaybe<RootQueryToSectionConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<RootQueryToSectionConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToSectionConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<RootQueryToSectionConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToSectionConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum RootQueryToSectionConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the RootQueryToSectionLayoutConnection connection */
export type RootQueryToSectionLayoutConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the RootQueryToSkillConnection connection */
export type RootQueryToSkillConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<RootQueryToSkillConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToSkillConnectionWhereArgsTaxArray = {
  field?: InputMaybe<RootQueryToSkillConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<RootQueryToSkillConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToSkillConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<RootQueryToSkillConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToSkillConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum RootQueryToSkillConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of userIds to include. */
  include?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The user login. */
  login?: InputMaybe<Scalars['String']['input']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The user nicename. */
  nicename?: InputMaybe<Scalars['String']['input']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<UsersConnectionOrderbyInput>>>;
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role?: InputMaybe<UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: InputMaybe<Array<InputMaybe<UsersConnectionSearchColumnEnum>>>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ScreenImagesLayoutIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The strategy to use when loading the script */
export enum ScriptLoadingStrategyEnum {
  /** Use the script `async` attribute */
  Async = 'ASYNC',
  /** Use the script `defer` attribute */
  Defer = 'DEFER'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum SectionIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum SectionLayoutIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the SectionLayoutToContentNodeConnection connection */
export type SectionLayoutToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfSectionLayoutEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<SectionLayoutToContentNodeConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SectionLayoutToContentNodeConnectionWhereArgsTaxArray = {
  field?: InputMaybe<SectionLayoutToContentNodeConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<SectionLayoutToContentNodeConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type SectionLayoutToContentNodeConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<SectionLayoutToContentNodeConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum SectionLayoutToContentNodeConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum SectionLayoutToContentNodeConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the SectionLayoutToSectionConnection connection */
export type SectionLayoutToSectionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<SectionLayoutToSectionConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SectionLayoutToSectionConnectionWhereArgsTaxArray = {
  field?: InputMaybe<SectionLayoutToSectionConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<SectionLayoutToSectionConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type SectionLayoutToSectionConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<SectionLayoutToSectionConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum SectionLayoutToSectionConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum SectionLayoutToSectionConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Set relationships between the section to sectionLayouts */
export type SectionSectionLayoutsInput = {
  /** If true, this will append the sectionLayout to existing related sectionLayouts. If false, this will replace existing relationships. Default true. */
  append?: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<SectionSectionLayoutsNodeInput>>>;
};

/** List of sectionLayouts to connect the section to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type SectionSectionLayoutsNodeInput = {
  /** The description of the sectionLayout. This field is used to set a description of the sectionLayout if a new one is created during the mutation. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the sectionLayout. If present, this will be used to connect to the section. If no existing sectionLayout exists with this ID, no connection will be made. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the sectionLayout. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the sectionLayout. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Arguments for filtering the SectionToSectionLayoutConnection connection */
export type SectionToSectionLayoutConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments for filtering the SectionToTermNodeConnection connection */
export type SectionToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order?: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the user's username or email address. */
  username: Scalars['String']['input'];
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum SkillIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfTagEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<TagToContentNodeConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TagToContentNodeConnectionWhereArgsTaxArray = {
  field?: InputMaybe<TagToContentNodeConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<TagToContentNodeConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type TagToContentNodeConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<TagToContentNodeConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum TagToContentNodeConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum TagToContentNodeConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxQuery?: InputMaybe<TagToPostConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TagToPostConnectionWhereArgsTaxArray = {
  field?: InputMaybe<TagToPostConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<TagToPostConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type TagToPostConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<TagToPostConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum TagToPostConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum TagToPostConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Allowed taxonomies */
export enum TaxonomyEnum {
  /** Taxonomy enum category */
  Category = 'CATEGORY',
  /** Taxonomy enum images-layout-value */
  Imageslayoutvalue = 'IMAGESLAYOUTVALUE',
  /** Taxonomy enum post_format */
  Postformat = 'POSTFORMAT',
  /** Taxonomy enum project-category */
  Projectcategory = 'PROJECTCATEGORY',
  /** Taxonomy enum project-technology */
  Projecttechnology = 'PROJECTTECHNOLOGY',
  /** Taxonomy enum section-layout */
  Sectionlayout = 'SECTIONLAYOUT',
  /** Taxonomy enum post_tag */
  Tag = 'TAG'
}

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME'
}

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  /** Order the connection by item count. */
  Count = 'COUNT',
  /** Order the connection by description. */
  Description = 'DESCRIPTION',
  /** Order the connection by name. */
  Name = 'NAME',
  /** Order the connection by slug. */
  Slug = 'SLUG',
  /** Order the connection by term group. */
  TermGroup = 'TERM_GROUP',
  /** Order the connection by term id. */
  TermId = 'TERM_ID',
  /** Order the connection by term order. */
  TermOrder = 'TERM_ORDER'
}

/** Input for the updateCategory mutation. */
export type UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the category object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the category object to update */
  id: Scalars['ID']['input'];
  /** The name of the category object to mutate */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateComment mutation. */
export type UpdateCommentInput = {
  /** The approval status of the comment. */
  approved?: InputMaybe<Scalars['String']['input']>;
  /** The name of the comment's author. */
  author?: InputMaybe<Scalars['String']['input']>;
  /** The email of the comment's author. */
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  /** The url of the comment's author. */
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The database ID of the post object the comment belongs to. */
  commentOn?: InputMaybe<Scalars['Int']['input']>;
  /** Content of the comment. */
  content?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the comment being updated. */
  id: Scalars['ID']['input'];
  /** Parent comment ID of current comment. */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** The approval status of the comment */
  status?: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateImagesLayout mutation. */
export type UpdateImagesLayoutInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the imagesLayout object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set connections between the imagesLayout and imagesLayoutsValues */
  imagesLayoutsValues?: InputMaybe<ImagesLayoutImagesLayoutsValuesInput>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateImagesLayoutValue mutation. */
export type UpdateImagesLayoutValueInput = {
  /** The slug that the images-layout-value will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the images-layout-value object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the imagesLayoutValue object to update */
  id: Scalars['ID']['input'];
  /** The name of the images-layout-value object to mutate */
  name?: InputMaybe<Scalars['String']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateMediaItem mutation. */
export type UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: InputMaybe<Scalars['String']['input']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: InputMaybe<Scalars['ID']['input']>;
  /** The caption for the mediaItem */
  caption?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the mediaItem */
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  /** The date of the mediaItem */
  date?: InputMaybe<Scalars['String']['input']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: InputMaybe<Scalars['String']['input']>;
  /** Description of the mediaItem */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The file name of the mediaItem */
  filePath?: InputMaybe<Scalars['String']['input']>;
  /** The file type of the mediaItem */
  fileType?: InputMaybe<MimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: Scalars['ID']['input'];
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** The ping status for the mediaItem */
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the mediaItem */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the mediaItem */
  status?: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updatePage mutation. */
export type UpdatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the page object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent object */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updatePostFormat mutation. */
export type UpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the post_format object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the postFormat object to update */
  id: Scalars['ID']['input'];
  /** The name of the post_format object to mutate */
  name?: InputMaybe<Scalars['String']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updatePost mutation. */
export type UpdatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: InputMaybe<Scalars['ID']['input']>;
  /** Set connections between the post and categories */
  categories?: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  content?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  excerpt?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the post object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The ping status for the object */
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  /** URLs that have been pinged. */
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: InputMaybe<PostTagsInput>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
  /** URLs queued to be pinged. */
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Input for the updateProjectCategory mutation. */
export type UpdateProjectCategoryInput = {
  /** The slug that the project-category will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the project-category object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the projectCategory object to update */
  id: Scalars['ID']['input'];
  /** The name of the project-category object to mutate */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the project-category that should be set as the parent */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateProject mutation. */
export type UpdateProjectInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the project object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Set connections between the project and projectCategories */
  projectCategories?: InputMaybe<ProjectProjectCategoriesInput>;
  /** Set connections between the project and projectTechnologies */
  projectTechnologies?: InputMaybe<ProjectProjectTechnologiesInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateProjectTechnology mutation. */
export type UpdateProjectTechnologyInput = {
  /** The slug that the project-technology will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the project-technology object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the projectTechnology object to update */
  id: Scalars['ID']['input'];
  /** The name of the project-technology object to mutate */
  name?: InputMaybe<Scalars['String']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateReview mutation. */
export type UpdateReviewInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the review object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateScreenImagesLayout mutation. */
export type UpdateScreenImagesLayoutInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the screenImagesLayout object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateSection mutation. */
export type UpdateSectionInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the section object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Set connections between the section and sectionLayouts */
  sectionLayouts?: InputMaybe<SectionSectionLayoutsInput>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateSectionLayout mutation. */
export type UpdateSectionLayoutInput = {
  /** The slug that the section-layout will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the section-layout object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the sectionLayout object to update */
  id: Scalars['ID']['input'];
  /** The name of the section-layout object to mutate */
  name?: InputMaybe<Scalars['String']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateSettings mutation. */
export type UpdateSettingsInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Allow people to submit comments on new posts. */
  discussionSettingsDefaultCommentStatus?: InputMaybe<Scalars['String']['input']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  discussionSettingsDefaultPingStatus?: InputMaybe<Scalars['String']['input']>;
  /** A date format for all date strings. */
  generalSettingsDateFormat?: InputMaybe<Scalars['String']['input']>;
  /** Site tagline. */
  generalSettingsDescription?: InputMaybe<Scalars['String']['input']>;
  /** This address is used for admin purposes, like new user notification. */
  generalSettingsEmail?: InputMaybe<Scalars['String']['input']>;
  /** WordPress locale code. */
  generalSettingsLanguage?: InputMaybe<Scalars['String']['input']>;
  /** A day number of the week that the week should start on. */
  generalSettingsStartOfWeek?: InputMaybe<Scalars['Int']['input']>;
  /** A time format for all time strings. */
  generalSettingsTimeFormat?: InputMaybe<Scalars['String']['input']>;
  /** A city in the same timezone as you. */
  generalSettingsTimezone?: InputMaybe<Scalars['String']['input']>;
  /** Site title. */
  generalSettingsTitle?: InputMaybe<Scalars['String']['input']>;
  /** Site URL. */
  generalSettingsUrl?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the page that should display the latest posts */
  readingSettingsPageForPosts?: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the page that should be displayed on the front page */
  readingSettingsPageOnFront?: InputMaybe<Scalars['Int']['input']>;
  /** Blog pages show at most. */
  readingSettingsPostsPerPage?: InputMaybe<Scalars['Int']['input']>;
  /** What to show on the front page */
  readingSettingsShowOnFront?: InputMaybe<Scalars['String']['input']>;
  themeisleSdkSettingsSettingsThemeisleSdkPromotions?: InputMaybe<Scalars['String']['input']>;
  themeisleSdkSettingsSettingsThemeisleSdkPromotionsNeveFseInstalled?: InputMaybe<Scalars['Boolean']['input']>;
  themeisleSdkSettingsSettingsThemeisleSdkPromotionsOptimoleInstalled?: InputMaybe<Scalars['Boolean']['input']>;
  themeisleSdkSettingsSettingsThemeisleSdkPromotionsOtterInstalled?: InputMaybe<Scalars['Boolean']['input']>;
  themeisleSdkSettingsSettingsThemeisleSdkPromotionsRopInstalled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Default post category. */
  writingSettingsDefaultCategory?: InputMaybe<Scalars['Int']['input']>;
  /** Default post format. */
  writingSettingsDefaultPostFormat?: InputMaybe<Scalars['String']['input']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  writingSettingsUseSmilies?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for the updateSkill mutation. */
export type UpdateSkillInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the skill object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock?: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status?: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateTag mutation. */
export type UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the post_tag object */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the tag object to update */
  id: Scalars['ID']['input'];
  /** The name of the post_tag object to mutate */
  name?: InputMaybe<Scalars['String']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Input for the updateUser mutation. */
export type UpdateUserInput = {
  /** User's AOL IM account. */
  aim?: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** A string containing content about the user. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /** A string containing the user's email address. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** 	The user's first name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the user */
  id: Scalars['ID']['input'];
  /** User's Jabber account. */
  jabber?: InputMaybe<Scalars['String']['input']>;
  /** The user's last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** User's locale. */
  locale?: InputMaybe<Scalars['String']['input']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: InputMaybe<Scalars['String']['input']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the plain text password for the user. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: InputMaybe<Scalars['String']['input']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: InputMaybe<Scalars['String']['input']>;
  /** An array of roles to be assigned to the user. */
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
  /** User's Yahoo IM account. */
  yim?: InputMaybe<Scalars['String']['input']>;
};

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME'
}

/** Names of available user roles */
export enum UserRoleEnum {
  /** User role with specific capabilities */
  Administrator = 'ADMINISTRATOR',
  /** User role with specific capabilities */
  Author = 'AUTHOR',
  /** User role with specific capabilities */
  Contributor = 'CONTRIBUTOR',
  /** User role with specific capabilities */
  Editor = 'EDITOR',
  /** User role with specific capabilities */
  SeoEditor = 'SEO_EDITOR',
  /** User role with specific capabilities */
  SeoManager = 'SEO_MANAGER',
  /** User role with specific capabilities */
  Subscriber = 'SUBSCRIBER'
}

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType?: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName?: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<UserToMediaItemConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserToMediaItemConnectionWhereArgsTaxArray = {
  field?: InputMaybe<UserToMediaItemConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<UserToMediaItemConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type UserToMediaItemConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<UserToMediaItemConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToMediaItemConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum UserToMediaItemConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<UserToPageConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserToPageConnectionWhereArgsTaxArray = {
  field?: InputMaybe<UserToPageConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<UserToPageConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type UserToPageConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<UserToPageConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToPageConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum UserToPageConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  categoryName?: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  tagId?: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxQuery?: InputMaybe<UserToPostConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserToPostConnectionWhereArgsTaxArray = {
  field?: InputMaybe<UserToPostConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<UserToPostConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type UserToPostConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<UserToPostConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToPostConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum UserToPostConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Arguments for filtering the UserToRevisionsConnection connection */
export type UserToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: InputMaybe<PostStatusEnum>;
  taxQuery?: InputMaybe<UserToRevisionsConnectionWhereArgsTaxQuery>;
  /** Title of the object */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserToRevisionsConnectionWhereArgsTaxArray = {
  field?: InputMaybe<UserToRevisionsConnectionWhereArgsTaxQueryField>;
  /** Whether or not to include children for hierarchical taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<UserToRevisionsConnectionWhereArgsTaxQueryOperator>;
  taxonomy?: InputMaybe<TaxonomyEnum>;
  /** A list of term slugs */
  terms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Query objects based on taxonomy parameters */
export type UserToRevisionsConnectionWhereArgsTaxQuery = {
  relation?: InputMaybe<RelationEnum>;
  taxArray?: InputMaybe<Array<InputMaybe<UserToRevisionsConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToRevisionsConnectionWhereArgsTaxQueryField {
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  TaxonomyId = 'TAXONOMY_ID'
}

export enum UserToRevisionsConnectionWhereArgsTaxQueryOperator {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL'
}

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
  /** The field name used to sort the results. */
  field: UsersConnectionOrderbyEnum;
  /** The cardinality of the order of the connection */
  order?: InputMaybe<OrderEnum>;
};

/** Column used for searching for users. */
export enum UsersConnectionSearchColumnEnum {
  /** The user's email address. */
  Email = 'EMAIL',
  /** The globally unique ID. */
  Id = 'ID',
  /** The username the User uses to login with. */
  Login = 'LOGIN',
  /** A URL-friendly name for the user. The default is the user's username. */
  Nicename = 'NICENAME',
  /** The URL of the user's website. */
  Url = 'URL'
}

export type GetArticleQueryQueryVariables = Exact<{
  slug: Scalars['ID']['input'];
}>;


export type GetArticleQueryQuery = { __typename?: 'RootQuery', post?: { __typename?: 'Post', slug?: string | null, title?: string | null, id: string, content?: string | null, date?: string | null, excerpt?: string | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', slug?: string | null, name?: string | null }> } | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', guid?: string | null } } | null } | null };

export type GetArticlesByCategoryQueryQueryVariables = Exact<{
  category: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetArticlesByCategoryQueryQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', slug?: string | null, title?: string | null, id: string, content?: string | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', slug?: string | null, name?: string | null }> } | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', guid?: string | null } } | null }>, pageInfo: { __typename?: 'RootQueryToPostConnectionPageInfo', endCursor?: string | null, hasNextPage: boolean } } | null };

export type GetArticlesQueryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetArticlesQueryQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', slug?: string | null, title?: string | null, id: string, content?: string | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', slug?: string | null, name?: string | null }> } | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', guid?: string | null } } | null }>, pageInfo: { __typename?: 'RootQueryToPostConnectionPageInfo', endCursor?: string | null, hasNextPage: boolean } } | null };

export type GetArticlesQueryWithLimitQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
}>;


export type GetArticlesQueryWithLimitQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', slug?: string | null, title?: string | null, id: string, content?: string | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', slug?: string | null, name?: string | null }> } | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', guid?: string | null } } | null }> } | null };

export type GetCategoryQueryQueryVariables = Exact<{
  slug: Scalars['ID']['input'];
}>;


export type GetCategoryQueryQuery = { __typename?: 'RootQuery', category?: { __typename?: 'Category', id: string, name?: string | null, slug?: string | null, description?: string | null } | null };

export type GetRelatedArticlesQueryVariables = Exact<{
  category: Scalars['String']['input'];
  articleId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>>;
  limit: Scalars['Int']['input'];
}>;


export type GetRelatedArticlesQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', content?: string | null, title?: string | null, slug?: string | null, id: string, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', guid?: string | null } } | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name?: string | null, slug?: string | null }> } | null }> } | null };

export type GetCategoriesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQueryQuery = { __typename?: 'RootQuery', projectCategories?: { __typename?: 'RootQueryToProjectCategoryConnection', edges: Array<{ __typename?: 'RootQueryToProjectCategoryConnectionEdge', node: { __typename?: 'ProjectCategory', name?: string | null } }> } | null };

export type GetProjectQueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProjectQueryQuery = { __typename?: 'RootQuery', project?: { __typename?: 'Project', title?: string | null, projectFields?: { __typename?: 'ProjectFields', description?: string | null, projectUrl?: string | null, mainColor?: string | null, thumbnail?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', guid?: string | null } } | null, sections?: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'ImagesLayout' } | { __typename?: 'MediaItem' } | { __typename?: 'Page' } | { __typename?: 'Post' } | { __typename?: 'Project' } | { __typename?: 'Review' } | { __typename?: 'ScreenImagesLayout' } | { __typename?: 'Section', sectionsFields?: { __typename?: 'SectionsFields', text?: string | null, title?: string | null, buttonText?: string | null, buttonUrl?: string | null, layout?: { __typename?: 'AcfTermNodeConnection', nodes: Array<{ __typename?: 'Category', slug?: string | null } | { __typename?: 'ImagesLayoutValue', slug?: string | null } | { __typename?: 'PostFormat', slug?: string | null } | { __typename?: 'ProjectCategory', slug?: string | null } | { __typename?: 'ProjectTechnology', slug?: string | null } | { __typename?: 'SectionLayout', slug?: string | null } | { __typename?: 'Tag', slug?: string | null }> } | null, imagesLayout?: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'ImagesLayout', imagesLayoutFields?: { __typename?: 'ImagesLayoutFields', imagesLayoutSm?: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'ImagesLayout' } | { __typename?: 'MediaItem' } | { __typename?: 'Page' } | { __typename?: 'Post' } | { __typename?: 'Project' } | { __typename?: 'Review' } | { __typename?: 'ScreenImagesLayout', screenImagesLayoutFields?: { __typename?: 'ScreenImagesLayoutFields', image1?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, image2?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, image3?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, image4?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | null } | { __typename?: 'Section' } | { __typename?: 'Skill' }> } | null, imagesLayoutMd?: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'ImagesLayout' } | { __typename?: 'MediaItem' } | { __typename?: 'Page' } | { __typename?: 'Post' } | { __typename?: 'Project' } | { __typename?: 'Review' } | { __typename?: 'ScreenImagesLayout', screenImagesLayoutFields?: { __typename?: 'ScreenImagesLayoutFields', image1?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, image2?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, image3?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, image4?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | null } | { __typename?: 'Section' } | { __typename?: 'Skill' }> } | null, imagesLayoutXl?: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'ImagesLayout' } | { __typename?: 'MediaItem' } | { __typename?: 'Page' } | { __typename?: 'Post' } | { __typename?: 'Project' } | { __typename?: 'Review' } | { __typename?: 'ScreenImagesLayout', screenImagesLayoutFields?: { __typename?: 'ScreenImagesLayoutFields', image1?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, image2?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, image3?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, image4?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | null } | { __typename?: 'Section' } | { __typename?: 'Skill' }> } | null, imagesLayoutType?: { __typename?: 'AcfTermNodeConnection', nodes: Array<{ __typename?: 'Category', slug?: string | null } | { __typename?: 'ImagesLayoutValue', slug?: string | null } | { __typename?: 'PostFormat', slug?: string | null } | { __typename?: 'ProjectCategory', slug?: string | null } | { __typename?: 'ProjectTechnology', slug?: string | null } | { __typename?: 'SectionLayout', slug?: string | null } | { __typename?: 'Tag', slug?: string | null }> } | null } | null } | { __typename?: 'MediaItem' } | { __typename?: 'Page' } | { __typename?: 'Post' } | { __typename?: 'Project' } | { __typename?: 'Review' } | { __typename?: 'ScreenImagesLayout' } | { __typename?: 'Section' } | { __typename?: 'Skill' }> } | null } | null, sectionLayouts?: { __typename?: 'SectionToSectionLayoutConnection', nodes: Array<{ __typename?: 'SectionLayout', slug?: string | null }> } | null } | { __typename?: 'Skill' }> } | null, category?: { __typename?: 'AcfTermNodeConnection', edges: Array<{ __typename?: 'AcfTermNodeConnectionEdge', node: { __typename?: 'Category', name?: string | null } | { __typename?: 'ImagesLayoutValue', name?: string | null } | { __typename?: 'PostFormat', name?: string | null } | { __typename?: 'ProjectCategory', name?: string | null } | { __typename?: 'ProjectTechnology', name?: string | null } | { __typename?: 'SectionLayout', name?: string | null } | { __typename?: 'Tag', name?: string | null } }> } | null, favicon?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', guid?: string | null } } | null, technologies?: { __typename?: 'AcfTermNodeConnection', nodes: Array<{ __typename?: 'Category', name?: string | null, slug?: string | null, description?: string | null } | { __typename?: 'ImagesLayoutValue', name?: string | null, slug?: string | null, description?: string | null } | { __typename?: 'PostFormat', name?: string | null, slug?: string | null, description?: string | null } | { __typename?: 'ProjectCategory', name?: string | null, slug?: string | null, description?: string | null } | { __typename?: 'ProjectTechnology', name?: string | null, slug?: string | null, description?: string | null } | { __typename?: 'SectionLayout', name?: string | null, slug?: string | null, description?: string | null } | { __typename?: 'Tag', name?: string | null, slug?: string | null, description?: string | null }> } | null } | null } | null };

export type GetProjectsByCategoriesQueryQueryVariables = Exact<{
  categories: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProjectsByCategoriesQueryQuery = { __typename?: 'RootQuery', projects?: { __typename?: 'RootQueryToProjectConnection', edges: Array<{ __typename?: 'RootQueryToProjectConnectionEdge', node: { __typename?: 'Project', title?: string | null, projectFields?: { __typename?: 'ProjectFields', description?: string | null, projectUrl?: string | null, category?: { __typename?: 'AcfTermNodeConnection', edges: Array<{ __typename?: 'AcfTermNodeConnectionEdge', node: { __typename?: 'Category', name?: string | null } | { __typename?: 'ImagesLayoutValue', name?: string | null } | { __typename?: 'PostFormat', name?: string | null } | { __typename?: 'ProjectCategory', name?: string | null } | { __typename?: 'ProjectTechnology', name?: string | null } | { __typename?: 'SectionLayout', name?: string | null } | { __typename?: 'Tag', name?: string | null } }> } | null, thumbnail?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', guid?: string | null } } | null } | null } }>, pageInfo: { __typename?: 'RootQueryToProjectConnectionPageInfo', endCursor?: string | null, hasNextPage: boolean } } | null };

export type GetProjectsQueryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProjectsQueryQuery = { __typename?: 'RootQuery', projects?: { __typename?: 'RootQueryToProjectConnection', edges: Array<{ __typename?: 'RootQueryToProjectConnectionEdge', node: { __typename?: 'Project', title?: string | null, projectFields?: { __typename?: 'ProjectFields', description?: string | null, projectUrl?: string | null, category?: { __typename?: 'AcfTermNodeConnection', edges: Array<{ __typename?: 'AcfTermNodeConnectionEdge', node: { __typename?: 'Category', name?: string | null } | { __typename?: 'ImagesLayoutValue', name?: string | null } | { __typename?: 'PostFormat', name?: string | null } | { __typename?: 'ProjectCategory', name?: string | null } | { __typename?: 'ProjectTechnology', name?: string | null } | { __typename?: 'SectionLayout', name?: string | null } | { __typename?: 'Tag', name?: string | null } }> } | null, thumbnail?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', guid?: string | null } } | null } | null } }>, pageInfo: { __typename?: 'RootQueryToProjectConnectionPageInfo', endCursor?: string | null, hasNextPage: boolean } } | null };

export type GetReviewsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReviewsQueryQuery = { __typename?: 'RootQuery', reviews?: { __typename?: 'RootQueryToReviewConnection', nodes: Array<{ __typename?: 'Review', title?: string | null, reviewFields?: { __typename?: 'ReviewFields', countryCode?: string | null, review?: string | null, projectUrl?: string | null, username?: string | null, userAvatar?: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', guid?: string | null } } | null } | null }> } | null };

export type GetSkillsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkillsQueryQuery = { __typename?: 'RootQuery', skills?: { __typename?: 'RootQueryToSkillConnection', nodes: Array<{ __typename?: 'Skill', title?: string | null, skillFields?: { __typename?: 'SkillFields', descriptionMd?: string | null, descriptionSm?: string | null, descriptionXl?: string | null, extendedTitleMd?: string | null, extendedTitleSm?: string | null, extendedTitleXl?: string | null, labelsMd?: string | null, labelsSm?: string | null, labelsXl?: string | null } | null }> } | null };


export const GetArticleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticleQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"idType"},"value":{"kind":"EnumValue","value":"SLUG"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}}]}}]}}]} as unknown as DocumentNode<GetArticleQueryQuery, GetArticleQueryQueryVariables>;
export const GetArticlesByCategoryQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticlesByCategoryQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guid"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetArticlesByCategoryQueryQuery, GetArticlesByCategoryQueryQueryVariables>;
export const GetArticlesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticlesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guid"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetArticlesQueryQuery, GetArticlesQueryQueryVariables>;
export const GetArticlesQueryWithLimitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticlesQueryWithLimit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guid"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetArticlesQueryWithLimitQuery, GetArticlesQueryWithLimitQueryVariables>;
export const GetCategoryQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategoryQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idType"},"value":{"kind":"EnumValue","value":"SLUG"}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetCategoryQueryQuery, GetCategoryQueryQueryVariables>;
export const GetRelatedArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRelatedArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"categoryName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"notIn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRelatedArticlesQuery, GetRelatedArticlesQueryVariables>;
export const GetCategoriesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategoriesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQueryQuery, GetCategoriesQueryQueryVariables>;
export const GetProjectQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"idType"},"value":{"kind":"EnumValue","value":"SLUG"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"projectFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"projectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Section"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sectionsFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"imagesLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesLayout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imagesLayoutFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imagesLayoutSm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScreenImagesLayout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"screenImagesLayoutFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"imagesLayoutMd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScreenImagesLayout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"screenImagesLayoutFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"imagesLayoutXl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ScreenImagesLayout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"screenImagesLayoutFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"imagesLayoutType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sectionLayouts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"favicon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mainColor"}},{"kind":"Field","name":{"kind":"Name","value":"technologies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectQueryQuery, GetProjectQueryQueryVariables>;
export const GetProjectsByCategoriesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectsByCategoriesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categories"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"taxQuery"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"taxArray"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"taxonomy"},"value":{"kind":"EnumValue","value":"PROJECTCATEGORY"}},{"kind":"ObjectField","name":{"kind":"Name","value":"terms"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categories"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"EnumValue","value":"NAME"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"projectFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"projectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guid"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectsByCategoriesQueryQuery, GetProjectsByCategoriesQueryQueryVariables>;
export const GetProjectsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"projectFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"projectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guid"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectsQueryQuery, GetProjectsQueryQueryVariables>;
export const GetReviewsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getReviewsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reviewFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"userAvatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"projectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetReviewsQueryQuery, GetReviewsQueryQueryVariables>;
export const GetSkillsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSkillsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"skillFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"descriptionMd"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionSm"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionXl"}},{"kind":"Field","name":{"kind":"Name","value":"extendedTitleMd"}},{"kind":"Field","name":{"kind":"Name","value":"extendedTitleSm"}},{"kind":"Field","name":{"kind":"Name","value":"extendedTitleXl"}},{"kind":"Field","name":{"kind":"Name","value":"labelsMd"}},{"kind":"Field","name":{"kind":"Name","value":"labelsSm"}},{"kind":"Field","name":{"kind":"Name","value":"labelsXl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSkillsQueryQuery, GetSkillsQueryQueryVariables>;