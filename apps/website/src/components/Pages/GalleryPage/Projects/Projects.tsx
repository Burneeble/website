import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectsProps } from "./Projects.types";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Projects = (props: ProjectsProps) => {
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
          tw-opacity-[.7] tw-blur-[100px]
        `}
      />
      <div className={`content cs-section-structure tw-relative tw-z-[2]`}>
        <div
          className={`
            header tw-h-[58px] tw-justify-between tw-items-center tw-inline-flex
            tw-w-full tw-gap-[20px]
          `}
        >
          <div
            className={`
              title tw-text-white tw-text-2xl tw-font-normal tw-font-bowlby-one
            `}
          >
            GALLERY
          </div>
          <div
            className={`
              icons tw-justify-end tw-items-center tw-gap-[5px] tw-flex
            `}
          >
            <div className={`icon`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className={`icon`}>
              <FontAwesomeIcon icon={faFilter} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
