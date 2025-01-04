import ArticleBatch from "@/components/ArticleBatch";
import { BlogProps } from "./Blog.types";

const Blog = (props: BlogProps) => {
  return (
    <section className="blog-section cs-section-structure">
      <ArticleBatch limit={3} />
    </section>
  );
};

export default Blog;
