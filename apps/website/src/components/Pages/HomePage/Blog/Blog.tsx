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
      <p
        className={`
          description tw-text-center tw-text-xl tw-leading-7

          lg:tw-text-3xl lg:tw-leading-10

          md:tw-text-2xl md:tw-leading-9
        `}
      >
        At Burneeble, we are passionate about sharing our knowledge and passion
        with you, which is why we write{" "}
        <strong>development-related articles</strong>. Check it out!
      </p>
      <div
        className={`
          articles tw-flex tw-flex-col tw-items-center tw-justify-center
          tw-my-[30px] tw-relative tw-max-w-full

          lg:tw-my-0 lg:tw-py-[30px]
        `}
      >
        <div
          className={`
            bg tw-absolute tw-top-0 tw-left-1/2 tw-bg-gradient-to-r tw-w-screen
            primary-gradient -tw-translate-x-1/2

            lg:tw-h-full

            md:tw-h-[81%]
          `}
        />
        <ArticleBatch limit={3} enableSliderResponsiveMode />
      </div>
    </section>
  );
};

export default Blog;
