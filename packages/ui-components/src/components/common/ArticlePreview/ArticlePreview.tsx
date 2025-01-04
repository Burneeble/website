import React from "react";
import { ArticlePreviewProps } from "./ArticlePreview.types";
import { useRouter } from "next/navigation";
import Label from "../Label";

const ArticlePreview = (props: ArticlePreviewProps) => {
  //Hooks
  const router = useRouter();

  //Methods
  const formatDescription = () => {
    const sliced = props.description.slice(0, 191);

    const lastSpace = sliced.lastIndexOf(" ");

    const final = sliced.slice(0, lastSpace);

    return final + ` <strong class="tw-cursor-pointer">Read more...</strong>`;
  };

  return (
    <div
      className={`
        article-preview tw-inline-flex tw-w-full tw-flex-col tw-items-start
        tw-justify-start tw-gap-[20px] tw-rounded-lg
      `}
      onClick={() => {
        router.push(`/blog/article/${props.slug}`);
      }}
    >
      <div
        className={`
          image-wrapper tw-group tw-aspect-[1920/1080] tw-w-full
          tw-cursor-pointer tw-overflow-hidden tw-rounded-t-lg tw-transition-all
          tw-duration-200 tw-ease-in-out
        `}
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
          article-info tw-flex tw-h-[275px] tw-max-w-full tw-flex-col
          tw-items-start tw-justify-start tw-gap-[5px]
        `}
      >
        <Label
          text={props.category}
          onClick={() => {
            router.push(`/blog/category/${props.categorySlug}`);
          }}
          size={"sm"}
        />
        <div
          className={`
            title tw-max-w-full tw-cursor-pointer tw-truncate tw-font-inter
            tw-text-xl tw-font-black tw-leading-loose tw-text-headings
            tw-transition-all tw-duration-200 tw-ease-in-out

            xl:tw-text-2xl
          `}
          dangerouslySetInnerHTML={{
            __html: props.title,
          }}
        />
        <p
          className="description tw-font-inter tw-text-xl"
          dangerouslySetInnerHTML={{ __html: formatDescription() }}
        />
      </div>
    </div>
  );
};

export default ArticlePreview;
