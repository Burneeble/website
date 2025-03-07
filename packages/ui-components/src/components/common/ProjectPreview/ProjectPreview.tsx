import React from "react";
import { ProjectPreviewProps } from "./ProjectPreview.types";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const ProjectPreview = (props: ProjectPreviewProps) => {
  //Hooks
  const router = useRouter();

  //Methods
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text; // Avoid unnecessary changes

    const safeQuery = query.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

    // Removes any previous highlights
    text = text.replace(/<span class="highlight">(.*?)<\/span>/gi, "$1");

    // Replaces text by highlighting it, avoiding breaking HTML tags
    return text.replace(
      new RegExp(`(${safeQuery})`, "gi"),
      '<span class="highlight">$1</span>'
    );
  };
  const openProject = () => {
    router.push(
      `/project/${props.title
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
          image-wrapper tw-group tw-relative tw-aspect-[1920/1080] tw-w-full
          tw-cursor-pointer tw-overflow-hidden tw-rounded-lg tw-border
          tw-border-neutral tw-transition-all tw-duration-200 tw-ease-in-out

          hover:tw-border-active
        `}
        onClick={() => {
          openProject();
        }}
      >
        <div
          className={`
            layer tw-absolute tw-inset-0 tw-bg-action tw-opacity-0
            tw-transition-all tw-duration-200 tw-ease-in-out

            group-hover:tw-opacity-[10%]
          `}
        />
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
            title p-small tw-max-w-full tw-cursor-pointer tw-truncate
            tw-font-black tw-text-headings tw-transition-all tw-duration-200
            tw-ease-in-out

            hover:tw-text-primary
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
            categories p-small tw-flex tw-max-w-full tw-flex-wrap tw-gap-[5px]
            tw-font-normal
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
                    p-smaller tw-h-fit tw-cursor-pointer tw-rounded-lg tw-border
                    tw-border-neutral category tw-px-[5px] tw-font-normal
                    tw-transition-all tw-duration-200 tw-ease-in-out

                    hover:tw-border-white hover:tw-text-headings
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
