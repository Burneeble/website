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
              sectionsFields {
                text
                title
                layout {
                  nodes {
                    slug
                  }
                }
                imagesLayout {
                  nodes {
                    ... on ImagesLayout {
                      imagesLayoutFields {
                        imagesLayoutSm {
                          nodes {
                            ... on ScreenImagesLayout {
                              screenImagesLayoutFields {
                                image1 {
                                  node {
                                    sourceUrl
                                  }
                                }
                                image2 {
                                  node {
                                    sourceUrl
                                  }
                                }
                                image3 {
                                  node {
                                    sourceUrl
                                  }
                                }
                                image4 {
                                  node {
                                    sourceUrl
                                  }
                                }
                              }
                            }
                          }
                        }
                        imagesLayoutMd {
                          nodes {
                            ... on ScreenImagesLayout {
                              screenImagesLayoutFields {
                                image1 {
                                  node {
                                    sourceUrl
                                  }
                                }
                                image2 {
                                  node {
                                    sourceUrl
                                  }
                                }
                                image3 {
                                  node {
                                    sourceUrl
                                  }
                                }
                                image4 {
                                  node {
                                    sourceUrl
                                  }
                                }
                              }
                            }
                          }
                        }
                        imagesLayoutXl {
                          nodes {
                            ... on ScreenImagesLayout {
                              screenImagesLayoutFields {
                                image1 {
                                  node {
                                    sourceUrl
                                  }
                                }
                                image2 {
                                  node {
                                    sourceUrl
                                  }
                                }
                                image3 {
                                  node {
                                    sourceUrl
                                  }
                                }
                                image4 {
                                  node {
                                    sourceUrl
                                  }
                                }
                              }
                            }
                          }
                        }
                        imagesLayoutType {
                          nodes {
                            slug
                          }
                        }
                      }
                    }
                  }
                }
                buttonText
                buttonUrl
              }
              sectionLayouts {
                nodes {
                  slug
                }
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
        technologies {
          nodes {
            name
            slug
            description
          }
        }
      }
    }
  }
`);
