import React from "react";
import {
  ArticlePreviewProps,
  articlePreviewVariants,
} from "./ArticlePreview.types";
import { useRouter } from "next/navigation";
import Label from "../Label";
import { cn } from "@/lib/utils";

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

  return (
    <div
      className={cn(
        `article-preview`,
        articlePreviewVariants({ variant: props.variant })
      )}
      onClick={() => {
        router.push(`/blog/article/${props.slug}`);
      }}
    >
      <div
        className={cn(
          `
            image-wrapper tw-relative tw-aspect-[1920/1080] tw-w-full
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
              tw-border-[var(--neutral-default)]

              group-hover:tw-border-[var(--primary-default)]
            `
        )}
      >
        <div
          className={`
            layer tw-absolute tw-inset-0 tw-bg-[var(--primary-default)]
            tw-opacity-0 tw-transition-all tw-duration-200 tw-ease-in-out

            group-hover:tw-opacity-[10%]
          `}
        ></div>
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
          onClick={() => {
            router.push(`/blog/category/${props.categorySlug}`);
          }}
          size={"sm"}
          variant={variant === "dark" ? "active" : undefined}
        />
        <div
          className={cn(
            `
              texts tw-relative tw-flex tw-flex-col tw-gap-[5px]
              tw-transition-all tw-duration-200 tw-ease-in-out

              after:tw-absolute after:tw-bottom-0 after:tw-left-[-12px]
              after:tw-block after:tw-h-[0] after:tw-w-[3px]
              after:tw-transition-all after:tw-duration-200 after:tw-ease-in-out
              after:tw-content-[''] after:group-hover:tw-h-[calc(100%-5px)]

              group-hover:tw-translate-x-[12px]
            `,
            variant === "default" && "after:tw-bg-black",
            variant === "dark" && "after:tw-bg-[var(--primary-default)]"
          )}
        >
          <p
            className={cn(
              `
                title tw-max-w-full tw-cursor-pointer tw-font-inter tw-text-xl
                tw-font-black tw-leading-[28px] tw-text-headings
                tw-transition-all tw-duration-200 tw-ease-in-out

                lg:tw-text-2xl lg:tw-leading-[35px]

                md:tw-text-2xl md:tw-leading-[35px]
              `,
              variant === "dark" && "group-hover:tw-text-action",
              variant === "default" && `group-hover:tw-text-black`
            )}
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          />
          {/* TODO use the right p class */}
          <p
            className={`
              description tw-font-inter tw-text-lg tw-text-headings

              lg:tw-text-xl lg:tw-leading-[30px]

              md:tw-text-xl md:tw-leading-[32px]
            `}
            dangerouslySetInnerHTML={{ __html: formatDescription() }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
