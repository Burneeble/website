import ArticleBatch from "@/components/ArticleBatch";
import { BlogProps } from "./Blog.types";

const Blog = (props: BlogProps) => {
  return (
    <section
      className={`
        blog-section cs-section-structure tw-flex tw-flex-col tw-items-center
        tw-justify-center tw-gap-[20px]
      `}
    >
      <h2 className="title tw-text-center">
        Our{" "}
        <span className={`cs-text-color-primary-gradient`}>Blog Articles</span>
      </h2>
      <p className="description tw-text-center tw-text-3xl">
        At Burneeble, we are passionate about sharing our knowledge and passion
        with you, which is why we write{" "}
        <strong>development-related articles</strong>. Check it out!
      </p>
      <div
        className={`
          articles tw-flex tw-flex-col tw-items-center tw-justify-center
          tw-py-[30px] tw-relative tw-aspect-[744/769]

          lg:tw-aspect-auto
        `}
      >
        <div
          className={`
            bg tw-absolute tw-top-1/2 tw-left-1/2 tw-bg-gradient-to-r
            tw-w-screen primary-gradient -tw-translate-x-1/2 -tw-translate-y-1/2
            tw-aspect-[744/679]

            lg:tw-h-full lg:tw-aspect-auto
          `}
        />
        <ArticleBatch limit={3} enableSliderResponsiveMode />
      </div>
    </section>
  );
};

export default Blog;
