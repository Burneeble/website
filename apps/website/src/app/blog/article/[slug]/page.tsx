import { ArticleContent, ArticleHero } from "@/components/Pages";
import { ArticleService } from "@/services";
import { redirect } from "next/navigation";

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const res = await ArticleService.instance.getArticle(slug);

  if (!res) {
    redirect("/not-found");
  }

  const article = JSON.parse(JSON.stringify(res));

  return (
    <div className="cs-page article-page">
      <ArticleHero article={article} />
      <ArticleContent article={article} />
    </div>
  );
};

export default ArticlePage;
