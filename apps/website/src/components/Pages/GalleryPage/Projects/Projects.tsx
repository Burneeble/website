"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectsProps } from "./Projects.types";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ProjectModel, useProjectService } from "@/services/ProjectService";
import { useEffect, useState } from "react";
import {
  Button,
  NotificationHandler,
  ProjectPreview,
  useClientInfoService,
} from "@burneeble/ui-components";

const Projects = (props: ProjectsProps) => {
  //States
  const [projects, setProjects] = useState<Array<ProjectModel> | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  //Hooks
  const { getProjects } = useProjectService();
  const { screen } = useClientInfoService();

  //Effects
  useEffect(() => {
    fetchProjects();
  }, []);

  //Methods
  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res);
    } catch (e) {
      console.log(e);
      NotificationHandler.instance.error("Error fetching projects");
    }
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

            md:tw-flex-col md:tw-gap-[10px] md:tw-h-[123px] md:tw-items-start
          `}
        >
          <div
            className={`
              title tw-text-white tw-text-2xl tw-font-normal tw-font-bowlby-one

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
                    tw-outline-none
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
            <div className={`icon`}>
              <FontAwesomeIcon
                icon={faFilter}
                className={`
                  tw-transition-all tw-duration-200 tw-ease-in-out

                  hover:tw-text-headings
                `}
              />
            </div>
          </div>
        </div>
        <div
          className={`
            projects tw-flex tw-flex-col tw-gap-[20px]

            lg:tw-grid lg:tw-grid-cols-3

            md:tw-gap-[30px]
          `}
        >
          {projects &&
            projects.map((project, i) => {
              return (
                <ProjectPreview
                  key={i}
                  thumbnail={project.thumbnailUrl}
                  title={project.title}
                  categories={project.categories}
                />
              );
            })}
        </div>
        <Button
          variant="secondary"
          fit={screen === "sm" ? "full" : "inline"}
          className="!tw-bg-black tw-mx-auto tw-px-[75px]"
        >
          See More
        </Button>
      </div>
    </section>
  );
};

export default Projects;
