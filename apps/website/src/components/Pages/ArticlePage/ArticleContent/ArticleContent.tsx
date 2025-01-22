"use client";

import RoundedWrapper from "@/components/RoundedWrapper";
import { ArticleContentProps } from "./ArticleContent.types";
import { Label } from "@burneeble/ui-components";
import Link from "next/link";

const ArticleContent = (props: ArticleContentProps) => {
  return (
    <section
      className={`
        cs-structure-page article-content tw-flex tw-flex-col tw-items-start
        tw-justify-start
      `}
    >
      <RoundedWrapper>
        <Label text={props.article.categories[0].name} variant={"active"} />
        <h1>{props.article.title}</h1>
        <p>
          Published by <Link href={"/"}>burneeble team</Link> on 22 April 2024
        </p>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: props.article.content }}
        />
      </RoundedWrapper>
    </section>
  );
};

export default ArticleContent;
