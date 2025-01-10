import ArticleBatch from "@/components/ArticleBatch";
import { BlogProps } from "./Blog.types";

const Blog = (props: BlogProps) => {
  return (
    <section
      className={`
        blog-section cs-website-horizontal-padding tw-flex tw-flex-col
        tw-items-center tw-justify-center cs-gap-between-content
      `}
    >
      <div
        className={`
          texts tw-flex tw-flex-col tw-items-center tw-justify-center
          cs-gap-between-text cs-website-horizontal-padding tw-max-w-[1300px]
        `}
      >
        <h2 className="title tw-text-center">
          Our{" "}
          <span className={`cs-text-color-primary-gradient`}>
            Blog Articles
          </span>
        </h2>
        <p
          className={`
            description tw-text-center tw-text-xl tw-leading-7

            lg:tw-text-3xl lg:tw-leading-10

            md:tw-text-2xl md:tw-leading-9
          `}
        >
          At Burneeble, we are passionate about sharing our knowledge and
          passion with you, which is why we write{" "}
          <strong>development-related articles</strong>. Check it out!
        </p>
      </div>
      <div
        className={`
          articles tw-flex tw-flex-col tw-items-center tw-justify-center
          tw-my-[30px] tw-relative cs-website-horizontal-padding
          tw-bg-gradient-to-r tw-w-screen primary-gradient tw-py-[30px]

          lg:tw-my-0
        `}
      >
        <ArticleBatch limit={3} enableSliderResponsiveMode />
      </div>
    </section>
  );
};

export default Blog;
