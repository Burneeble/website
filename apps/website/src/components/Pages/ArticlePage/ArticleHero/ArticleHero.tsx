import { ArticleHeroProps } from "./ArticleHero.types";

const ArticleHero = (props: ArticleHeroProps) => {
  return (
    <section
      className={`
        cs-section-structure article-hero tw-relative tw-h-[355px] tw-min-h-0

        md:tw-h-[560px]

        sm:tw-h-[530px]
      `}
    >
      <div
        className={`
          bg tw-absolute tw-left-1/2 tw-top-0 tw-z-[-1] tw-h-[457px] tw-w-screen
          -tw-translate-x-1/2 !tw-bg-cover !tw-bg-center !tw-bg-no-repeat

          md:tw-h-[653px]

          sm:tw-h-[624px]
        `}
        style={{
          background: `linear-gradient(180deg,black 1%,rgba(0,0,0,0) 80%),url("${props.article.thumbnail}")`,
        }}
      />
    </section>
  );
};

export default ArticleHero;
