import ArticleBatch, { ArticleBatchVariant } from "@/components/ArticleBatch";
import { BlogProps } from "./Blog.types";

const Blog = (props: BlogProps) => {
  return (
    <section
      id={"blog"}
      className={`
        blog-section cs-website-horizontal-padding cs-website-vertical-padding
        tw-flex tw-flex-col tw-items-center tw-justify-center
        cs-gap-between-content tw-min-h-screen
      `}
    >
      <div
        className={`
          texts tw-flex tw-flex-col tw-items-center tw-justify-center
          cs-gap-between-text tw-max-w-screen-xl
        `}
      >
        <h2 className="title tw-text-center">
          Our{" "}
          <span className={`cs-text-color-primary-gradient`}>
            Blog Articles
          </span>
        </h2>
        <p className={`description tw-text-center p-default`}>
          At Burneeble, we are passionate about sharing our knowledge and
          passion with you, which is why we write{" "}
          <strong>development-related articles</strong>. Check it out!
        </p>
      </div>
      <div
        className={`
          articles tw-relative tw-flex tw-w-screen tw-flex-col tw-items-center
          tw-justify-center cs-website-horizontal-padding tw-bg-gradient-to-r
          primary-gradient cs-website-horizontal-padding tw-py-[15px]

          lg:tw-my-0

          md:tw-py-[30px]
        `}
      >
        <ArticleBatch
          type={ArticleBatchVariant.LATEST}
          limit={3}
          enableSliderResponsiveMode
        />
      </div>
    </section>
  );
};

export default Blog;
