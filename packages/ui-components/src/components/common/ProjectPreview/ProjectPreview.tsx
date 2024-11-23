import React from "react";
import { ProjectPreviewProps } from "./ProjectPreview.types";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const ProjectPreview = (props: ProjectPreviewProps) => {
  //Hooks
  const router = useRouter();

  //Methods
  const highlightText = (text: string, query: string) => {
    const words = query.split(" ").filter((word) => word.trim() !== "");
    let highlightedText = text;
    words.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        '<span class="highlight">$1</span>'
      );
    });
    return highlightedText;
  };

  const openProject = () => {
    router.push(
      `/projects/${props.title
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .replaceAll(" ", "-")}`
    );
  };

  return (
    <div
      className={`
        project-preview tw-inline-flex tw-w-full tw-flex-col tw-items-start
        tw-justify-start tw-gap-[10px] tw-rounded-lg
      `}
    >
      <div
        className={`
          image-wrapper tw-group tw-aspect-[1920/1080] tw-w-full
          tw-cursor-pointer tw-overflow-hidden tw-rounded-lg tw-border
          tw-border-[var(--neutral-default)] tw-transition-all tw-duration-200
          tw-ease-in-out

          hover:tw-border-tertiary
        `}
        onClick={() => {
          openProject();
        }}
      >
        <img
          className={`
            tw-aspect-[1920/1080] tw-w-full tw-self-stretch tw-transition-all
            tw-duration-200 tw-ease-in-out

            group-hover:tw-scale-110
          `}
          src={props.thumbnail}
        />
      </div>
      <div
        className={`
          project-info tw-flex tw-h-[146px] tw-max-w-full tw-flex-col
          tw-items-start tw-justify-start
        `}
      >
        <div
          className={`
            title tw-max-w-full tw-cursor-pointer tw-truncate tw-font-inter
            tw-text-xl tw-font-black tw-leading-loose tw-text-headings
            tw-transition-all tw-duration-200 tw-ease-in-out

            hover:tw-text-primary

            xl:tw-text-2xl
          `}
          dangerouslySetInnerHTML={{
            __html: highlightText(props.title, props.query || ""),
          }}
          onClick={() => {
            openProject();
          }}
        />
        <div
          className={`
            categories tw-flex tw-max-w-full tw-flex-wrap tw-gap-[5px]
            tw-font-inter tw-text-lg tw-font-normal tw-leading-7 tw-text-body

            xl:tw-text-xl
          `}
        >
          {(props.categories.length > 5
            ? props.categories.slice(0, 5)
            : props.categories
          ).map((category, i) => {
            return (
              <span
                key={i}
                className={cn(
                  `
                    tw-h-fit tw-cursor-pointer tw-rounded-lg tw-border
                    tw-border-neutral category tw-px-[5px] tw-font-inter
                    tw-text-lg tw-font-normal tw-leading-[30px] tw-text-body
                    tw-transition-all tw-duration-200 tw-ease-in-out

                    hover:tw-border-white hover:tw-text-headings

                    xl:tw-text-xl
                  `,
                  props.activeCategories.includes(category) &&
                    `tw-border-primary tw-text-primary`
                )}
                onClick={() => {
                  if (props.activeCategories.includes(category)) {
                    props.setActiveCategories((prev) =>
                      prev.filter((cat) => cat !== category)
                    );
                  } else {
                    props.setActiveCategories((prev) => [...prev, category]);
                  }
                }}
              >
                {category}
              </span>
            );
          })}
          {props.categories.length > 5 && <span>and others.</span>}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
