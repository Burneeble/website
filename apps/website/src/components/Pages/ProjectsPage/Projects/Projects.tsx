"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectsProps } from "./Projects.types";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  GET_PROJECTS_BY_CATEGORIES_WITH_EXCLUSION_QUERY,
  GET_PROJECTS_WITH_EXCLUSION_SIMPLE_QUERY,
  ProjectModel,
} from "@/services/ProjectService";
import { useCallback, useEffect, useState } from "react";
import {
  Button,
  Label,
  NotFound,
  NotificationHandler,
  ProjectPreview,
  ProjectPreviewSkeleton,
  useClientInfoService,
  usePopup,
  useScrollLock,
} from "@burneeble/ui-components";
import { useQuery } from "@apollo/client";
import { 
  GetProjectsByCategoriesWithExclusionQueryQuery,
  GetProjectsWithExclusionSimpleQueryQuery 
} from "@/__generated__/graphql";
import { cn } from "@/lib/utils";
import { FilterPopup, SearchPopup } from "./components";
import RoundedWrapper from "@/components/RoundedWrapper";
import Grid from "@/components/Grid";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Projects = (props: ProjectsProps) => {
  //States
  const [projects, setProjects] = useState<Array<ProjectModel> | null>(null);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [activeCategories, setActiveCategories] = useState<
    Array<(typeof props.categories)[number]>
  >([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [endCursor, setEndCursor] = useState<string>("0");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const batchSize = props.batchSize || 3; // Default to 3 if not specified
  const [isFirstRender, setIsFirstRender] = useState<number>(0);

  //Hooks
  const { screen } = useClientInfoService();
  const categoriesPopupLogic = usePopup();
  const searchPopupLogic = usePopup();
  const { lockScroll, unlockScroll } = useScrollLock();
  // Use different queries based on whether categories are selected
  const hasActiveCategories = activeCategories.length > 0;
  const query = hasActiveCategories 
    ? GET_PROJECTS_BY_CATEGORIES_WITH_EXCLUSION_QUERY
    : GET_PROJECTS_WITH_EXCLUSION_SIMPLE_QUERY;
    
  // Build variables object based on query type
  const variables = hasActiveCategories
    ? {
        includeCategories: activeCategories,
        excludeCategories: props.excludeCategories || [],
        limit: batchSize,
        offset: endCursor,
        search: searchQuery,
      }
    : {
        excludeCategories: props.excludeCategories || [],
        limit: batchSize,
        offset: endCursor,
        search: searchQuery,
      };
      
  const { data: projectsData, fetchMore: fetchMoreProjects } = useQuery(
    query,
    { variables: variables as any } // Type assertion to handle different variable shapes
  );

  //Effects
  useEffect(() => {
    if (isFirstRender < 2) setIsFirstRender((prev) => prev + 1);
    else {
      triggerRefresh();
    }
  }, [activeCategories]);

  useEffect(() => {
    if (isFirstRender < 2) setIsFirstRender((prev) => prev + 1);
    else {
      if (endCursor === "tmp") setEndCursor("0");
      if (endCursor === "0") fetchProjects();
    }
  }, [endCursor]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (!["sm", "md"].includes(screen)) {
        if (searchQuery === null) return;
        triggerRefresh();
      }
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (projectsData && !projects) {
      setEndCursor(projectsData!.projects?.pageInfo.endCursor || "0");
      setHasNextPage(projectsData!.projects?.pageInfo.hasNextPage || false);
      const projectsInfo = projectFormatter(projectsData!);

      setProjects(projectsInfo);
      setIsLoading(false);
    }
  }, [projectsData]);

  useEffect(() => {
    if (searchPopupLogic.isPopupOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [searchPopupLogic.isPopupOpen]);

  //Methods
  const fetchProjects = useCallback(async () => {
    setIsLoading(true);
    try {
      if (!fetchMoreProjects) return;
      
      const hasActiveCategories = activeCategories.length > 0;
      const variables = hasActiveCategories
        ? {
            includeCategories: activeCategories,
            excludeCategories: props.excludeCategories || [],
            limit: batchSize,
            offset: endCursor,
            search: searchQuery,
          }
        : {
            excludeCategories: props.excludeCategories || [],
            limit: batchSize,
            offset: endCursor,
            search: searchQuery,
          };
          
      const { data: res } = await fetchMoreProjects({ variables });

      const data = res;
      setEndCursor(data.projects?.pageInfo.endCursor || "0");
      setHasNextPage(data.projects?.pageInfo.hasNextPage || false);
      const tmp = projectFormatter(data);

      if (tmp) {
        setProjects((prev) => [...(prev || []), ...tmp]);
      }
    } catch (e) {
      console.log(e);
      NotificationHandler.instance.error("Error fetching projects");
    }
    setIsLoading(false);
  }, [activeCategories, batchSize, endCursor, fetchMoreProjects, props.excludeCategories, searchQuery]);

  const triggerRefresh = () => {
    setIsLoading(true);
    setEndCursor("tmp");
    setProjects([]);
  };

  const projectFormatter = (
    data: GetProjectsByCategoriesWithExclusionQueryQuery | GetProjectsWithExclusionSimpleQueryQuery
  ): ProjectModel[] | null => {
    const projectsInfo: ProjectModel[] | null = data.projects
      ? data.projects?.edges.map((edge) => {
          const project = new ProjectModel();
          project.title = edge.node.title || "";
          project.description = edge.node.projectFields?.description || "";
          project.projectUrl = edge.node.projectFields?.projectUrl || "";
          project.thumbnailUrl =
            edge.node.projectFields?.thumbnail?.node.guid || "";
          project.categories = edge.node.projectFields?.category?.edges
            .map((c) => c.node.name)
            .filter((c) => {
              return typeof c === "string";
            }) || ["Dapp"];
          return project;
        })
      : null;

    console.log("projectsInfo", projectsInfo);

    return projectsInfo;
  };

  return (
    <>
      {["sm", "md"].includes(screen) && (
        <SearchPopup
          categories={props.categories}
          activeCategories={activeCategories}
          setActiveCategories={setActiveCategories}
          popupLogic={searchPopupLogic}
        />
      )}
      <section className={`projects-section`}>
        <RoundedWrapper className="tw-pb-[90px] tw-pt-[50px]">
          {!props.categories ? (
            <NotFound
              title="Something went wrong"
              text="Sorry, there seems to be a problem finding the projects. Please try again later"
              icon={faCircleExclamation}
            />
          ) : (
            <>
              <div
                className={`
                  header tw-inline-flex tw-h-[58px] tw-w-full tw-items-center
                  tw-justify-between tw-gap-[20px]

                  md:tw-h-[123px] md:tw-flex-col md:tw-items-start
                  md:tw-gap-[10px]

                  xl:tw-h-[70px] xl:tw-flex-row xl:tw-items-center
                `}
              >
                <h2
                  className={`
                    title tw-whitespace-nowrap tw-font-bowlby-one tw-font-normal
                    tw-text-white
                  `}
                >
                  {props.isPortfolio ? (
                    screen === "sm" ? (
                      "PORTFOLIO"
                    ) : (
                      <>
                        Portfolio{" "}
                        <span className={`cs-text-color-primary-gradient`}>
                          Collection
                        </span>
                      </>
                    )
                  ) : (
                    screen === "sm" ? (
                      "GALLERY"
                    ) : (
                      <>
                        Gallery{" "}
                        <span className={`cs-text-color-primary-gradient`}>
                          on Fire!
                        </span>
                      </>
                    )
                  )}
                </h2>
                <div
                  className={`
                    icons tw-flex tw-items-center tw-justify-end tw-gap-[5px]

                    md:tw-w-full
                  `}
                >
                  <div
                    className={cn(
                      `
                        icon !tw-h-[40px]

                        md:tw-flex-1

                        xl:tw-max-w-[630px]
                      `,
                      searchPopupLogic.isPopupOpen && "opened"
                    )}
                    onClick={() => {
                      if (["sm", "md"].includes(screen)) {
                        searchPopupLogic.openPopup();
                      }
                    }}
                  >
                    {!["sm", "md"].includes(screen) && (
                      <input
                        value={searchQuery || ""}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                        }}
                        placeholder="Search Project Name..."
                        className={`
                          p-default tw-flex-1 tw-bg-[rgba(0,0,0,0)]
                          tw-font-inter tw-text-headings tw-outline-none
                        `}
                      />
                    )}
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className={`tw-h-[20px]]`}
                    />
                  </div>
                  {["sm", "md", "lg"].includes(screen) && (
                    <div
                      className={cn(
                        `icon tw-relative`,
                        categoriesPopupLogic.isPopupOpen && "opened",
                        activeCategories.length > 0 && "active"
                      )}
                      onClick={() => {
                        setTimeout(() => {
                          if (!categoriesPopupLogic.isPopupOpen) {
                            categoriesPopupLogic.openPopup();
                          }
                        }, 500);
                      }}
                    >
                      <FontAwesomeIcon icon={faFilter} />
                      {["sm", "md", "lg"].includes(screen) && (
                        <FilterPopup
                          popupLogic={categoriesPopupLogic}
                          categories={props.categories}
                          activeCategories={activeCategories}
                          setActiveCategories={setActiveCategories}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
              {!["sm", "md", "lg"].includes(screen) && (
                <div
                  className={`
                    categories tw-flex tw-flex-wrap tw-gap-x-[17px]
                    tw-gap-y-[10px]
                  `}
                >
                  {props.categories.map((category, i) => {
                    return (
                      <Label
                        key={i}
                        text={category}
                        onClick={() => {
                          if (activeCategories.includes(category)) {
                            setActiveCategories((prev) =>
                              prev.filter((c) => c !== category)
                            );
                          } else
                            setActiveCategories((prev) => [...prev, category]);
                        }}
                        variant={
                          activeCategories.includes(category)
                            ? "active"
                            : "disabled"
                        }
                      />
                    );
                  })}
                </div>
              )}
              <Grid>
                {projects &&
                  projects.map((project, i) => {
                    return (
                      <ProjectPreview
                        key={i}
                        thumbnail={project.thumbnailUrl}
                        title={project.title}
                        categories={project.categories}
                        query={searchQuery || ""}
                        activeCategories={activeCategories}
                        setActiveCategories={setActiveCategories}
                      />
                    );
                  })}
                {isLoading &&
                  Array.from({ length: batchSize }).map((_, i) => {
                    return <ProjectPreviewSkeleton key={i} />;
                  })}
              </Grid>
              {projects && projects.length <= 0 && !isLoading && (
                <NotFound
                  title={"No Project Found"}
                  text={
                    "It looks like we haven't developed any projects with this information yet. Want to be the first?"
                  }
                />
              )}
              <div
                className={cn(
                  `
                    button-wrapper tw-flex tw-w-full tw-items-center
                    tw-justify-end tw-overflow-hidden tw-transition-all
                    tw-duration-500 tw-ease-in-out
                  `,
                  hasNextPage
                    ? "tw-h-[48px] tw-opacity-100"
                    : "tw-h-0 tw-opacity-0"
                )}
              >
                <Button
                  variant="secondary"
                  fit={screen === "sm" ? "full" : "inline"}
                  className={cn(
                    `
                      tw-mx-auto tw-mt-auto !tw-bg-black tw-px-[75px]

                      lg:tw-mr-0
                    `,
                    !hasNextPage && "tw-pointer-events-none"
                  )}
                  onClick={async () => {
                    setIsLoading(true);
                    await fetchProjects();
                    setIsLoading(false);
                  }}
                >
                  See More
                </Button>
              </div>
            </>
          )}
        </RoundedWrapper>
      </section>
    </>
  );
};

export default Projects;
