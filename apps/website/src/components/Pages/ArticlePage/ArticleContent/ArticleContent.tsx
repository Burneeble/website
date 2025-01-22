"use client";

import RoundedWrapper from "@/components/RoundedWrapper";
import { ArticleContentProps } from "./ArticleContent.types";
import { Label } from "@burneeble/ui-components";
import Link from "next/link";

const ArticleContent = (props: ArticleContentProps) => {
  return (
    <section className={`cs-structure-page article-content`}>
      <RoundedWrapper
        className={`
          tw-py-[50px] tw-flex tw-flex-col tw-items-start tw-justify-start
          !tw-gap-[10px]
        `}
      >
        <Label text={props.article.categories[0].name} variant={"active"} />
        <h1
          className={`
            title !tw-leading-[47px]

            md:!tw-leading-[94px]

            sm:!tw-leading-[70px]
          `}
        >
          {props.article.title}
        </h1>
        <p className="author tw-pb-[10px] p-small tw-text-headings">
          Published by{" "}
          <Link
            href={"/"}
            className={`
              tw-text-action tw-transition-all tw-duration-200 tw-ease-in-out

              hover:tw-text-action-hover
            `}
          >
            burneeble team
          </Link>{" "}
          on 22 April 2024
        </p>
        <div
          className={`
            article-body tw-flex tw-flex-col tw-gap-[30px] tw-text-headings
          `}
          dangerouslySetInnerHTML={{ __html: props.article.content }}
        />
      </RoundedWrapper>
    </section>
  );
};

export default ArticleContent;
