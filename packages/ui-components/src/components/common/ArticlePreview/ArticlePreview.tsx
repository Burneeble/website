"use client";

import React from "react";
import {
  ArticlePreviewProps,
  articlePreviewVariants,
} from "./ArticlePreview.types";
import Label from "../Label";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const ArticlePreview = (props: ArticlePreviewProps) => {
  //States
  const variant = props.variant || "default";

  //Hooks
  const router = useRouter();

  //Methods
  const convertHtmlToPlainText = (html: string): string => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;

    tempElement.querySelectorAll("script, style").forEach((el) => el.remove());

    const plainText = tempElement.textContent || "";

    return plainText.replace(/\s+/g, " ").trim();
  };

  const formatDescription = () => {
    const sliced = convertHtmlToPlainText(props.description).slice(0, 191);

    const lastSpace = sliced.lastIndexOf(" ");

    const final = sliced.slice(0, lastSpace);

    return (
      final +
      ` <strong class="tw-cursor-pointer ${
        variant === "dark" ? "tw-text-action" : ""
      }">Read more...</strong>`
    );
  };

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

  return (
    <div
      className={cn(
        `article-preview`,
        props.className && props.className,
        articlePreviewVariants({ variant: props.variant })
      )}
    >
      <div
        onClick={() => {
          router.push(`/blog/article/${props.slug}`);
        }}
        className={cn(
          `
            tw-group image-wrapper tw-relative tw-aspect-[1920/1080] tw-w-full
            tw-cursor-pointer tw-overflow-hidden tw-rounded-t-lg tw-border-[1px]
            tw-border-solid tw-transition-all tw-duration-200 tw-ease-in-out
          `,
          variant === "default" &&
            `
              tw-border-[var(--primary-light)]

              group-hover:tw-border-black
            `,
          variant === "dark" &&
            `
              tw-border-neutral

              group-hover:tw-border-active
            `
        )}
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
          `}
          src={props.thumbnail}
        />
      </div>
      <div
        className={`
          article-info tw-flex tw-max-w-full tw-flex-col tw-items-start
          tw-justify-start tw-gap-[5px]
        `}
      >
        <Label
          text={props.category}
          size={"sm"}
          variant={variant === "dark" ? "active" : undefined}
          onClick={() => {
            router.push(`/blog/category/${props.categorySlug}`);
          }}
          className={"tw-group/label"}
        />
        {/* this div is just for the hover effect, only the text content and not the label */}
        <div
          className="tw-group"
          onClick={() => {
            router.push(`/blog/article/${props.slug}`);
          }}
        >
          <div
            className={cn(
              `
                texts tw-relative tw-flex tw-flex-col tw-gap-[5px]
                tw-transition-all tw-duration-200 tw-ease-in-out

                after:tw-absolute after:tw-bottom-0 after:tw-left-[-12px]
                after:tw-block after:tw-h-[0] after:tw-w-[3px]
                after:tw-transition-all after:tw-duration-200
                after:tw-ease-in-out after:tw-content-['']
                after:group-hover:tw-h-[calc(100%-5px)]

                group-hover:tw-translate-x-[12px]
              `,
              variant === "default" && "after:tw-bg-black",
              variant === "dark" && "after:tw-bg-action"
            )}
          >
            <p
              className={cn(
                `
                  title p-small tw-max-w-full tw-cursor-pointer tw-font-black
                  tw-text-headings tw-transition-all tw-duration-200
                  tw-ease-in-out

                  md:tw-text-2xl md:tw-leading-[35px]
                `,
                variant === "dark" && "group-hover:tw-text-action",
                variant === "default" && `group-hover:tw-text-black`
              )}
              dangerouslySetInnerHTML={{
                __html: highlightText(props.title, props.query || ""),
              }}
            />
            {/* TODO use the right p class */}
            <p
              className={`
                description p-smaller tw-cursor-pointer tw-text-headings

                md:tw-text-xl md:tw-leading-[32px]
              `}
              dangerouslySetInnerHTML={{ __html: formatDescription() }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
