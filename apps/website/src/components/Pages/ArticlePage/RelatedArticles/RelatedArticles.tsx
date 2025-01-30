import ArticleBatch from "@/components/ArticleBatch";
import { RelatedArticlesProps } from "./RelatedArticles.types";

const RelatedArticles = (props: RelatedArticlesProps) => {
  return (
    <section
      className={`
        cs-section-structure related-articles tw-w-screen tw-relative tw-p-0
        tw-max-w-[unset] tw-flex tw-flex-col tw-items-center tw-justify-center
        tw-gap-[40px] tw-min-h-[calc(100vh-30px)]

        after:tw-block after:tw-absolute after:tw-bg-gradient-to-r
        after:tw-top-[calc(50%+5px)] after:tw-left-1/2 after:-tw-translate-x-1/2
        after:-tw-translate-y-1/2 after:tw-w-full after:tw-h-[calc(100%+79px)]
        after:tw-border-t-[2px] after:tw-border-solid after:tw-border-white
        after:tw-z-[-1]
      `}
    >
      <h2 className="title tw-text-center">Related Articles</h2>
      <ArticleBatch limit={3} />
    </section>
  );
};

export default RelatedArticles;
