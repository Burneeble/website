"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectsProps } from "./Projects.types";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  GET_PROJECTS_BY_CATEGORIES_QUERY,
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
import { GetProjectsQueryQuery } from "@/__generated__/graphql";
import { cn } from "@/lib/utils";
import { FilterPopup, SearchPopup } from "./components";
import RoundedWrapper from "@/components/RoundedWrapper";
import Grid from "@/components/Grid";

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
  const batchSize = 3;
  const [isFirstRender, setIsFirstRender] = useState<number>(0);

  //Hooks
  const { screen } = useClientInfoService();
  const categoriesPopupLogic = usePopup();
  const searchPopupLogic = usePopup();
  const { lockScroll, unlockScroll } = useScrollLock();
  const { data: projectsData, fetchMore: fetchMoreProjects } = useQuery(
    GET_PROJECTS_BY_CATEGORIES_QUERY,
    {
      variables: {
        categories:
          activeCategories.length > 0 ? activeCategories : props.categories,
        limit: batchSize,
        offset: endCursor,
        search: searchQuery,
      },
    }
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
      const { data: res } = await fetchMoreProjects({
        variables: {
          categories:
            activeCategories.length > 0 ? activeCategories : props.categories,
          limit: batchSize,
          offset: endCursor,
          search: searchQuery,
        },
      });

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
  }, [activeCategories, batchSize, endCursor, fetchMoreProjects, searchQuery]);

  const triggerRefresh = () => {
    setIsLoading(true);
    setEndCursor("tmp");
    setProjects([]);
  };

  const projectFormatter = (
    data: GetProjectsQueryQuery
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
        <RoundedWrapper className="tw-pt-[50px] tw-pb-[90px]">
          <div
            className={`
              header tw-inline-flex tw-h-[58px] tw-w-full tw-items-center
              tw-justify-between tw-gap-[20px]

              md:tw-h-[123px] md:tw-flex-col md:tw-items-start md:tw-gap-[10px]

              xl:tw-h-[70px] xl:tw-flex-row xl:tw-items-center
            `}
          >
            <h2
              className={`
                title tw-whitespace-nowrap tw-font-bowlby-one tw-font-normal
                tw-text-white
              `}
            >
              {screen === "sm" ? (
                "GALLERY"
              ) : (
                <>
                  Gallery{" "}
                  <span className={`cs-text-color-primary-gradient`}>
                    on Fire!
                  </span>
                </>
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
                    icon

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
                      tw-flex-1 tw-bg-[rgba(0,0,0,0)] tw-font-inter tw-text-2xl
                      tw-text-headings tw-outline-none
                    `}
                  />
                )}
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className={`tw-max-h-[1.875rem]`}
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
            <div className="categories tw-flex tw-flex-wrap tw-gap-[17px]">
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
                      } else setActiveCategories((prev) => [...prev, category]);
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
                button-wrapper tw-flex tw-w-full tw-items-center tw-justify-end
                tw-overflow-hidden tw-transition-all tw-duration-500
                tw-ease-in-out
              `,
              hasNextPage ? "tw-h-[48px] tw-opacity-100" : "tw-h-0 tw-opacity-0"
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
        </RoundedWrapper>
      </section>
    </>
  );
};

export default Projects;
