import { ArticleServiceProvider } from "@/services";
import { BlogPagesProvidersProps } from "./BlogPagesProviders.types";

const BlogPagesProviders = (props: BlogPagesProvidersProps) => {
  return <ArticleServiceProvider>{props.children}</ArticleServiceProvider>;
};

export default BlogPagesProviders;
