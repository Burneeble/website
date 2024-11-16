"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectsProps } from "./Projects.types";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { GET_PROJECTS_QUERY, ProjectModel } from "@/services/ProjectService";
import { useEffect, useState } from "react";
import {
  Button,
  Label,
  NotificationHandler,
  ProjectPreview,
  ProjectPreviewSkeleton,
  useClientInfoService,
} from "@burneeble/ui-components";
import { useQuery } from "@apollo/client";
import { GetProjectsQueryQuery } from "@/__generated__/graphql";

const Projects = (props: ProjectsProps) => {
  //States
  const [projects, setProjects] = useState<Array<ProjectModel> | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategories, setActiveCategories] = useState<
    Array<(typeof props.categories)[number]>
  >([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [endCursor, setEndCursor] = useState<string>("0");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const batchSize = 1;

  //Hooks
  const { screen } = useClientInfoService();
  const { data, fetchMore } = useQuery(GET_PROJECTS_QUERY, {
    variables: {
      limit: batchSize,
      offset: endCursor,
    },
  });

  //Effects

  useEffect(() => {
    if (data && !projects) {
      setEndCursor(data!.projects?.pageInfo.endCursor || "0");
      const projectsInfo = projectFormatter(data!);

      setProjects(projectsInfo);
    }
  }, [data]);

  //Methods
  const fetchProjects = async () => {
    try {
      if (!fetchMore) return;

      const { data } = await fetchMore({
        variables: {
          limit: batchSize,
          offset: endCursor,
        },
      });

      setEndCursor(data.projects?.pageInfo.endCursor || "0");
      const res = projectFormatter(data);

      if (res) {
        setProjects((prev) => [...prev!, ...res]);
      }
    } catch (e) {
      console.log(e);
      NotificationHandler.instance.error("Error fetching projects");
    }
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
    <section
      className={`
        projects-section tw-relative tw-top-[-35px] tw-rounded-t-[30px]
        tw-bg-gradient-to-b tw-from-[var(--secondary-base)]
        tw-to-[var(--secondary-darker)] tw-overflow-hidden tw-border-t-2
        tw-border-[var(--primary-light)]
      `}
    >
      <div
        className={`
          shape tw-absolute tw-top-0 tw-left-0 -tw-translate-x-[50%]
          -tw-translate-y-[50%] tw-w-[200vw] tw-h-[200vw]
          tw-bg-[radial-gradient(circle,var(--primary-light)_0%,_rgba(0,0,0,0)_70%)]
          tw-opacity-[.7] tw-blur-[100px] tw-max-w-[1000px] tw-max-h-[1000px]
        `}
      />
      <div
        className={`
          content cs-section-structure tw-relative tw-z-[2] tw-flex tw-flex-col
          tw-gap-[20px]

          md:tw-gap-[30px]
        `}
      >
        <div
          className={`
            header tw-h-[58px] tw-justify-between tw-items-center tw-inline-flex
            tw-w-full tw-gap-[20px]

            lg:tw-flex-row lg:tw-h-[70px]

            md:tw-flex-col md:tw-gap-[10px] md:tw-h-[123px] md:tw-items-start
          `}
        >
          <div
            className={`
              title tw-text-white tw-text-2xl tw-font-normal tw-font-bowlby-one
              tw-whitespace-nowrap

              lg:tw-text-5xl

              md:tw-text-4xl
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
          </div>
          <div
            className={`
              icons tw-justify-end tw-items-center tw-gap-[5px] tw-flex

              md:tw-w-full
            `}
          >
            <div
              className={`
                icon

                lg:tw-max-w-[630px]

                md:tw-flex-1
              `}
            >
              {screen !== "sm" && (
                <input
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  placeholder="Search..."
                  className={`
                    tw-flex-1 tw-bg-[rgba(0,0,0,0)] tw-text-2xl tw-font-inter
                    tw-outline-none tw-text-headings
                  `}
                />
              )}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={`
                  tw-transition-all tw-duration-200 tw-ease-in-out

                  hover:tw-text-headings
                `}
              />
            </div>
            {["sm", "md"].includes(screen) && (
              <div className={`icon`}>
                <FontAwesomeIcon
                  icon={faFilter}
                  className={`
                    tw-transition-all tw-duration-200 tw-ease-in-out

                    hover:tw-text-headings
                  `}
                />
              </div>
            )}
          </div>
        </div>
        {!["sm", "md"].includes(screen) && (
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
                    activeCategories.includes(category) ? "active" : "disabled"
                  }
                />
              );
            })}
          </div>
        )}
        <div
          className={`
            projects tw-flex tw-flex-col tw-gap-[20px]

            lg:tw-grid lg:tw-grid-cols-3

            md:tw-gap-[30px]
          `}
        >
          {projects
            ? projects.map((project, i) => {
                return (
                  <ProjectPreview
                    key={i}
                    thumbnail={project.thumbnailUrl}
                    title={project.title}
                    categories={project.categories}
                  />
                );
              })
            : Array.from({ length: batchSize }).map((_, i) => {
                return <ProjectPreviewSkeleton key={i} />;
              })}
        </div>
        {hasNextPage && (
          <Button
            variant="secondary"
            fit={screen === "sm" ? "full" : "inline"}
            className={`
              !tw-bg-black tw-mx-auto tw-px-[75px]

              lg:tw-mr-0
            `}
            onClick={() => {
              fetchProjects();
            }}
          >
            See More
          </Button>
        )}
      </div>
    </section>
  );
};

export default Projects;
