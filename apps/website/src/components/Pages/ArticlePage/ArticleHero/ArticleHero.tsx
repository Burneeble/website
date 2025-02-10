import { ArticleHeroProps } from "./ArticleHero.types";

const ArticleHero = (props: ArticleHeroProps) => {
  return (
    <section
      className={`
        cs-section-structure article-hero tw-relative tw-min-h-0 tw-h-[355px]

        md:tw-h-[560px]

        sm:tw-h-[530px]
      `}
    >
      <div
        className={`
          bg tw-absolute tw-top-0 tw-left-1/2 tw-w-screen tw-z-[-1]
          -tw-translate-x-1/2 !tw-bg-cover !tw-bg-no-repeat !tw-bg-center
          tw-h-[457px]

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
